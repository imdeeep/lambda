import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cloudinary from "../config/cloudinary.js";
import { TryCatch } from "../middlewares/error.js";
import { Chat } from "../models/chat.js";
import { Request } from "../models/request.js";
import { emitEvent } from "../utils/features.js";
import { ErrorHandler } from "../utils/utility.js";
import { REFETCH_CHATS } from "../constants/events.js";
import { getOtherMember } from "../lib/helper.js";

// Sign up
export const signup = TryCatch(async (req, res) => {
  const { username, email, password } = req.body;
  let user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({ msg: "User already exists" });
  }
  user = new User({
    username,
    email,
    password,
  });

  // Password Hashing
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(password, salt);

  // Saving the user in the database
  await user.save();

  // Return Jwt
  const payload = {
    user: {
      id: user.id,
      username: user.username,
    },
  };
  jwt.sign(
    payload,
    process.env.JWT_SECRET,
    { expiresIn: 3600 },
    (err, token) => {
      if (err) throw err;
      res.cookie("token", token, {
        httpOnly: false,
        secure: process.env.SECURITY,
        sameSite: "Lax",
      });
      res.json({ token });
    }
  );
});

// Login
export const login = TryCatch(async (req, res) => {
  const { username, password } = req.body;
  let user = await User.findOne({ username });
  if (!user) {
    return res.status(400).json({ msg: "User not Found" });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ msg: "Invalid Credentials" });
  }

  // Return JWT
  const payload = {
    user: {
      id: user.id,
      username: user.username,
    },
  };

  jwt.sign(
    payload,
    process.env.JWT_SECRET,
    { expiresIn: 3600 },
    (err, token) => {
      if (err) throw err;
      res.cookie("token", token, {
        httpOnly: false,
        secure: false,
        sameSite: "Lax",
      });
      res.json({ msg: "Login Successful", token });
    }
  );
});

// Get User Info
export const getCurrentUser = TryCatch(async (req, res) => {
  const token = req.query.token;
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findById(decoded.user.id).select("-password");
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json(user);
});

// Edit User Info
export const editUser = TryCatch(async (req, res) => {
  const { userId, name, bio } = req.body;
  const user = await User.findOne({ userId }).select("-password");
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  if (name !== undefined) user.name = name;
  if (bio !== undefined) user.bio = bio;

  if (req.file) {
    const result = await cloudinary.uploader.upload(req.file.path);
    user.userImage = {
      public_id: result.public_id,
      url: result.secure_url,
    };
  }

  await user.save();
  res.json({ message: "User updated successfully", user });
});

// Search User
export const searchUser = TryCatch(async (req, res) => {
  const { name = "" } = req.query;

  // Finding All my chats
  const myChats = await Chat.find({ groupChat: false, members: req.user });

  //  extracting All Users from my chats means friends or people I have chatted with
  const allUsersFromMyChats = myChats.flatMap((chat) => chat.members);

  // Finding all users except me and my friends
  const allUsersExceptMeAndFriends = await User.find({
    _id: { $nin: allUsersFromMyChats },
    name: { $regex: name, $options: "i" },
  });

  // Modifying the response
  const users = allUsersExceptMeAndFriends.map(({ _id, name, userImage }) => ({
    _id,
    name,
    userImage: userImage.url,
  }));

  return res.status(200).json({
    success: true,
    users,
  });
});

// Send Friend Request
export const sendFriendRequest = TryCatch(async (req, res, next) => {
  const { userId } = req.body;

  const request = await Request.findOne({
    $or: [
      { sender: req.user.id, receiver: userId },
      { sender: userId, receiver: req.user.id },
    ],
  });

  if (request) return next(new ErrorHandler("Request already sent", 400));

  await Request.create({
    sender: req.user.id,
    receiver: userId,
  });

  emitEvent(req, NEW_REQUEST, [userId]);

  return res.status(200).json({
    success: true,
    message: "Friend Request Sent",
  });
});

// Accept Friend Request
export const acceptFriendRequest = TryCatch(async (req, res, next) => {
    const { requestId, accept } = req.body;
  
    const request = await Request.findById(requestId)
      .populate("sender", "name")
      .populate("receiver", "name");
  
    if (!request) return next(new ErrorHandler("Request not found", 404));
  
    if (request.receiver._id.toString() !== req.user.id.toString())
      return next(
        new ErrorHandler("You are not authorized to accept this request", 401)
      );
  
    if (!accept) {
      await request.deleteOne();
  
      return res.status(200).json({
        success: true,
        message: "Friend Request Rejected",
      });
    }
  
    const members = [request.sender._id, request.receiver._id];
  
    await Promise.all([
      Chat.create({
        members,
        name: `${request.sender.name}-${request.receiver.name}`,
      }),
      request.deleteOne(),
    ]);
  
    emitEvent(req, REFETCH_CHATS, members);
  
    return res.status(200).json({
      success: true,
      message: "Friend Request Accepted",
      senderId: request.sender._id,
    });
  });

// Get My Notifications
export const getMyNotifications = TryCatch(async (req, res) => {
    const requests = await Request.find({ receiver: req.user.id }).populate(
      "sender",
      "name userImage"
    );
  
    const allRequests = requests.map(({ _id, sender }) => ({
      _id,
      sender: {
        _id: sender._id,
        name: sender.name,
        userImage: sender.userImage.url,
      },
    }));
  
    return res.status(200).json({
      success: true,
      allRequests,
    });
  });

// Get My Friends
export const getMyFriends = TryCatch(async (req, res) => {
    const chatId = req.query.chatId;
  
    const chats = await Chat.find({
      members: req.user,
      groupChat: false,
    }).populate("members", "name userImage");
  
    const friends = chats.map(({ members }) => {
      const otherUser = getOtherMember(members, req.user);
  
      return {
        _id: otherUser._id,
        name: otherUser.name,
        userImage: otherUser.userImage.url,
      };
    });
  
    if (chatId) {
      const chat = await Chat.findById(chatId);
  
      const availableFriends = friends.filter(
        (friend) => !chat.members.includes(friend._id)
      );
  
      return res.status(200).json({
        success: true,
        friends: availableFriends,
      });
    } else {
      return res.status(200).json({
        success: true,
        friends,
      });
    }
  });
