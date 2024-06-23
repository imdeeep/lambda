"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import { Badge } from "@mui/material";
import { MdOutlineChatBubble } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import Grid from "@mui/material/Grid";
import Footer from "@/components/Footer";
import ChatList from "@/components/ChatList";
import { sampleChats } from "@/components/sampleData";
import Notification from "@/shared/Notification";
import Search from "@/shared/Search";
import Profile from "@/shared/Profile";
import AddGroup from "@/shared/AddGroup";

const Page = () => {
  const [activeButton, setActiveButton] = useState("allChats");

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <>
      {/* 1st Grid */}
      <Header />
      <Grid container height={"100vh"} className="medium">
        <Grid
          item
          sm={4}
          md={3}
          lg={0.8}
          sx={{ display: { xs: "none", sm: "block" } }}
          height={"100%"}
          className="leftsidebar bg-[#202022] text-white flex flex-col items-center justify-between"
        >
          <div className="tracking-[-1px] text-md mt-5 flex gap-1 items-center select-none text-zinc-200 medium">
            <span className="text-2xl light">[</span>
            lambda
            <span className="text-2xl light">]</span>
          </div>

          <div className="flex flex-col">
            <button
              onClick={() => handleButtonClick("allChats")}
              className={`flex flex-col items-center ${
                activeButton === "allChats"
                  ? "bg-[#46454A] text-white"
                  : "text-gray-300"
              } rounded-[10px] mx-2 py-4`}
            >
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

            <button
              onClick={() => {
                handleButtonClick("notifications");
              }}
              className={`mt-1 flex flex-col items-center ${
                activeButton === "notifications"
                  ? "bg-[#46454A] text-white"
                  : "text-gray-300"
              } rounded-[10px] mx-2 py-4 px-2`}
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
                <IoNotifications size={22} />
              </Badge>
              <p className="text-[0.7rem] medium">Notifications</p>
            </button>

            <button
              onClick={() => handleButtonClick("search")}
              className={`flex flex-col items-center ${
                activeButton === "search"
                  ? "bg-[#46454A] text-white"
                  : "text-gray-300"
              } rounded-[10px] mx-2 py-4`}
            >
              <IoSearch size={24} />
              <p className="text-[0.7rem] medium">Search</p>
            </button>

            <button
              onClick={() => handleButtonClick("profile")}
              className={`flex flex-col items-center ${
                activeButton === "profile"
                  ? "bg-[#46454A] text-white"
                  : "text-gray-300"
              } rounded-[10px] mx-2 py-4`}
            >
              <FaUser size={20} />
              <p className="text-[0.7rem] medium">Profile</p>
            </button>

            <button
              onClick={() => handleButtonClick("group")}
              className={`flex flex-col items-center ${
                activeButton === "group"
                  ? "bg-[#46454A] text-white"
                  : "text-gray-300"
              } rounded-[10px] mx-2 py-4`}
            >
              <FaUserGroup size={22} />
              <p className="text-[0.7rem] medium">Group</p>
            </button>
          </div>

          <button className={`flex flex-col items-center text-gray-300 mb-5`}>
            <IoLogOut size={20} />
            <p className="text-[0.7rem] medium">Logout</p>
          </button>
        </Grid>

        {/* 2nd Grid and Mobile View*/}
        {activeButton === "notifications" ? (
          <Grid
            item
            sx={{
              display: { xs: "block", md: "none", sm: "none", lg: "none" },
            }}
          >
            <Notification />
          </Grid>
        ) : activeButton === "profile" ? (
          <Grid
            item
            sx={{
              display: { xs: "block", md: "none", sm: "none", lg: "none" },
            }}
          >
            <Profile />
          </Grid>
        ) : activeButton === "group" ? (
          <Grid
            item
            sx={{
              display: { xs: "block", md: "none", sm: "none", lg: "none" },
            }}
          >
            <AddGroup />
          </Grid>
        ) : activeButton === "search" ? (
          <Grid
            item
            sx={{
              display: { xs: "block", md: "none", sm: "none", lg: "none" },
            }}
          >
            <Search />
          </Grid>
        ) : activeButton === "allChats" ? (
          <>
            <Grid
              item
              xs={12}
              sm={8}
              md={5}
              lg={activeButton !== "allChats" ? 0 : 3.1}
              height={"100%"}
              className="bg-[#F9FAFC]"
            >
              <ChatList chats={sampleChats} />
            </Grid>
          </>
        ) : (
          <ChatList/>
        )}

        {/* 3rd Grid */}
        <Grid
          item
          xs={12}
          md={4}
          lg={activeButton != "allChats" ? 11.2 : 8.1}
          height={"100%"}
          sx={{ display: { xs: "none", md: "block" } }}
          className="bg-[#F9FAFC] lg:border lg:border "
        >
          {activeButton === "notifications" ? (
            <Notification />
          ) : activeButton === "search" ? (
            <Search />
          ) : activeButton === "profile" ? (
            <Profile />
          ) : activeButton === "group" ? (
            <AddGroup />
          ) : (
            <div>Chat Area</div>
          )}
        </Grid>
      </Grid>
      <Footer handleClick={handleButtonClick} activeButton={activeButton} />
    </>
  );
};

export default Page;
