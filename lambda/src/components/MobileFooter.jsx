"use client"
import React, { useState } from "react";
import { Badge } from "@mui/material";
import { MdOutlineChatBubble } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { Box } from "@mui/material";
import { FaUser } from "react-icons/fa";
import Link from "next/link";

const MobileFooter = () => {
    const [activeButton, setActiveButton] = useState("");

    const handleButtonClick = (button) => {
      setActiveButton(button);
    };

  return (
    <Box className="bg-[#202022] footer-mobile flex md:hidden py-1 items-center justify-evenly w-full gap-1 fixed bottom-0 z-[99]">
            <Link href="/" 
              onClick={() => {
                handleButtonClick("allChats");
              }}
              className={`flex flex-col items-center ${
                activeButton === "allChats"
                  ? "bg-[#46454A] text-white"
                  : "text-gray-300"
              } rounded py-3 px-2`}
            >
            <button>
              <Badge
                badgeContent={20}
                sx={{
                  "& .MuiBadge-badge": {
                    backgroundColor: "#FF8259",
                    color: "white",
                    width: "10px",
                  },
                }}
              >
                <MdOutlineChatBubble size={20} />
              </Badge>
              <p className="text-[0.7rem] medium">All Chats</p>
            </button>
            </Link>

            <Link     href="/notifications"          onClick={() => {
                handleButtonClick("notifications");
              }}
              className={`flex flex-col items-center ${
                activeButton === "notifications"
                  ? "bg-[#46454A] text-white"
                  : "text-gray-300"
              } rounded py-3 px-1`}>
            <button>
              <Badge
                badgeContent={20}
                sx={{
                  "& .MuiBadge-badge": {
                    backgroundColor: "#FF8259",
                    color: "white",
                    width: "10px",
                  },
                }}
              >
                <IoNotifications size={20} />
                </Badge>
              <p className="text-[0.7rem] medium">Notifications</p>
            </button>
            </Link>

            <Link href="/search" 
              onClick={() => {
                handleButtonClick("search");
              }}
              className={`flex flex-col items-center ${
                activeButton === "search"
                  ? "bg-[#46454A] text-white"
                  : "text-gray-300"
              } rounded py-3 px-3`}
            >
            <button className="flex items-center flex-col">
              <IoSearch size={20} />
              <p className="text-[0.7rem] medium">Search</p>
            </button>
            </Link>

            <Link href="profile" 
              onClick={() => {
                handleButtonClick("profile");
              }}
              className={`flex flex-col items-center ${
                activeButton === "profile"
                  ? "bg-[#46454A] text-white"
                  : "text-gray-300"
              } rounded py-3 px-3`}
            >
            <button className="flex items-center flex-col">
              <FaUser size={20} />
              <p className="text-[0.7rem] medium">Profile</p>
            </button>
            </Link>

            <Link href="/group" 
              onClick={() => {
                handleButtonClick("group")
              }}
              className={`flex flex-col items-center ${
                activeButton === "group"
                  ? "bg-[#46454A] text-white"
                  : "text-gray-300"
              } rounded py-3 px-3`}
            >
            <button className="flex items-center flex-col">
              <FaUserGroup size={20} />
              <p className="text-[0.7rem] medium">Group</p>
            </button>
            </Link>
    </Box>

  )
}

export default MobileFooter