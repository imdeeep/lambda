import { Stack } from "@mui/material";
import React from "react";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

const ChatList = ({
  w = "100%",
  chats = [],
  chatId,
  onlineUsers = [],
  newMessagesAlert = [{ chatId: "", count: 0 }],
  handleDeleteChat,
}) => {
  return (
    <Stack width={w} direction={"column"} className="overflow-y-auto h-full">
      <div className="bg-white sticky top-0">
      <div className="flex items-center gap-2 bg-[#DBDCFF] mx-2 my-3 px-3 py-2 rounded-[5px] ">
        <IoSearch color="gray" />
        <input
          type="text"
          className="outline-none bg-transparent text-sm w-full light"
          placeholder="Search"
        />
      </div>
      </div>
      {chats?.map((data, index) => {
        const { avatar, name, _id, groupChat, members } = data;
        const newMessageAlert = newMessagesAlert.find(
          (alert) => alert.chatId === _id
        );
        const isOnline = members.some((members) => onlineUsers.includes(_id));

        return (
          <>
            <div className="flex medium gap-2 p-2 rounded-[5px] mx-2 cursor-pointer hover:bg-[#EEEEF8] border-b">
              <div className="w-14 h-12 overflow-hidden border rounded-[5px]">
                <img
                  src={avatar}
                  className="object-cover w-full h-full align-middle"
                  alt=""
                />
              </div>

              <div className="flex flex-col w-full">
                <div className="flex items-center justify-between">
                  <p>{name}</p>
                  <div className="flex items-center gap-2 px-2">
                    <IoCheckmarkDoneSharp color="#7678ED" />
                    <p className="text-sm text-gray-600">40m</p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-600">
                    {"message".slice(0, 30)}...
                  </p>
                  <div className="w-5 h-5 rounded-full bg-[#FF8259] text-white flex justify-center items-center text-[0.7rem] mr-3">
                    45
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </Stack>
  );
};

export default ChatList;
