import Divider from "@/components/custom/Divider";
import WelcomeVid from "@/components/custom/WelcomeVid";
import React from "react";

const Page = () => {
  return (
    <div>
      <div className="p-4">
        <WelcomeVid />
      </div>
      <Divider />

      <div>
        <div className="flex gap-5 text-[15px] p-4 text-[#2b2b2b] dark:text-neutral-400">
          <div className="mt-2 space-y-4">
            <p>
              Hello - again. I am a Frontend developer who loves building things
              and helping people. I am currently pursuing a <b>double degree</b>{" "}
              in <span className="font-bold underline">Computer Science</span>{" "}
              at{" "}
              <span className="font-bold underline">
                International University of Applied Sciences
              </span>
              , Germany , and in{" "}
              <span className="font-bold underline">Project Management</span> at{" "}
              <span className="font-bold underline">
                Lagos State university
              </span>
              , Nigeria.
            </p>

            <p>
              That's me in 10 seconds. If that peaked your interest and would
              like to know more, then keep scrolling
            </p>
          </div>
        </div>
        <Divider type="border-dashed" />
      </div>
    </div>
  );
};

export default Page;
