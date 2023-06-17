import selfIntro from "@/constant/selfIntro";
import React from "react";

const InfoTxt = () => {
  return <div className="flex-1 ml-10 mt-10 lg:mg-0">
    <h1 className="text-3xl text-bold">{selfIntro.title}</h1>
    <h2 className="text-xl text-bold mt-2">{selfIntro.subtitle}</h2>
    <p className="mt-3">{selfIntro.content}</p>
    </div>;
};

export default InfoTxt;
