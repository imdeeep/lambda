"use client";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { Stack } from "@mui/material";
import { IoPersonAddSharp } from "react-icons/io5";
import { sampleChats } from "@/components/sampleData";
import { MdNavigateNext } from "react-icons/md";
import { IoCaretBackOutline } from "react-icons/io5";

const Search = () => {
  const [friend, setFriend] = useState(true);
  const [searchActive, setSearchActive] = useState(true);

  const handleSearchedUsers = () => {
    setSearchActive(false);
  };
  const handleUserDetails = () => {
    setSearchActive(true);
  };
  const handleRemoveFriend = () => {
    setFriend(false);
  };
  const bio =
    "🌸 Dreamer, adventurer, and lover of all things cozy 🌸 | Living life one coffee at a time ☕ | Always chasing sunsets and good vibes ✨ | 📚 Bookworm";

  return (
    <>
      <Stack width={"100%"} direction={"column"} className="h-full">
        {searchActive ? (
          <>
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
                      <div
                        className="w-14 h-12 overflow-hidden border rounded-[5px]"
                        onClick={handleSearchedUsers}
                      >
                        <img
                          src={data.avatar}
                          className="object-cover w-full h-full align-middle"
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col w-full">
                        <div className="flex items-center justify-between">
                          <p
                            onClick={handleSearchedUsers}
                            className="hover:underline"
                          >
                            {data.name}
                          </p>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="text-sm text-gray-600">
                            {"sampleuser69"}
                          </p>
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
          </>
        ) : (
          <>
            {/* User Profile */}
            <div className="w-full h-full medium width100vw mb-[8rem] md:mb-[0rem]">
              <div className="flex items-center justify-between px-2 mt-3">
                <button
                  className="flex items-center bg-[#7779ED] text-white px-1 rounded hover:bg-[#6062C6] ml-2"
                  onClick={handleUserDetails}
                >
                  <IoCaretBackOutline />
                  Back
                </button>
                <div className="flex items-center text-[#6062C6]">
                  <MdNavigateNext />
                  <div>
                    <button
                      className="hover:underline"
                      onClick={handleUserDetails}
                    >
                      findPeoples
                    </button>
                    /JasminLowery69
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-10 md:items-center md:flex-row pt-8 md:ml-10 ">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-[13rem] h-[13rem] overflow-hidden border rounded-full border-[3px] border-[#7678ED] p-1">
                    <img
                      src="https://img.freepik.com/free-photo/young-female-model-portrait_23-2149084889.jpg"
                      className="object-cover w-full h-full align-middle rounded-full"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-[50%] ml-5 md:ml-0">
                  <div className="flex gap-10">
                    <h1 className="text-2xl tracking-[-1px]">
                      {"JasminLowrey69"}
                    </h1>
                    {friend ? (
                      <div className="flex flex-col md:flex-row gap-2">
                        <button className="bg-[#FF8D68] px-2 rounded hover:bg-[#E16A44] text-white">
                          Message
                        </button>
                        <button
                          className="bg-[#7678ED] px-2 rounded hover:bg-[#6062C6] text-white "
                          onClick={handleRemoveFriend}
                        >
                          Remove
                        </button>
                      </div>
                    ) : (
                      <div className="text-white flex justify-center gap-5 items-center mr-3">
                        <button className="bg-[#FF8D68] px-2 py-1 rounded hover:bg-[#E16A44] flex items-center gap-2">
                          <IoPersonAddSharp size={15} />
                          Add Friend
                        </button>
                      </div>
                    )}
                  </div>
                  <h1 className="text-xl light mt-3">{"Jasmin Lowrey"}</h1>
                  <p className="inline-block text-white bg-gray-600 rounded-full text-xs px-1">
                    @{"JasminLowrey69"}
                  </p>
                  <p className="text-sm text-zinc-600 mt-1">{bio}</p>
                </div>
              </div>
            </div>
          </>
        )}
      </Stack>
    </>
  );
};

export default Search;
