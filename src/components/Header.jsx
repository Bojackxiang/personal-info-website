import React from "react";
import HeaderItem from "./HeaderItem";

export default function Header() {
  return (
    <div className="bg-blue-600 p-3">
      {/* menu wrapper*/}
      <div className="flex justify-between h-fit p-2">
        {/* left side menu */}
        <div className="flex items-center">
          <HeaderItem className="text-2xl mr-2">Alex</HeaderItem>
        </div>

        {/* right side menu */}
        <div className="flex items-center">
          <HeaderItem>Projects</HeaderItem>
          <HeaderItem>Tech Stack</HeaderItem>
          <HeaderItem>Latest CV</HeaderItem>
        </div>
      </div>
    </div>
  );
}
