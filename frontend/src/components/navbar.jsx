import React, { useState } from "react";
import profile from "../assets/download.jpg";
import { FaSuitcase } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [isClicked, setClick] = useState(false);

  return (
    <div className="flex p-4 justify-between border text-sm">
      <div className="flex">
        <div className="font-body pr-5 text-lg">dribbble</div>
        <div
          className={`absolute bg-white flex flex-row lg:w-auto lg:static lg:min-h-0 lg:top-0 min-h-fit left-0 ${
            isClicked ? "top-[9%]" : "top-[-100%]"
          } w-full `}
        >
          <ul className="list-none flex flex-col gap-5 pl-5 lg:justify-between text-slate-700 lg:flex-row ">
            <li className="pr-6">Inspiration</li>
            <li className="pr-6">Find Work</li>
            <li className="pr-6">Learn Design</li>
            <li className="pr-6">Go Pro</li>
            <li className="pr-6">Hire Designers</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row gap-3">
        <div className="bg-search rounded-lg flex flex-row gap-2 items-center px-3 ">
          <FaSearch color="gray" />
          <input
            type="search"
            placeholder="Search"
            className="bg-search rounded-lg "
          />
        </div>

        <button>
          <FaSuitcase color="gray" className="w-5 h-5" />
        </button>

        <img
          src={profile}
          alt="profile image"
          className="rounded-full object-none w-8 h-8"
        />

        <button className="bg-button text-white rounded-lg p-2 text-xs hover:bg-pink-200">
          Upload
        </button>
        {isClicked ? (
          <button
            className="cursor-pointer text-2xl lg:hidden"
            onClick={(e) => setClick(false)}
          >
            <ImCross />
          </button>
        ) : (
          <button
            className="cursor-pointer text-2xl lg:hidden"
            onClick={(e) => setClick(true)}
          >
            <MdMenu />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;