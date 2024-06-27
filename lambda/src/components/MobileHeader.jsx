import { Box } from "@mui/material";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const MobileHeader = () => {
  return (
    <Box
      className="bg-[#202022] text-white flex md:hidden justify-between items-center px-3 header-mobile"
      height={"3rem"}
    >
      <div className="tracking-[-1px] text-md flex gap-1 items-center select-none text-zinc-200">
        <span className="text-2xl light">[</span>
        lambda
        <span className="text-2xl light">]</span>
      </div>
      <BsThreeDotsVertical size={23}/>
    </Box>
  );
};

export default MobileHeader;