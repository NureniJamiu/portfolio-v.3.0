"use client";

import Link from "next/link";
import Divider from "./Divider";
import Pallete from "./Pallete";
import ThemeSwitcher from "./ThemeSwitcher";
import { PanelRightOpen } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Pallete />
      <div className="px-4">
        <div className="my-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href="/" className="font-semibold text-[15px]">
                Nureni O. Jamiu
              </Link>
              <ThemeSwitcher />
            </div>

            <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
              <PanelRightOpen
                size={24}
                className="text-neutral-900 dark:text-neutral-400"
              />
            </div>

            <div className="hidden md:flex items-center gap-2">
              <Link
                href="#"
                className="text-[14px] text-[#2b2b2b] dark:text-[#B8B8B8] hover:text-black hover:dark:text-white group"
              >
                <span className="group-hover:underline">Linkedin</span>{" "}
                <span className="group-hover:no-underline"> /</span>
              </Link>
              <Link
                href="#"
                className="text-[14px] text-[#2b2b2b] dark:text-[#B8B8B8] hover:text-black hover:dark:text-white   group"
              >
                <span className="group-hover:underline">Twitter</span>{" "}
                <span className="group-hover:no-underline"> /</span>
              </Link>
              <Link
                href="#"
                className="text-[14px] text-[#2b2b2b] dark:text-[#B8B8B8] hover:text-black hover:dark:text-white  hover:underline"
              >
                Gmail
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-between relative overflow-hidden">
            {/* Job title with animation */}
            <div
              className={`text-[14px] text-[#727272] transition-transform duration-300 ${
                isMenuOpen
                  ? "-translate-x-full opacity-0"
                  : "translate-x-0 opacity-100"
              }`}
            >
              Web Developer at BoughView Innovations
            </div>

            {/* Mobile navigation links that slide in */}
            <div
              className={`absolute left-0 flex items-center gap-2 text-[14px] text-[#2b2b2b] dark:text-neutral-500 transition-transform duration-300 ${
                isMenuOpen
                  ? "translate-x-0 opacity-100"
                  : "translate-x-full opacity-0"
              }`}
            >
              <Link
                href="/works"
                className="hover:text-black hover:dark:text-white hover:underline"
              >
                works
              </Link>
              <span>/</span>
              <Link
                href="/notes"
                className="hover:text-black hover:dark:text-white hover:underline"
              >
                notes
              </Link>
              <span>/</span>
              <Link
                href="/about"
                className="hover:text-black hover:dark:text-white hover:underline"
              >
                about
              </Link>
              <span>/</span>
              <Link
                href="/now"
                className="hover:text-black hover:dark:text-white hover:underline"
              >
                now
              </Link>
            </div>

            <span className="hidden md:flex items-center gap-1">
              <span className="inline-block w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
              <span className="text-[14px] text-[#727272]">
                All systems operational
              </span>
            </span>
          </div>
        </div>
      </div>
      <Divider />
    </>
  );
};

export default Header;
