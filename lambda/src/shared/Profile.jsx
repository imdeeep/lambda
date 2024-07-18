import React, { useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { IoMdSave } from "react-icons/io";
import { MdOutlineFileUpload } from "react-icons/md";

const Profile = () => {
  const [edit, setEdit] = useState(false);
  const handleEdit = () => {
    setEdit(true);
  };
  const handleSave = () => {
    setEdit(false);
  };
  const bio =
    "🌸 Dreamer, adventurer, and lover of all things cozy 🌸 | Living life one coffee at a time ☕ | Always chasing sunsets and good vibes ✨ | 📚 Bookworm";

  return (
    <div className="w-full h-full medium width100vw mb-[8rem] md:mb-[0rem]">
      <div className="flex flex-col gap-10 md:items-center md:flex-row pt-8 md:ml-10 ">
        <div className="flex flex-col items-center gap-1">
          <div className="w-[13rem] h-[13rem] overflow-hidden border rounded-full border-[3px] border-[#7678ED] p-1 ">
            <img
              src="https://img.freepik.com/free-photo/young-female-model-portrait_23-2149084889.jpg"
              className="object-cover w-full h-full align-middle rounded-full"
              alt=""
            />
          </div>
          {edit ? (
            <>
              <button className="bg-[#7678ED] text-white text-sm md:text-l rounded-full px-1 flex items-center gap-1">
                <MdOutlineFileUpload />
                Change photo{" "}
              </button>
            </>
          ) : (
            ""
          )}
        </div>
        <div className="w-[50%] ml-5 md:ml-0">
          <div className="flex gap-10 items-center">
            <h1 className="text-2xl tracking-[-1px]">{"JasminLowrey69"}</h1>
            <div className="flex flex-col md:flex-row gap-2">
              <button
                className="bg-[#FF8D68] px-2 rounded hover:bg-[#E16A44] text-white flex items-center gap-1"
                onClick={handleEdit}
              >
                <IoMdSettings />
                Edit
              </button>
              {edit ? (
                <button
                  className="bg-[#7678ED] px-2 rounded hover:bg-[#6062C6] text-white flex items-center gap-1"
                  onClick={handleSave}
                >
                  <IoMdSave />
                  Save
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
          {edit ? (
            <>
              <input
                type="text"
                value={"Jasmin Lowrey"}
                className="outline-none border rounded px-1 inline-block text-xl light text-start w-full mt-3"
              />
              <br />
            </>
          ) : (
            <h1 className="text-xl light mt-3">{"Jasmin Lowrey"}</h1>
          )}
          <p className="inline-block text-white bg-gray-600 rounded-full text-xs px-1">
            @{"JasminLowrey69"}
          </p>
          {edit ? (
            <>
              <br />
              <textarea
                name=""
                value={bio}
                className="w-full h-full outline-none text-sm text-zinc-600 mt-1 border rounded"
                id=""
              ></textarea>
            </>
          ) : (
            <p className="text-sm text-zinc-600 mt-1">{bio.slice(0, 150)}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;