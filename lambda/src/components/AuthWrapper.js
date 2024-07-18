"use client";
import { useState } from "react";
import LoadingWrapper from "./LoadingWrapper";
import { useRouter } from "next/navigation";
import Login from "@/shared/Login";

const AuthWrapper = ({children}) => {
    const router = useRouter()
    const [auth , setAuth] = useState(false)  
  if (auth) {
    return <Login/>;
  }
  return <>{children}</>;
};

export default AuthWrapper;
