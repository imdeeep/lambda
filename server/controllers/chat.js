import { ALERT, REFETCH_CHATS } from "../constants/events.js";
import { getOtherMember } from "../lib/helper.js";
import { Chat } from "../models/chat.js";
import { emitEvent } from "../utils/features.js";
import { ErrorHandler } from "../utils/utility.js";
import {User} from "../models/user.js";

// newGroupChat
export const newGroupChat = async (req, res) => {
  const { name, members } = req.body;
  try {
    if (members.length < 2) {
      return res
        .status(400)
        .json({ message: "Group chat must have at least 3 members" });
    }
    const allMembers = [...members, req.user];
    await Chat.create({
      name,
      groupChat: true,
      creator: req.user,
      members: allMembers,
    });

    emitEvent(req, ALERT, allMembers, `Welcome to ${name} group`);
    emitEvent(req, REFETCH_CHATS, members);

    return res
      .status(201)
      .json({ success: true, message: "Group chat created successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// getMyChats
export const getMyChats = async (req, res) => {
  try {
    const chats = await Chat.find({ members: req.user })
      .populate("members", "user userId username name email")
      .sort({ updatedAt: -1 });

    const transformedChats = chats.map(
      ({ _id, userId, username, name, members, groupChat }) => {
        const otherMember = getOtherMember(members, req.user);

        return {
          _id,
          userId,
          username,
          groupChat,
          name: groupChat ? name : otherMember.name,
          members: members,
        };
      }
    );

    return res.status(200).json({ success: true, chats: transformedChats });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// getMyGroups
export const getMyGroups = async (req, res) => {
  try {
    const chats = await Chat.find({
      members: req.user,
      groupChat: true,
      creator: req.user,
    })
      .populate("members", "user userId username name email")
      .sort({ updatedAt: -1 });

    const groups = chats.map(({ _id, groupChat, name, members }) => ({
      _id,
      groupChat,
      name,
      members,
    }));

    return res.status(200).json({ success: true, groups });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Add members to group chat
export const addMembers = async (req, res, next) => {
  try {
    const { chatId, members } = req.body;
    console.log(chatId, members)

    const chat = await Chat.findById(chatId);

    if (!chat) return next(new ErrorHandler("Chat not found", 404));

    if (!chat.groupChat)
      return next(new ErrorHandler("This is not a group chat", 400));

    // if (chat.creator !== req.user.username)
    //   return next(new ErrorHandler("You are not allowed to add members", 403));

    const allNewMembersPromise = members.map((i) => User.findById(i, "name"));

    const allNewMembers = await Promise.all(allNewMembersPromise);

    const uniqueMembers = allNewMembers
      .filter((i) => !chat.members.includes(i._id.toString()))
      .map((i) => i._id);

    chat.members.push(...uniqueMembers);

    if (chat.members.length > 100)
      return next(new ErrorHandler("Group members limit reached", 400));

    await chat.save();

    const allUsersName = allNewMembers.map((i) => i.name).join(", ");

    emitEvent(
      req,
      ALERT,
      chat.members,
      `${allUsersName} has been added in the group`
    );

    emitEvent(req, REFETCH_CHATS, chat.members);

    return res.status(200).json({
      success: true,
      message: "Members added successfully",
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Remove Members
