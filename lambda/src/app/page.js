import React from "react";
import Grid from "@mui/material/Grid";
import ChatList from "@/shared/ChatList";
import { sampleChats } from "@/shared/sampleData";
import Head from "next/head";
import ChatArea from "@/shared/ChatArea";

const page = () => {
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
        <ChatList chats={sampleChats} />
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
        <ChatArea/>
      </Grid>
    </>
  );
};

export default page;
