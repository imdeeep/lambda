import { Box } from "@mui/material";
import React from "react";
import Cookies from "js-cookie";
import { IoLogOut } from "react-icons/io5";

const MobileHeader = () => {
  
  const handleLogout = () => {
    try {
      Cookies.remove("token");
      window.location.href = "/";
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

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
      <button onClick={handleLogout}>
      <IoLogOut size={20} />
      </button>
    </Box>
  );
};

export default MobileHeader;