"use client";
import Image from "next/image";
import { FaUser } from "react-icons/fa6";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
export const Header = () => {
  //TODO: make this placeholder dynamic like in ayatrio.com
  // const [placeHolder, setPlaceholder] = useState("");
  const [isHovered, setisHovered] = useState(false);
  return (
    <div className="md:px-10 flex items-center justify-center md:justify-between mt-2 md:mt-0">
      <div
        onMouseEnter={() => setisHovered(true)}
        onMouseLeave={() => setisHovered(false)}
        className="md:block hidden"
      >
        <Image
          src={isHovered ? "/violet-logo.png" : "/logo.png"}
          height={150}
          width={150}
          alt="logo"
          className="cursor-pointer"
        />
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center bg-gray-100 px-2  rounded-xl group">
          <input
            className="flex-1 p-2 bg-transparent focus-within:outline-none"
            placeholder="Search"
          />
          <FiSearch className="h-6 w-6 group-hover:text-violet-500" />
        </div>
        <FaUser className="h-8 w-8 cursor-pointer border-2 rounded-xl p-1 hover:text-violet-500 hover:border-violet-500" />
        <PiShoppingCartSimpleFill className="h-[34px] w-[34px] cursor-pointer border-2 rounded-xl p-1 hover:text-violet-500 hover:border-violet-500" />
      </div>
    </div>
  );
};
