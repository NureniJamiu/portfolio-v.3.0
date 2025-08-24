import React from "react";

const Page = () => {
  return (
    <div className="relative isolate min-h-screen bg-white dark:bg-black">
      {/* Left Border Pattern */}
      <div className="hidden md:block absolute inset-y-0 left-0 w-6 z-0
        bg-[image:repeating-linear-gradient(315deg,_#0000000d_0,_#0000000d_1px,_transparent_0,_transparent_50%)]
        dark:bg-[image:repeating-linear-gradient(315deg,_#ffffff1a_0,_#ffffff1a_1px,_transparent_0,_transparent_50%)]
        bg-[size:10px_10px] bg-fixed"></div>

      {/* Right Border Pattern */}
      <div className="hidden md:block absolute inset-y-0 right-0 w-6 z-0
        bg-[image:repeating-linear-gradient(315deg,_#0000000d_0,_#0000000d_1px,_transparent_0,_transparent_50%)]
        dark:bg-[image:repeating-linear-gradient(315deg,_#ffffff1a_0,_#ffffff1a_1px,_transparent_0,_transparent_50%)]
        bg-[size:10px_10px] bg-fixed"></div>

      {/* Main Content */}
      <main className="relative z-10 px-4 py-20 text-center text-gray-900 dark:text-white">
        <h1 className="text-3xl font-bold">Changelog</h1>
        <p className="mt-4 text-lg">
          This page uses repeating linear gradients as decorative borders.
        </p>
      </main>
    </div>
  );
};

export default Page;
