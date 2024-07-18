import mongoose, { Schema, model } from "mongoose";
import { v4 as uuidv4 } from 'uuid';

const userSchema = new Schema({
  userId: {
    type: String,
    default: uuidv4,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
  },
  bio: {
    type: String,
  },
  userImage: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    // select: false,
  },
},{
    timestamps: true,
});

export const User = model("User", userSchema);
    