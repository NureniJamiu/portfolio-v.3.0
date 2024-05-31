import React from "react";
import Pallete from "./Pallete";
import Divider from "./Divider";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <>
      <Pallete />
      <div className="my-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="font-semibold text-[15px]">
            Nureni O. Jamiu
          </Link>
          <ThemeSwitcher />
        </div>
        <span className="text-[14px] text-[#727272]">
          Web Developer at BoughView Innovations
        </span>
      </div>
      <Divider />
    </>
  );
};

export default Header;
