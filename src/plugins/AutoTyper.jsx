"use client";

import { TypeAnimation } from "react-type-animation";

const AutoTyper = ({ words, fontSize, display }) => {
  return (
    <TypeAnimation
      sequence={words}
      wrapper="span"
      speed={50}
      style={{ fontSize, display }}
      repeat={Infinity}
    />
  );
};

export default AutoTyper;
