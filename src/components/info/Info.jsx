import React from "react";
import Row from "../common/Row";
import InfoImage from "./InfoImage";
import InfoTxt from "./InfoTxt";

const Info = () => {
  return (
    <div className="w-full h-screen m-auto bg-gradient-to-r from-sky-500 to-indigo-500 overflow-hidden">
      <Row className="w-8/12 lg:w-3/4 m-auto h-full">
        <InfoImage />
        <InfoTxt />
      </Row>
    </div>
  );
};

export default Info;
