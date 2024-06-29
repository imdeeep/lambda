"use client"
import React from "react";
import Grid from "@mui/material/Grid";
import ChatList from "@/shared/ChatList";
import { sampleChats } from "@/shared/sampleData";
import ChatArea from "@/shared/ChatArea";
import { useState } from "react";

const page = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  return (
    <>
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        lg={3.1}
        height={"100%"}
        className="bg-[#F9FAFC]"
      >
        <ChatList chats={sampleChats} setSelectedChat={setSelectedChat} selectedChat={selectedChat}/>
      </Grid>

      {/* 2rd Grid */}
      <Grid
        item
        xs={12}
        md={4}
        lg={8.1}
        height={"100%"}
        sx={{ display: { xs: "none", md: "block" } }}
        className="bg-[#F9FAFC] lg:border lg:border"
      >
        <ChatArea selectedChat={selectedChat} setSelectedChat={setSelectedChat}/>
      </Grid>
    </>
  );
};

export default page;
