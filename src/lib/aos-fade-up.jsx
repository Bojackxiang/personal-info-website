'use client';

import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 


const AosFadeUp = ({children}) => {
  useEffect(() => {
    AOS.init({ duration: 500, easing: "ease-out-cubic", once: true });
  }, []);

  return <div data-aos="fade-up">{children}</div>;
};

export default AosFadeUp;
