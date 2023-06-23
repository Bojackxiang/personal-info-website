import Image from "next/image";
import React from "react";

const InfoImage = () => {
  return (
    <div className="flex-1 flex flex-col my-auto justify-center items-center">
      <div className="rounded-full overflow-hidden my-auto h-[200px] w-[200px]">
        <Image
          className="transition duration-500 hover:scale-110"
          alt="image/place-holder.png"
          width={200}
          height={200}
          src={"/images/avatar.jpg"}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;`}
        />
      </div>
      <div className="mt-8 lg:mt-4">
        <button className="p-2 bg-blue-400 rounded-lg hover:bg-blue-500 transition  duration-200 ">
          <span className="text-white">Contact me</span>
        </button>
      </div>
    </div>
  );
};

export default InfoImage;
