"use client";
import React, { useState } from "react";
import Signup from "./Signup";

const Login = () => {
  const [signup, setSignup] = useState(false);

  return (
    <>
      {!signup ? (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="w-full max-w-sm p-8 space-y-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-center text-gray-700">
              Login
            </h2>
            <form className="space-y-6">
              <div className="space-y-1">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                />
              </div>
              <div className="space-y-1">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-sm font-medium text-white rounded-lg bg-[#FF8259]"
              >
                Login
              </button>
            </form>
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <a
                  href="#"
                  className="text-[#7678ED] hover:underline"
                  onClick={() => setSignup(true)}
                >
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <Signup setSignup={setSignup} />
      )}
    </>
  );
};

export default Login;
