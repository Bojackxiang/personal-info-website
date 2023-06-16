"use client";

import React, { useState, useRef, useEffect } from "react";
import HeaderItem from "./HeaderItem";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

const MENI_ITEMS = [
  { name: "Projects", link: "/projects" },
  { name: "Tech Stack", link: "/tech-stack" },
  { name: "Latest CV", link: "/cv" },
];

export default function Header() {
  const [mobileDisplay, setMobileDisplay] = useState(false);
  const dropdownRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setMobileDisplay(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  function handleMenuButtonClick(event) {
    event.stopPropagation(); // Stop the event from propagating to the outside click event listener
    setMobileDisplay(!mobileDisplay);
  }

  return (
    <div className="bg-blue-600 p-3">
      {/* menu wrapper*/}
      <div className="flex justify-between h-fit p-2">
        {/* left side menu */}
        <div className="flex items-center">
          <Link href="/">
            <HeaderItem className="text-2xl mr-2">Alex</HeaderItem>
          </Link>
        </div>

        {/* right side menu */}
        {/* mobile hidden  */}
        <div className="hidden lg:flex items-center">
          {MENI_ITEMS.map((item, index) => (
            <Link href={item.link} key={`${index}-desktop-item`}>
              <HeaderItem link={item.link}>{item.name}</HeaderItem>
            </Link>
          ))}
        </div>

        {/* right side menu */}
        {/* mobile dispaly  */}
        <div className="md:hidden flex items-center" ref={menuButtonRef}>
          <GiHamburgerMenu size={25} onClick={handleMenuButtonClick} color="white" />
          {mobileDisplay && (
            <div
              className="absolute top-[70px] left-0 right-0"
              ref={dropdownRef}
            >
              <div className="w-full">
                {MENI_ITEMS.map((item, index) => (
                  <Link href={item.link} key={`${index}-mobile-item`}>
                    <HeaderItem
                      className="bg-blue-400 text-lg ml-0 p-3"
                      link={item.link}
                    >
                      {item.name}
                    </HeaderItem>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
