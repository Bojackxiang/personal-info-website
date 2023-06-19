import Image from "next/image";
import React from "react";

const ExperienceImage = ({src}) => {
  return (
    <div className="flex-1 flex justify-center lg:justify-end items-center">
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg drop-shadow-md">
        <Image src={src} width={200} height={200} alt="unsw" />
      </div>
    </div>
  );
};

export default ExperienceImage;
