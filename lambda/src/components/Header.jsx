"use client";
import React, { useState } from "react";
import { Badge, Grid } from "@mui/material";
import Link from "next/link";
import { MdOutlineChatBubble } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";

const Header = () => {
  const [activeButton, setActiveButton] = useState();

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };
  return (
    <>
      <Grid
        item
        sm={4}
        md={3}
        lg={0.8}
        sx={{ display: { xs: "none", sm: "block" } }}
        height={"100%"}
        className="leftsidebar bg-[#202022] text-white hidden md:flex"
      >
        <div className="flex flex-col items-center h-full justify-between">
        <div className="tracking-[-1px] text-md mt-5 flex gap-1 items-center select-none text-zinc-200 medium">
          <span className="text-2xl light">[</span>
          lambda
          <span className="text-2xl light">]</span>
        </div>

        <div className="flex flex-col">
          <Link
            href="/"
            onClick={() => handleButtonClick("allChats")}
            className={`flex flex-col items-center ${
              activeButton === "allChats"
                ? "bg-[#46454A] text-white"
                : "text-gray-300"
            } rounded-[10px] mx-2 py-4`}
          >
            <button>
              <Badge
                badgeContent={43}
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

          <Link
            href="/notifications"
            onClick={() => {
              handleButtonClick("notifications");
            }}
            className={`mt-1 flex flex-col items-center ${
              activeButton === "notifications"
                ? "bg-[#46454A] text-white"
                : "text-gray-300"
            } rounded-[10px] mx-2 py-4 px-2`}
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
                <IoNotifications size={22} />
              </Badge>
              <p className="text-[0.7rem] medium">Notifications</p>
            </button>
          </Link>

          <Link
            href="/search"
            onClick={() => handleButtonClick("search")}
            className={`flex flex-col items-center ${
              activeButton === "search"
                ? "bg-[#46454A] text-white"
                : "text-gray-300"
            } rounded-[10px] mx-2 py-4`}
          >
            <button className="flex flex-col items-center">
              <IoSearch size={24} />
              <p className="text-[0.7rem] medium">Search</p>
            </button>
          </Link>

          <Link
            href="/profile"
            onClick={() => handleButtonClick("profile")}
            className={`flex flex-col items-center ${
              activeButton === "profile"
                ? "bg-[#46454A] text-white"
                : "text-gray-300"
            } rounded-[10px] mx-2 py-4`}
          >
            <button className="flex flex-col items-center">
              <FaUser size={20} />
              <p className="text-[0.7rem] medium">Profile</p>
            </button>
          </Link>

          <Link
            href="/group"
            onClick={() => handleButtonClick("group")}
            className={`flex flex-col items-center ${
              activeButton === "group"
                ? "bg-[#46454A] text-white"
                : "text-gray-300"
            } rounded-[10px] mx-2 py-4`}
          >
            <button className="flex flex-col items-center">
              <FaUserGroup size={22} />
              <p className="text-[0.7rem] medium">Group</p>
            </button>
          </Link>
        </div>

        <button className={`flex flex-col items-center text-gray-300 mb-5`}>
          <IoLogOut size={20} />
          <p className="text-[0.7rem] medium">Logout</p>
        </button>
        </div>
      </Grid>
    </>
  );
};

export default Header;
