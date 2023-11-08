import Image from "next/image";
import React from "react";

const CustomSpinner = () => {
  return (
    <div className="relative -top-[0.9rem] right-[13px] ">
      <div className="spinnerInner absolute"></div>
      <div className="spinnerOuter absolute"></div>
    </div>
  );
};

export default CustomSpinner;
