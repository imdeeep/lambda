import React, { useState } from "react";
import { Stack } from "@mui/material";
import { IoSearch } from "react-icons/io5";
import { sampleChats } from "@/components/sampleData";
import { MdAdd, MdCheck } from "react-icons/md";

const AddGroup = () => {
  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleSelect = (user) => {
    setSelectedUsers((prevSelected) => [...prevSelected, user]);
  };

  const handleDeSelect = (user) => {
    setSelectedUsers((prevSelected) =>
      prevSelected.filter((selectedUser) => selectedUser.id !== user.id)
    );
  };

  const isSelected = (user) => {
    return selectedUsers.some((selectedUser) => selectedUser.id === user.id);
  };

  return (
    <Stack width={"100%"} direction={"column"} className="h-full">
      <div className="bg-white sticky top-0 z-10">
        <div className="flex items-center gap-2 bg-[#DBDCFF] mx-2 my-3 px-3 py-2 rounded-[5px]">
          <IoSearch color="gray" />
          <input
            type="text"
            className="outline-none bg-transparent text-sm w-full light"
            placeholder="Search"
          />
        </div>
        <div className="mt-1">
          {sampleChats.map((data) => {
            const selected = isSelected(data);
            return (
              <div
                key={data.id}
                className="flex medium gap-2 p-2 rounded-[5px] mx-2 cursor-pointer hover:bg-[#EEEEF8] border-b"
              >
                <div className="w-14 h-12 overflow-hidden border rounded-[5px]">
                  <img
                    src={data.avatar}
                    className="object-cover w-full h-full align-middle"
                    alt=""
                  />
                </div>

                <div className="flex flex-col w-full">
                  <div className="flex items-center justify-between">
                    <p>{data.name}</p>
                  </div>

                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-600">
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
      <button className="bg-[#E16A44] px-1 text-white rounded py-1 fixed bottom-5 right-5 z-[9]">
        Create
      </button>
    </Stack>
  );
};

export default AddGroup;
