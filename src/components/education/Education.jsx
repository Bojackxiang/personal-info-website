"use client";

import React from "react";
import Row from "../common/Row";
import EducationImage from "./EducationImage";
import EducationText from "./EducationText";

const Education = () => {
  return (
    <div className="w-3/4 m-auto">
      <Row className={"justify-center"}>
        <EducationImage image={"/images/uofa.jpeg"} />
        <EducationText
          schoolName={"Univeristy of Arizona"}
          degreeTitle={"B.S. in Computer Science"}
          minorDegree={"B.S. in Applied Mathematics"}
          start={"Jan 2013"}
          end={"Aug 2016"}
        />
      </Row>
      <Row className={"justify-center"}>
        <EducationImage image={"/images/unsw-1.png"} />
        <EducationText
          schoolName={"Univeristy of New South Wales"}
          degreeTitle={"Master of Information Technology"}
          start={"Jan 2017"}
          end={"Dec 2018"}
        />
      </Row>
    </div>
  );
};

export default Education;
