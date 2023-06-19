import React from "react";
import ExperienceText from "./ExperienceText";
import ExperienceImage from "./ExperienceImage";
import Row from "../common/Row";

const WorkExperience = () => {
  return (
    <Row className="w-3/4 m-auto flex-col-reverse lg:flex-row ">
        <ExperienceText
          title="UNSW"
          position="Front end Developer"
          subTitle="A UNSW student service that allows students to find and book study spaces on campus."
          detailsList={[
            "React, Redux, Redux-Saga",
            "Node.js, Express and",
            "Mongoose",
          ]}
        />
      <ExperienceImage src={"/images/unsw.png"} />
    </Row>
  );
};

export default WorkExperience;
