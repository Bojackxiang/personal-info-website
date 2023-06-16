"use client";

import React from "react";
import Row from "./Row";
import EducationImage from "./EducationImage";
import EducationText from "./EducationText";

const Education = () => {
  return (
    <div>
      <Row className={"justify-center"}>
        <EducationImage image={"/images/uofa.jpeg"} />
        <EducationText
          schoolName={"Univeristy of Arizona"}
          degreeTitle={"B.S. in Computer Science"}
          minorDegree={"B.S. in Applied Mathematics"}
          start={"August 2016"}
          end={"May 2020"}
        />
      </Row>
    </div>
  );
};

export default Education;
