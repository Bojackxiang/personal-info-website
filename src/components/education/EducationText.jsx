import React from "react";

function EducationText({ schoolName, degreeTitle, start, end, minorDegree }) {
  return (
    <div className="flex-1 lg:ml-10 flex items-center justify-center lg:justify-start mt-5 lg:mt-0">
      <div className="text-center lg:text-start">
        <h1 className="text-2xl font-bold">{schoolName} </h1>
        <h2 className="text-lg">
          {start} - {end}
        </h2>
        <h3 className=" text-lg">
          <b>Major Degree:</b> {degreeTitle}
        </h3>
        {minorDegree && (
          <h3 className=" text-lg">
            <b>Minor degree:</b> {minorDegree}
          </h3>
        )}
      </div>
    </div>
  );
}

export default EducationText;
