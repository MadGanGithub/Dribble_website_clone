import React, { useEffect, useState } from "react";
import profile from "../assets/camera1.jpg";
import UploadWidget from "./uploadImage.jsx";

const First = ({ onLocationChange, onImageChange, setActiveStep }) => {
  const [location, setLocation] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    onImageChange(imageUrl);
  });

  const handleLocationChange = (event) => {
    onLocationChange(event.target.value);
    setLocation(event.target.value);
  };

  const handleImageChange = (event) => {
    onImageChange(event.target.value);
    setImageUrl(event.target.value);
  };

  return (
    <>
      <div className="flex justify-center ">
        <div className="flex flex-col gap-5 lg:justify-normal justify-center">
          <div className="flex flex-col gap-3 text-lg lg:text-sm lg:text-start text-center ">
            <div className="text-4xl font-bold ">
              Welcome! Let's create your profile
            </div>
            <div>Let others get to know you better! You can do these later</div>
          </div>

          <div className="text-3xl font-bold text-center lg:text-start">
            Add an avatar
          </div>

          <div className="flex lg:flex-row lg:justify-start flex-col items-center gap-3 ">
            <img
              src={imageUrl || profile}
              alt="profile image"
              className="rounded-full object-none w-36 h-36 border-dotted border-2 border-gray-600"
            />
            <UploadWidget setImageUrl={setImageUrl} />
          </div>
          <div className="flex flex-col gap-3 lg:items-start items-center">
            <div className="lg:text-xl text-3xl font-bold">
              Add your location
            </div>
            <input
              type="text"
              placeholder="Enter a location"
              value={location}
              onChange={handleLocationChange}
              className="rounded-md lg:w-full"
              required
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default First;