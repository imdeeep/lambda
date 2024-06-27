"use client"
import React, { useState } from "react";
import { Stack } from "@mui/material";
import { IoSearch } from "react-icons/io5";
import { MdAdd, MdCheck } from "react-icons/md";
import { sampleChats } from "./sampleData";
import GroupDialog from "./GroupDialog";
import Link from "next/link";

const Group = () => {
  const [selectedUsers, setSelectedUsers] = useState([]);
  const handleSelect = (user) => {
    setSelectedUsers((prevSelected) => [...prevSelected, user]);
  };

  const handleDeSelect = (user) => {
    setSelectedUsers((prevSelected) =>
      prevSelected.filter((selectedUser) => selectedUser._id !== user._id)
    );
  };

  const isSelected = (user) => {
    return selectedUsers.some((selectedUser) => selectedUser._id === user._id);
  };

  return (
    <Stack width={"100%"} direction={"column"} className="h-full">
      <div className="overflow-y-auto">
        <div className="bg-white sticky top-0 py-2">
          <div className="flex items-center gap-2 bg-[#DBDCFF] mx-2 px-3 py-2 rounded-[5px]">
            <IoSearch color="gray" />
            <input
              type="text"
              className="outline-none bg-transparent text-sm w-full light"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="mt-1">
          {sampleChats.map((data) => {
            const selected = isSelected(data);
            return (
              <div
                key={data.id}
                className="flex medium gap-2 p-2 rounded-[5px] mx-2 cursor-pointer hover:bg-[#EEEEF8] border-b"
              >
                <Link href="/userProfile"><div className="w-12 h-12 overflow-hidden border rounded-[5px]">
                  <img
                    src={data.avatar}
                    className="object-cover w-full h-full align-middle"
                    alt=""
                  />
                </div></Link>
                <div className="flex flex-col w-full">
                  <div className="flex items-center justify-between">
                    <Link href="userProfile"><p className="hover:underline">{data.name}</p></Link>
                  </div>

                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-600 w-[85%]">
                      {"🌸 Dreamer, adventurer, and lover of all things cozy 🌸 | Living life one coffee at a time ☕ | Always chasing sunsets and good vibes ✨ | 📚 Bookworm | 🌿 Plant mama | 🐾 Dog lover | Smiling through the chaos, finding joy in the little things 💖 | Let's be friends! 💌".slice(
                        0,
                        50
                      )}
                      ...
                    </p>
                    <div className="text-white flex justify-center items-center mr-3">
                      {selected ? (
                        <button
                          className="bg-[#7678ED] p-1 rounded hover:bg-[#6062C6]"
                          onClick={() => handleDeSelect(data)}
                        >
                          <MdCheck />
                        </button>
                      ) : (
                        <button
                          className="bg-[#FF8D68] p-1 rounded hover:bg-[#E16A44]"
                          onClick={() => handleSelect(data)}
                        >
                          <MdAdd />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* DialogBox */}
      
      <div
        className="fixed bottom-[5rem] md:bottom-5 right-2 md:right-5 z-[98]"
      >
        <GroupDialog />
      </div>
    </Stack>
  );
};

export default Group;