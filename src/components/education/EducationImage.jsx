import Image from "next/image";
import React from "react";

function EducationImage({ image }) {
  return (
    <div className="flex lg:flex-1 justify-center my-auto">
      <Image
        className="rounded-lg "
        src={image}
        width={100}
        height={100}
        placeholder="blur"
        blurDataURL="images/place-holder.png"
        alt="education-image"
      />
    </div>
  );
}

export default EducationImage;
