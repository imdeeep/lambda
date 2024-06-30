"use client";

import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GrAttachment } from "react-icons/gr";
import { TbSend } from "react-icons/tb";
import { useSearchParams } from "next/navigation";
import { useWindowSize } from "react-use";

const ChatArea = ({ setSelectedChat, selectedChat }) => {
  const { width } = useWindowSize();
  const searchParams = useSearchParams();
  const chatId = searchParams.get("chatId");
  console.log(chatId);
  const [isAttachmentBoxVisible, setAttachmentBoxVisible] = useState(false);

  const toggleAttachmentBox = () => {
    setAttachmentBoxVisible(!isAttachmentBoxVisible);
  };

  if (width < 768) {
    return (
      <div className="px-2 pb-2 w-full h-[87vh] flex flex-col justify-between">
        <div className="w-full h-[3.5rem] flex items-center justify-between border-b border-gray-100">
          <div>
            <h1 className="text-sm md:text-xl">Jasmin Lowery</h1>
            <p className="text-[#8B8989] leading-[0.9rem] text-xs md:text-sm">online</p>
          </div>
          <BsThreeDotsVertical
            size={18}
            color="#8B8989"
            className="mr-1 cursor-pointer scale-[0.8] md:scale-[1]"
          />
        </div>
        {/* Chat Area */}
        <div className="py-2 h-full overflow-y-auto">
          <div className="flex relative">
            <div className="w-8 h-8 md:w-12 md:h-12 overflow-hidden border rounded-[5px] absolute bottom-1">
              <img
                src="https://img.freepik.com/free-photo/young-female-model-portrait_23-2149084889.jpg"
                className="object-cover w-full h-full align-middle"
                alt="Alex Hunt"
              />
            </div>
            <div className="bubble left relative ml-5 md:ml-9">
              <p className="text-[#424384] text-[0.7rem] md:text-sm font-semibold mt-[-0.5rem] mb-[0.1rem] md:mb-[0.4rem]">
                Alex Hunt
              </p>
              <p className="mb-2 text-xs md:text-l">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquam, voluptatem necessitatibus, in et optio vitae laboriosam
                ratione, sit odit eaque iste quidem illo.
              </p>
              <p className="absolute text-[0.7rem] md:text-sm right-3 text-[#827F80] bottom-2">
                09:20
              </p>
            </div>
          </div>

          <div className="flex relative justify-end mt-2 md:mt-5">
            <div className="bubble right relative mr-5 md:ml-9">
              <p className="mb-2 text-xs md:text-l">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore quidem totam numquam quae doloremque?
              </p>
              <p className="absolute text-[0.7rem] md:text-xs right-3 bottom-2">09:20</p>
            </div>
            <div className="w-8 h-8 md:w-12 md:h-12 overflow-hidden border rounded-[5px] absolute bottom-1 right-0">
              <img
                src="https://img.freepik.com/free-photo/portrait-beautiful-mature-blonde-bearded-guy-with-trendy-hairdo-casual-grey-shirt-smiling_176420-15741.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1719100800&semt=ais_user"
                className="object-cover w-full h-full align-middle"
                alt="John Doe"
              />
            </div>
          </div>
        </div>
        {/* Message Box */}
        <div className="w-full h-10 flex items-center bg-[#EEEEF8] rounded-[5px] px-2 relative ">
          {isAttachmentBoxVisible && (
            <div className="bg-[#F9FAFC] w-auto h-auto p-2 rounded shadow absolute bottom-8 cursor-pointer">
              <h1>File</h1>
              <h1>Photos & Videos</h1>
            </div>
          )}
          <GrAttachment
            size={15}
            color="#2C2D76"
            className="cursor-pointer"
            onClick={toggleAttachmentBox}
          />
          <input
            type="text"
            placeholder="Your message"
            className="flex-grow text-sm bg-transparent outline-none px-2"
          />
          <TbSend color="#2C2D76" size={18} className="cursor-pointer ml-2" />
        </div>
      </div>
    );
  }

  if (!selectedChat) {
    return (
      <div className="flex items-center justify-center h-full">
        Select a chat to view messages
      </div>
    );
  }

  return (
    <>
      <div className="px-2 pb-2 w-full h-full flex flex-col justify-between">
        <div className="w-full h-[3.5rem] flex items-center justify-between border-b border-gray-100">
          <div>
            <h1 className="text-xl">Jasmin Lowery</h1>
            <p className="text-[#8B8989] leading-[0.9rem] text-sm">online</p>
          </div>
          <BsThreeDotsVertical
            size={18}
            color="#8B8989"
            className="mr-1 cursor-pointer"
          />
        </div>
        {/* Chat Area */}
        <div className="py-2 h-full overflow-y-auto">
          <div className="flex relative">
            <div className="w-12 h-12 overflow-hidden border rounded-[5px] absolute bottom-1">
              <img
                src="https://img.freepik.com/free-photo/young-female-model-portrait_23-2149084889.jpg"
                className="object-cover w-full h-full align-middle"
                alt="Alex Hunt"
              />
            </div>
            <div className="bubble left relative ml-9">
              <p className="text-[#424384] text-sm font-semibold mt-[-0.5rem] mb-[0.4rem]">
                Alex Hunt
              </p>
              <p className="mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquam, voluptatem necessitatibus, in et optio vitae laboriosam
                ratione, sit odit eaque iste quidem illo.
              </p>
              <p className="absolute text-xs right-3 text-[#827F80] bottom-2">
                09:20
              </p>
            </div>
          </div>

          <div className="flex relative justify-end mt-5">
            <div className="bubble right relative mr-9">
              <p className="mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore quidem totam numquam quae doloremque?
              </p>
              <p className="absolute text-xs right-3 bottom-2">09:20</p>
            </div>
            <div className="w-12 h-12 overflow-hidden border rounded-[5px] absolute bottom-1 right-0">
              <img
                src="https://img.freepik.com/free-photo/portrait-beautiful-mature-blonde-bearded-guy-with-trendy-hairdo-casual-grey-shirt-smiling_176420-15741.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1719100800&semt=ais_user"
                className="object-cover w-full h-full align-middle"
                alt="John Doe"
              />
            </div>
          </div>
        </div>
        {/* Message Box */}
        <div className="w-full h-10 flex items-center bg-[#EEEEF8] rounded-[5px] px-2 relative">
          {isAttachmentBoxVisible && (
            <div className="bg-[#F9FAFC] w-auto h-auto p-2 rounded shadow absolute bottom-8 cursor-pointer">
              <h1>File</h1>
              <h1>Photos & Videos</h1>
            </div>
          )}
          <GrAttachment
            size={15}
            color="#2C2D76"
            className="cursor-pointer"
            onClick={toggleAttachmentBox}
          />
          <input
            type="text"
            placeholder="Your message"
            className="flex-grow text-sm bg-transparent outline-none px-2"
          />
          <TbSend color="#2C2D76" size={18} className="cursor-pointer ml-2" />
        </div>
      </div>
    </>
  );
};

export default ChatArea;
