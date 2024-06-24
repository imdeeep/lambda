import React from "react";
import { IoSearch } from "react-icons/io5";
import { Stack } from "@mui/material";
import { sampleChats } from "@/components/sampleData";

const Search = () => {
  return (
    <>
      <Stack width={"100%"} direction={"column"} className="h-full">
        <div className="bg-[#F9FAFC] sticky top-0 z-10">
          <div className="flex items-center gap-2 bg-[#DBDCFF] mx-2 my-3 px-3 py-2 rounded-[5px]">
            <IoSearch color="gray" />
            <input
              type="text"
              className="outline-none bg-transparent text-sm w-full light"
              placeholder="Find Peoples"
            />
          </div>
        </div>
        <div className="h-full overflow-y-auto">
        {sampleChats?.map((data, index) => {
          return (
              <div key={index} className="flex medium gap-2 p-2 rounded-[5px] mx-2 cursor-pointer hover:bg-[#EEEEF8] border-b bg-[#F9FAFC]">
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
                  <div className="flex items-center gap-2 px-2">
                    <p className="text-xs text-gray-600">40m ago</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-600">
                    {"🌸 Dreamer, adventurer, and lover of all things cozy 🌸 | Living life one coffee at a time ☕ | Always chasing sunsets and good vibes ✨ | 📚 Bookworm | 🌿 Plant mama | 🐾 Dog lover | Smiling through the chaos, finding joy in the little things 💖 | Let's be friends! 💌".slice(
                      0,
                      50
                    )}
                    ...
                  </p>
                  <div className="text-white flex justify-center gap-5 items-center mr-3">
                    <button className="bg-[#FF8D68] px-2 rounded hover:bg-[#E16A44]">Accept</button>
                    <button className="bg-[#7678ED] px-2 rounded hover:bg-[#6062C6]">Reject</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        </div>
      </Stack>
    </>
  );
};

export default Search;
