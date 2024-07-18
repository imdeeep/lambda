import mongoose, { Schema, Types, model } from "mongoose";

const messageSchema = new Schema(
  {
    content: {
      type: String,
    },
    attachment: [
      {
        public_id: {
          type: String,
        },
        url: {
          type: String,
        },
      },
    ],
    sender: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
    chat: {
      type: Types.ObjectId,
      ref: "Chat",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Message = model("Message", messageSchema);
