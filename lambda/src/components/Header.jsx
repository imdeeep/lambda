import { Box } from "@mui/material";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const Header = () => {
  return (
    <Box
      className="bg-[#202022] text-white flex justify-between items-center px-1 header-mobile"
      height={"2rem"}
    >
      <div className="tracking-[-1px] text-sm flex gap-1 items-center select-none text-zinc-200">
        <span className="text-2xl light">[</span>
        lambda
        <span className="text-2xl light">]</span>
      </div>
      <BsThreeDotsVertical />
    </Box>
  );
};

export default Header;
