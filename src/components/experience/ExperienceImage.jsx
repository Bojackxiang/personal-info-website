import Image from "next/image";
import React from "react";

const ExperienceImage = ({src}) => {
  return (
    <div className="flex-1 flex justify-end items-center">
      <Image src={src} width={200} height={200} alt="unsw" />
    </div>
  );
};

export default ExperienceImage;
