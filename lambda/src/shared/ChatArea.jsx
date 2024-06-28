import React from "react";

const ChatArea = () => {
  return (
    <>
    <div className="p-2">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, voluptatem necessitatibus, in et optio vitae laboriosam ratione, sit odit eaque iste quidem illo.
          </p>
          <p className="absolute text-xs right-3 text-[#827F80] bottom-2">
            09:20
          </p>
        </div>
      </div>

      <div className="flex relative justify-end mt-5">
        <div className="bubble right relative mr-9">
          <p className="mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quidem totam numquam quae doloremque?
          </p>
          <p className="absolute text-xs right-3 bottom-2">
            09:20
          </p>
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
    </>
  );
};

export default ChatArea;
