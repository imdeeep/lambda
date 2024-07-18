import { User } from "../models/user.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

// Sign up
export const signup = async(req,res)=>{
    const {username,email,password} = req.body;
    try{
        let user = await User.findOne({email});
        if(user){
            return res.status(400).json({ msg: 'User already exists' });
        }
         user = new User({
            username,
            email,
            password,
         })
    
        // Password Hashing
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        // Saving the user in the database
        await user.save();

        // Return Jwt
        const payload = {
            user: {
                id: user.id,
                username: user.username
            }
        };
        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
            if (err) throw err;
            res.cookie('token', token, { httpOnly: true, secure: process.env.SECURITY, sameSite: 'Lax' });
            res.json({ token });
        });
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
};

// Login
export const login = async(req,res)=>{
    const {username,password} = req.body;
    try{
        let user = await User.findOne({username});
        if(!user){
            return res.status(400).json({ msg: 'User not Found' });
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }

         // Return JWT
         const payload = {
            user: {
                id: user.id,
                username: user.username
            }
        };

        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
            if (err) throw err;
            res.cookie('token', token, { httpOnly: true, secure: false, sameSite: 'Lax' });
            res.json({ msg: 'Login Successful', token });
        });

    } catch (err) {
        console.error('Error during login:', err.message);
        res.status(500).send('Server Error');
    }
};

// Get User Info
export const getCurrentUser = async(req,res)=>{
    const token = req.query.token;
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.user.id).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(400).json({ message: 'Invalid token' });
    }
}

// Edit User Info 
export const editUser = async (req, res) => {
    const { userId, name, bio, userImage } = req.body;
    try {
        // Find the user by ID
        const user = await User.findOne({ userId }).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Update the user fields if they are provided
        if (name !== undefined) user.name = name;
        if (bio !== undefined) user.bio = bio;
        if (userImage !== undefined) {
            if (userImage.public_id !== undefined) user.userImage.public_id = userImage.public_id;
            if (userImage.url !== undefined) user.userImage.url = userImage.url;
        }
        
        await user.save();
        res.json({ message: 'User updated successfully', user });
    } catch (err) {
        console.error('Error updating user:', err.message);
        res.status(500).send('Server Error');
    }
}

// Search User 
export const searchUser = async(req,res)=>{
    const {username} = req.query;
    try {
        
    } catch (error) {
        console.error('Error searching user:', error.message);
        res.status(500).send('Server Error');
    }
}

