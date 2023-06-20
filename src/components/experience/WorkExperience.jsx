import React from "react";
import ExperienceText from "./ExperienceText";
import ExperienceImage from "./ExperienceImage";
import Row from "../common/Row";

const WorkExperience = () => {
  return (
    <>
      {/* unse */}
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
        <ExperienceImage src={"/images/unsw.png"}/>
      </Row>

      {/* NSW transport */}
      <Row className="w-3/4 m-auto flex-col-reverse lg:flex-row  mt-10 lg:mt-0">
        <ExperienceText
          title="NSW Service Transport"
          position="Full Stack Developer"
          subTitle="A UNSW student service that allows students to find and book study spaces on campus."
          detailsList={[
            "React, Redux, Redux-Saga",
            "Node.js, Express and",
            "Mongoose",
          ]}
        />
        <ExperienceImage src={"/images/nsw-transport-logo.png"} />
      </Row>

      {/* Q83 */}
      <Row className="w-3/4 m-auto flex-col-reverse lg:flex-row mt-10 lg:mt-0">
        <ExperienceText
          title="Q83"
          position="Full Stack Developer"
          subTitle="A UNSW student service that allows students to find and book study spaces on campus."
          detailsList={[
            "React, Redux, Redux-Saga",
            "Node.js, Express and",
            "Mongoose",
          ]}
        />
        <ExperienceImage src={"/images/kitly.png"} />
      </Row>
    </>
  );
};

export default WorkExperience;
