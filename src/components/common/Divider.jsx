import React from 'react';
import {twMerge} from 'tailwind-merge'

const Divider = ({ children, className }) => {
  return (
    <div className={twMerge("flex items-center my-5", className)}>
      <div className="border-b-2 border-neutral-100 w-full" />
      <span className="px-2 py-0.5 font-medium text-neutral-700 text-3xl italic">
        {children}
      </span>
      <div className="border-b-2 border-neutral-100 w-full" />
    </div>
  );
};

export default Divider;