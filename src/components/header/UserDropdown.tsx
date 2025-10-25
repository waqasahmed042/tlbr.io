"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { TbLogout2 } from "react-icons/tb";
import UIText from "@/utilities/testResource";

const UserDropdown = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  }

  const closeDropdown = () => {
    setIsOpen(false);
  }

  const handleLogout = () => {
    localStorage.removeItem("userSession");
    router.push("/signin");
  }

  return (
    <>
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center text-gray-700 dark:text-gray-400 dropdown-toggle"
        >
          <span className="mr-3 bg-[#333333] flex justify-center items-center text-white rounded-full h-11 w-11">
            {UIText.header.user_Dropdown.avtar}
          </span>

          <span className="block mr-1 font-medium text-theme-sm text-[#666666] dark:text-[#CCCCCC]">Jayvin</span>

          <IoIosArrowDown
            className={`text-gray-500 dark:text-gray-400 transition-transform duration-200 w-[18px] h-[20px] ${isOpen ? "hidden" : ""}`}
          />
          <IoIosArrowUp
            className={`text-gray-500 dark:text-gray-400 transition-transform duration-200 w-[18px] h-[20px] ${isOpen ? "" : "hidden"}`}
          />
        </button>

        <Dropdown
          isOpen={isOpen}
          onClose={closeDropdown}
          className="absolute right-0 mt-[17px] flex w-[260px] flex-col rounded-2xl border border-gray-200 bg-white p-3 shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark"
        >
          <div>
            <span className="block font-medium text-[#666666] dark:text-[#CCCCCC] text-theme-sm">
              {UIText.header.user_Dropdown.user_name}
            </span>
            <span className="mt-0.5 block text-theme-xs text-[#666666] dark:text-[#CCCCCC] ">
              {UIText.header.user_Dropdown.user_email}
            </span>
          </div>

          <div className="my-3 h-px bg-[#666666] dark:bg-[#CCCCCC]" />

          <button
            className="flex items-center gap-3 px-3 py-2 mt-3 font-medium text-[#666666] dark:text-[#CCCCCC] rounded-lg group text-theme-sm hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-white/5 dark:hover:text-gray-300"
            onClick={handleLogout}
          >
            <TbLogout2 className="text-xl text-[#666666]" />
            {UIText.header.user_Dropdown.button}
          </button>
        </Dropdown>
      </div>
    </>
  );
}

export default UserDropdown;