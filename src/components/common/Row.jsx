import React from "react";
import { twMerge } from "tailwind-merge";

const Row = ({ children, className }) => {
  return (
    <div className={twMerge("flex flex-col lg:flex-row justify-between pt-5 pb-5", className)}>
      {children}
    </div>
  );
};

export default Row;
