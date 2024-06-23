"use client"
import React, { useState } from "react";
import { Badge } from "@mui/material";
import { MdOutlineChatBubble } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { Box } from "@mui/material";
import { FaUser } from "react-icons/fa";

const Footer = ({handleClick,activeButton}) => {
  return (
    <Box className="bg-[#202022] footer-mobile flex py-1 items-center justify-evenly gap-1">
            <button
              onClick={() => {
                handleClick("allChats");
              }}
              className={`flex flex-col items-center ${
                activeButton === "allChats"
                  ? "bg-[#46454A] text-white"
                  : "text-gray-300"
              } rounded py-3 px-2`}
            >
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

            <button
              onClick={() => {
                handleClick("notifications");
              }}
              className={`flex flex-col items-center ${
                activeButton === "notifications"
                  ? "bg-[#46454A] text-white"
                  : "text-gray-300"
              } rounded py-3`}
            >
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

            <button
              onClick={() => {
                handleClick("search");
              }}
              className={`flex flex-col items-center ${
                activeButton === "search"
                  ? "bg-[#46454A] text-white"
                  : "text-gray-300"
              } rounded py-3 px-3`}
            >
              <IoSearch size={20} />
              <p className="text-[0.7rem] medium">Find Peoples</p>
            </button>

            <button
              onClick={() => {
                handleClick("profile");
              }}
              className={`flex flex-col items-center ${
                activeButton === "profile"
                  ? "bg-[#46454A] text-white"
                  : "text-gray-300"
              } rounded py-3 px-3`}
            >
              <FaUser size={20} />
              <p className="text-[0.7rem] medium">Profile</p>
            </button>

            <button
              onClick={() => {
                handleClick("group")
              }}
              className={`flex flex-col items-center ${
                activeButton === "group"
                  ? "bg-[#46454A] text-white"
                  : "text-gray-300"
              } rounded py-3 px-3`}
            >
              <FaUserGroup size={20} />
              <p className="text-[0.7rem] medium">Group</p>
            </button>
    </Box>

  )
}

export default Footer