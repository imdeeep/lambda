import Link from "next/link";
import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

const Notification = () => {
  return (
    <>
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
              <Link href="/userProfile"><div
                className="w-12 h-12 overflow-hidden border rounded-[5px]"
              >
                <img
                  src="https://img.freepik.com/free-photo/young-female-model-portrait_23-2149084889.jpg"
                  className="object-cover w-full h-full align-middle"
                  alt=""
                />
              </div></Link>

              <div className="flex flex-col w-full">
                <div className="flex items-center justify-between">
                  <Link href="/userProfile">
                  <p
                    className="hover:underline"
                  >
                    Jasmin Lowery
                  </p>
                  </Link>
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
    </>
  );
};

export default Notification;