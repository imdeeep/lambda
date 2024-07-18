"use client"
import React from "react";
import {Grid } from "@mui/material";
import Search from "@/shared/Search";

const page = () => {
  return (
    <>
     <Grid
          item
          xs={12}
          md={4}
          lg={11.2}
          height={"100%"}
          className="bg-[#F9FAFC] lg:border lg:border"
        >
          <Search/>
        </Grid>
    </>
  )
}

export default page