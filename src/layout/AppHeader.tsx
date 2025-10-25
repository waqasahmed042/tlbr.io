"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import tlbr_white from "@/assets/tlbr.io-white.png";
import tlbr_dark from "@/assets/tlbr.io-dark.png";
import { ThemeToggleButton } from "@/components/common/ThemeToggleButton";
import UserDropdown from "@/components/header/UserDropdown";
import { useSidebar } from "@/context/SidebarContext";
import { RiMenu2Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";

const AppHeader: React.FC = () => {
  const [isApplicationMenuOpen, setApplicationMenuOpen] = useState(false);
  const { isMobileOpen, toggleSidebar, toggleMobileSidebar } = useSidebar();

  const handleToggle = () => {
    if (window.innerWidth >= 1024) {
      toggleSidebar();
    } else {
      toggleMobileSidebar();
    }
  };

  const toggleApplicationMenu = () => {
    setApplicationMenuOpen(!isApplicationMenuOpen);
  };
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 flex w-full bg-white border-gray-200 z-99999 dark:border-gray-800 dark:bg-gray-900 lg:border-b">
        <div className="flex flex-col items-center justify-between grow lg:flex-row lg:px-6">
          <div className="flex items-center justify-between w-full gap-2 px-3 py-3 border-b border-gray-200 dark:border-gray-800 sm:gap-4 lg:justify-normal lg:border-b-0 lg:px-0 lg:py-4">
            <button
              className="items-center justify-center w-10 h-10 text-[#666666] border-gray-200 rounded-lg z-99999 dark:border-gray-800 lg:flex dark:text-[#CCCCCC] lg:h-11 lg:w-11 lg:border"
              onClick={handleToggle}
              aria-label="Toggle Sidebar"
            >
              {isMobileOpen ? (
                <button className="flex items-center justify-center w-10 h-10 text-[#666666] rounded-lg z-99999 hover:bg-gray-100 dark:text-[#CCCCCC] dark:hover:bg-gray-800 lg:hidden">
                  <IoClose className="text-xl" />
                </button>
              ) : (
                <button className="flex items-center justify-center w-10 h-10 text-[#666666] rounded-lg z-99999 hover:bg-gray-100 dark:text-[#CCCCCC] dark:hover:bg-gray-800">
                  <RiMenu2Fill className="text-xl" />
                </button>
              )}
            </button>

            <Link href="/" className="lg:hidden">
              <Image
                className="dark:hidden"
                src={tlbr_dark}
                alt="Logo"
                width={130}
                height={30}
              />
              <Image
                className="hidden dark:block"
                src={tlbr_white}
                alt="Logo"
                width={130}
                height={30}
              />
            </Link>

            <button
              onClick={toggleApplicationMenu}
              className="flex items-center justify-center w-10 h-10 text-[#666666] rounded-lg z-99999 hover:bg-gray-100 dark:text-[#CCCCCC] dark:hover:bg-gray-800 lg:hidden"
            >
              <button className="flex items-center justify-center w-10 h-10 text-[#666666] rounded-lg z-99999 hover:bg-gray-100 dark:text-[#CCCCCC] dark:hover:bg-gray-800 lg:hidden">
                <BsThreeDots className="text-xl" />
              </button>
            </button>
          </div>
          <div
            className={`${isApplicationMenuOpen ? "flex" : "hidden"
              } items-center justify-between w-full gap-4 px-5 py-4 lg:flex shadow-theme-md lg:justify-end lg:px-0 lg:shadow-none`}
          >
            <div className="flex items-center gap-2 2xsm:gap-3">
              <ThemeToggleButton />
            </div>

            <UserDropdown />
          </div>
        </div>
      </header>
    </>
  );
};

export default AppHeader;
