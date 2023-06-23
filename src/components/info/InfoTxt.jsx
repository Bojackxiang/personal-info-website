import { Lexend } from "next/font/google";
import { twMerge } from "tailwind-merge";
import AutoTyper from "@/plugins/AutoTyper";
import React from "react";
import selfIntro from "@/constant/selfIntro";

const lexend = Lexend({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const softwareEngineer = ["Software Engineer", 1000];
const webDeveloper = ["Web Developer", 1000];
const fullStackDeveloper = ["Full Stack Developer", 1000];
const programmer = ["Programmer", 1000];
const developer = ["Developer", 1000];
const designer = ["Designer", 1000];

const WORDS = [
  ...softwareEngineer,
  ...webDeveloper,
  ...fullStackDeveloper,
  ...programmer,
  ...developer,
  ...designer,
];
const fontSize = "25px";
const display = "inline-block";

const InfoTxt = () => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <div>
        <h1 className={twMerge(lexend.className, "text-3xl sm:text-8xl text-bold text-gray-800")}>
          {selfIntro.title}
        </h1>
        <h2 className="mt-2">
          <span className="text-2xl inline-block mr-2 text-gray-800">I am</span>
          <AutoTyper
            words={WORDS}
            fontSize={fontSize}
            display={display}
            styles={{fontWeight: 700, fontcolor: "white"}}
          />
        </h2>
        <p className="mt-3 text-gray-800 text-xl">{selfIntro.content}</p>
      </div>
    </div>
  );
};

export default InfoTxt;
