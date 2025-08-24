import React from "react";

const PatternBorders = () => {
  return (
    <>
      {/* Left Border */}
      <div className="hidden md:block absolute inset-y-0 left-0 w-10 z-0 border-x border-neutral-800
        bg-[image:repeating-linear-gradient(315deg,_#00000040_0,_#00000040_1px,_transparent_0,_transparent_50%)]
        dark:bg-[image:repeating-linear-gradient(315deg,_#ffffff1a_0,_#ffffff1a_1px,_transparent_0,_transparent_50%)]
        bg-[size:10px_10px] bg-fixed"></div>

      {/* Right Border */}
      <div className="hidden md:block absolute inset-y-0 right-0 w-10 z-0 border-x border-neutral-800
        bg-[image:repeating-linear-gradient(315deg,_#00000040_0,_#00000040_1px,_transparent_0,_transparent_50%)]
        dark:bg-[image:repeating-linear-gradient(315deg,_#ffffff1a_0,_#ffffff1a_1px,_transparent_0,_transparent_50%)]
        bg-[size:10px_10px] bg-fixed"></div>
    </>
  );
}

export default PatternBorders;
