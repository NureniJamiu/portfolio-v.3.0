import React from "react";
import Pallete from "./Pallete";
import Divider from "./Divider";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import { BirdIcon, LinkedinIcon, MailIcon, XIcon } from "lucide-react";

const Header = () => {
  return (
    <>
      <Pallete />
      <div className="my-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="font-semibold text-[15px]">
              Nureni O. Jamiu
            </Link>
            <ThemeSwitcher />
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="#"
              className="w-auto h-auto p-[10px] bg-[#CCCCCC] dark:bg-[#2b2b2b] text-[#2b2b2b] dark:text-[#B8B8B8] hover:text-black hover:dark:text-white rounded-xl"
            >
              <LinkedinIcon size={20} />
            </Link>
            <Link
              href="#"
              className="w-auto h-auto p-[10px] bg-[#CCCCCC] dark:bg-[#2b2b2b] text-[#2b2b2b] dark:text-[#B8B8B8] hover:text-black hover:dark:text-white  rounded-xl"
            >
              <BirdIcon size={20} />
            </Link>
            <Link
              href="#"
              className="w-auto h-auto p-[10px] bg-[#CCCCCC] dark:bg-[#2b2b2b] text-[#2b2b2b] dark:text-[#B8B8B8] hover:text-black hover:dark:text-white  rounded-xl"
            >
              <MailIcon size={20} />
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[14px] text-[#727272]">
            Web Developer at BoughView Innovations
          </span>
          <span className="flex items-center gap-1">
            <span className="inline-block w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
            <span className="text-[14px] text-[#727272]">
              All systems operational
            </span>
          </span>
        </div>
      </div>
      <Divider />
    </>
  );
};

export default Header;
