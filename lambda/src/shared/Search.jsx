import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { Stack } from "@mui/material";
import { IoPersonAddSharp } from "react-icons/io5";
import { MdNavigateNext } from "react-icons/md";
import { IoCaretBackOutline } from "react-icons/io5";
import { sampleChats } from "./sampleData";
import Link from "next/link";

const Search = () => {
  return (
    <>
      <Stack width={"100%"} direction={"column"} className="h-full">
        {/* Searched Users */}
        <div>
          <div className="bg-white sticky top-0 z-10">
            <div className="flex items-center gap-2 bg-[#DBDCFF] mx-2 my-3 px-3 py-2 rounded-[5px]">
              <IoSearch color="gray" />
              <input
                type="text"
                className="outline-none bg-transparent text-sm w-full light"
                placeholder="Find Peoples"
              />
            </div>
          </div>
          <div className="h-full w-full overflow-y-auto width100vw">
            {sampleChats?.map((data, index) => {
              return (
                <div
                  key={index}
                  className="flex medium gap-2 p-2 rounded-[5px] mx-2 cursor-pointer hover:bg-[#EEEEF8] border-b"
                >
                  <Link href="userProfile">
                  <div className="w-12 h-12 overflow-hidden border rounded-[5px]">
                    <img
                      src={data.avatar}
                      className="object-cover w-full h-full align-middle"
                      alt=""
                    />
                  </div>
                  </Link>
                  <div className="flex flex-col w-full">
                    <div className="flex items-center justify-between">
                      <Link href="userProfile"><p className="hover:underline">{data.name}</p></Link>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-600">{"sampleuser69"}</p>
                      <div className="text-white flex justify-center gap-5 items-center mr-3">
                        <button className="bg-[#FF8D68] px-2 rounded hover:bg-[#E16A44] flex items-center gap-2">
                          <IoPersonAddSharp size={15} />
                          Add Friend
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Stack>
    </>
  );
};

export default Search;
