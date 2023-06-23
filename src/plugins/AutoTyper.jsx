"use client";

import { TypeAnimation } from "react-type-animation";

const AutoTyper = ({ words, fontSize, display, styles }) => {
  return (
    <TypeAnimation
      sequence={words}
      wrapper="span"
      speed={50}
      style={{ fontSize, display, ...styles }}
      repeat={Infinity}
    />
  );
};

export default AutoTyper;
