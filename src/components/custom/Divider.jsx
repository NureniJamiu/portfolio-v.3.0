import React from "react";

const Divider = ({ type = "border-solid" }) => {
  // return <div className="w-full h-[.06px] bg-[#393939]"></div>;
  return (
    <div
      className={`${type} w-full border-b-[.5px] border-b-[#393939] mt-1`}
    ></div>
  );
};

export default Divider;
