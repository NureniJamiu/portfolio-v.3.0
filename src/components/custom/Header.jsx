import Link from "next/link";
import Divider from "./Divider";
import Pallete from "./Pallete";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
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
          <div className="flex items-center justify-between">
            <span className="text-[14px] text-[#727272]">
              Web Developer at BoughView Innovations
            </span>
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
