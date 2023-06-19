import React from "react";

const ExperienceText = ({ title, subTitle, detailsList, position }) => {
  return (
    <div className="flex-1 lg:w-1/2 w-full m-auto lg:mt-0 mt-7">
      <h2 className="text-4xl font-bold text-center lg:text-left">{title}</h2>
      <p className="text-xl text-neutral-500 mt-2">{subTitle}</p>
      <ul className="mt-2">
        {(detailsList || []).map((detail, index) => (
          <li className="list-disc mt-2 ml-4" key={`${position}-expereince-detail-${index}`}>
            <span className="text-xl text-neutral-500">{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceText;
