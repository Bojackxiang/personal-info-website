"use client";

import React, { useState } from "react";
import { Navbar } from "flowbite-react";
import { GiH2O, GiHamburgerMenu } from "react-icons/gi";

const NAV_ITEMS = [
  { name: "Home", href: "/navbars" },
  { name: "About", href: "/navbars" },
  { name: "Services", href: "/navbars" },
  { name: "Pricing", href: "/navbars" },
];

const Header = () => {
  const [mobileDisplay, setMobileDisplay] = useState(false);
  function handleMenuButtonClick() {
    setMobileDisplay(!mobileDisplay);
  }

  return (
    <Navbar
      className="overflow-hidden bg-transparent backdrop-blur-2xl"
      // fluid={true}
      rounded={true}
    >
      <Navbar.Brand href="https://flowbite.com/">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite
        </span>
      </Navbar.Brand>
      <Navbar.Toggle
        className="border-0 bg-transparent hover:border-0 active:border-0 focus:border-0"
        barIcon={() => (
          <h2 className="text-neutral-800 text-xl font-bold ">MENU</h2>
        )}
      />
      <Navbar.Collapse>
        {NAV_ITEMS.map(({ name, href }) => (
          <Navbar.Link
            className="text-neutral-900 hover:text-neutral-500 duration-100 text-xl border-0"
            key={`${name}-${href}`}
            href={`${href}`}
          >
            {name}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
