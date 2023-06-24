import React from "react";
import { SiApachekafka } from "react-icons/si";
import { FaNodeJs, FaAws } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiRedux, SiSpringboot } from "react-icons/si";
import { GrJava } from "react-icons/gr";
import { DiDocker } from "react-icons/di";

const TEACH_ICONS = [
  {icon: <SiApachekafka size={80} />, text: "Kafka"},
  {icon: <FaNodeJs size={80} />, text: "NodeJS"},
  {icon: <FaReact size={80} />, text: "React"},
  {icon: <SiRedux size={80} />, text: "Redux"},
  {icon: <SiSpringboot size={80} />, text: "Spring"},
  {icon: <GrJava size={80} />, text: "Java"},
  {icon: <DiDocker size={80} />, text: "Docker"},
  {icon: <FaAws size={80} />, text: "AWS"}
];

import TechItem from "./TechItem";

const TechStack = () => {
  return (
    <div className="m-auto md:w-1/2 w-3/4 grid grid-cols-2 md:grid-cols-4 place-items-center ">
      {TEACH_ICONS.map((item, index) => (
        <TechItem key={index} text={item.text}>{item.icon}</TechItem>
      ))}
    </div>
  );
};

export default TechStack;
