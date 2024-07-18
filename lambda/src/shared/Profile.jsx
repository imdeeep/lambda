import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { IoMdSettings, IoMdSave } from "react-icons/io";
import { MdOutlineFileUpload } from "react-icons/md";
import { updateUser } from '../slices/authSlice';
import axios from 'axios';
import Cookies from 'js-cookie';

const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(user?.name || '');
  const [bio, setBio] = useState(user?.bio || '');
  const [image, setImage] = useState(user?.userImage?.url || 'https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg');
  const [file, setFile] = useState(null);

  const handleEdit = () => {
    setEdit(true);
  };

  const handleSave = async () => {
    try {
      const token = Cookies.get('token');
      const formData = new FormData();
      formData.append('userId', user.userId);
      formData.append('name', name);
      formData.append('bio', bio);
      if (file) {
        formData.append('avatar', file);
      }
      
      const response = await axios.put('http://localhost:5000/user/edit', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });

      setEdit(false);
      alert('Profile updated successfully');
      dispatch(updateUser(response.data.user));
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    setImage(URL.createObjectURL(file));
  };

  return (
    <div className="w-full h-full medium width100vw mb-[8rem] md:mb-[0rem]">
      <div className="flex flex-col gap-10 md:items-center md:flex-row pt-8 md:ml-10">
        <div className="flex flex-col items-center gap-1">
          <div className="w-[13rem] h-[13rem] overflow-hidden border rounded-full border-[3px] border-[#7678ED] p-1">
            <img
              src={image}
              className="object-cover w-full h-full align-middle rounded-full"
              alt="Profile"
            />
          </div>
          {edit && (
            <label className="bg-[#7678ED] text-white text-sm md:text-l rounded-full px-1 flex items-center gap-1 cursor-pointer">
              <MdOutlineFileUpload />
              Change photo
              <input type="file" className="hidden" onChange={handleImageChange} />
            </label>
          )}
        </div>
        <div className="w-[50%] ml-5 md:ml-0">
          <div className="flex gap-10 items-center">
            <h1 className="text-2xl tracking-[-1px]">{user?.username || 'User'}</h1>
            <div className="flex flex-col md:flex-row gap-2">
              <button
                className="bg-[#FF8D68] px-2 rounded hover:bg-[#E16A44] text-white flex items-center gap-1"
                onClick={handleEdit}
              >
                <IoMdSettings />
                Edit
              </button>
              {edit && (
                <button
                  className="bg-[#7678ED] px-2 rounded hover:bg-[#6062C6] text-white flex items-center gap-1"
                  onClick={handleSave}
                >
                  <IoMdSave />
                  Save
                </button>
              )}
            </div>
          </div>
          {edit ? (
            <>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="outline-none border rounded px-1 inline-block text-xl light text-start w-full mt-3"
              />
              <br />
            </>
          ) : (
            <h1 className="text-xl light mt-3">{user?.name || 'User Name'}</h1>
          )}
          <p className="inline-block text-white bg-gray-600 rounded-full text-xs px-1">
            @{user?.username || 'username'}
          </p>
          {edit ? (
            <>
              <br />
              <textarea
                name="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="w-full h-full outline-none text-sm text-zinc-600 mt-1 border rounded"
              ></textarea>
            </>
          ) : (
            <p className="text-sm text-zinc-600 mt-1">{user?.bio?.slice(0, 150) || 'User bio...'}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
