import React from "react";
// access packge json to get the version value
import { version } from "../../../package.json";

const Footer = () => {
  return (
    <div className="h-[60px] m-auto bg-gradient-to-r from-sky-500 to-indigo-500 overflow-hidden flex justify-end items-center ">
      <h3 className="text-white mr-2">version:{version}</h3>
    </div>
  );
};

export default Footer;
