import Image from "next/image";
import React from "react";

const InfoImage = () => {
  return (
    <div className="flex-1 flex flex-col my-auto justify-center items-center">
      <div className="rounded-full overflow-hidden my-auto h-[250px] w-[250px] lg:h-[300px] lg:w-[300px]">
        <Image
          className="transition duration-500 hover:scale-110"
          alt="image/place-holder.png"
          width={300}
          height={300}
          src={"/images/avatar.jpg"}
        />
      </div>
      <div className="mt-8 lg:mt-4 flex justify-between">
        <button className="px-3 lg:px-6 py-2 mr-1 bg-gray-800 rounded-lg hover:bg-gray-700 transition duration-200 inline-block">
          <span className="text-white text-bold lg:text-lg text-2xl">Contact me</span>
        </button>
        <button className="px-3 lg:px-6 py-2 ml-1 bg-gray-800 rounded-lg hover:bg-gray-700 transition duration-200 inline-block">
          <span className="text-white text-bold text-xl lg:text-2xl">Downlod CV</span>
        </button>
      </div>
    </div>
  );
};

export default InfoImage;
