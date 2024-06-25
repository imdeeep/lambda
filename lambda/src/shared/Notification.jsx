import React, { useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { IoCaretBackOutline, IoPersonAddSharp } from "react-icons/io5";
import { MdNavigateNext } from "react-icons/md";

const Notification = () => {
  const [friend, setFriend] = useState(true);
  const [notificationActive, setNotificationActive] = useState(true);

  const handleNotificationedUsers = () => {
    setNotificationActive(false);
  };
  const handleUserDetails = () => {
    setNotificationActive(true);
  };
  const handleRemoveFriend = () => {
    setFriend(false);
  };
  const bio =
    "🌸 Dreamer, adventurer, and lover of all things cozy 🌸 | Living life one coffee at a time ☕ | Always chasing sunsets and good vibes ✨ | 📚 Bookworm";

  return (
    <>
      {notificationActive ? (
        <div className="w-full h-full medium overflow-y-auto width100vw">
          <div className="flex items-center gap-1 lg:px-5 py-4 sticky top-0 bg-white shadow">
            <IoMdArrowDropright
              size={30}
              color="white"
              className="arrow rounded-[5px] bg-[#7678ED] ml-2"
            />
            <h1 className="lg:text-[2.2rem] sm:text-sm ">Notifications</h1>
          </div>

          <div className="mt-1">
            <div className="flex medium gap-2 p-2 rounded-[5px] mx-2 cursor-pointer hover:bg-[#EEEEF8] border-b">
              <div
                className="w-14 h-12 overflow-hidden border rounded-[5px]"
                onClick={handleNotificationedUsers}
              >
                <img
                  src="https://img.freepik.com/free-photo/young-female-model-portrait_23-2149084889.jpg"
                  className="object-cover w-full h-full align-middle"
                  alt=""
                />
              </div>

              <div className="flex flex-col w-full">
                <div className="flex items-center justify-between">
                  <p
                    onClick={handleNotificationedUsers}
                    className="hover:underline"
                  >
                    Jasmin Lowery
                  </p>
                  <div className="flex items-center gap-2 px-2">
                    <p className="text-xs text-gray-600">40m ago</p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-600">
                    {"🌸 Dreamer, adventurer, and lover of all things cozy 🌸 | Living life one coffee at a time ☕ | Always chasing sunsets and good vibes ✨ | 📚 Bookworm | 🌿 Plant mama | 🐾 Dog lover | Smiling through the chaos, finding joy in the little things 💖 | Let's be friends! 💌".slice(
                      0,
                      50
                    )}
                    ...
                  </p>
                  <div className="text-white flex justify-center gap-5 items-center mr-3">
                    <button className="bg-[#FF8D68] px-2 rounded hover:bg-[#E16A44]">
                      Accept
                    </button>
                    <button className="bg-[#7678ED] px-2 rounded hover:bg-[#6062C6]">
                      Reject
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* User Profile */}
          <div className="w-full h-full medium width100vw mb-[8rem] md:mb-[0rem]">
            <div className="flex items-center justify-between px-2 mt-3">
              <button
                className="flex items-center bg-[#7779ED] text-white px-1 rounded hover:bg-[#6062C6] ml-2"
                onClick={handleUserDetails}
              >
                <IoCaretBackOutline />
                Back
              </button>
              <div className="flex items-center text-[#6062C6]">
                <MdNavigateNext />
                <div>
                  <button
                    className="hover:underline"
                    onClick={handleUserDetails}
                  >
                    notifications
                  </button>
                  /JasminLowery69
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10 md:items-center md:flex-row pt-8 md:ml-10 ">
              <div className="flex flex-col items-center gap-1">
                <div className="w-[13rem] h-[13rem] overflow-hidden border rounded-full border-[3px] border-[#7678ED] p-1">
                  <img
                    src="https://img.freepik.com/free-photo/young-female-model-portrait_23-2149084889.jpg"
                    className="object-cover w-full h-full align-middle rounded-full"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-[50%] ml-5 md:ml-0">
                <div className="flex gap-10">
                  <h1 className="text-2xl tracking-[-1px]">
                    {"JasminLowrey69"}
                  </h1>
                  {friend ? (
                    <div className="flex flex-col md:flex-row gap-2">
                      <button className="bg-[#FF8D68] px-2 rounded hover:bg-[#E16A44] text-white">
                        Message
                      </button>
                      <button
                        className="bg-[#7678ED] px-2 rounded hover:bg-[#6062C6] text-white "
                        onClick={handleRemoveFriend}
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <div className="text-white flex justify-center gap-5 items-center mr-3">
                      <button className="bg-[#FF8D68] px-2 py-1 rounded hover:bg-[#E16A44] flex items-center gap-2">
                        <IoPersonAddSharp size={15} />
                        Add Friend
                      </button>
                    </div>
                  )}
                </div>
                <h1 className="text-xl light mt-3">{"Jasmin Lowrey"}</h1>
                <p className="inline-block text-white bg-gray-600 rounded-full text-xs px-1">
                  @{"JasminLowrey69"}
                </p>
                <p className="text-sm text-zinc-600 mt-1">{bio}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Notification;