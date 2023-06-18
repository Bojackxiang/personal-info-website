import React from 'react';

const Divider = ({ children }) => {
  return (
    <div className="flex items-center my-5">
      <div className="border-b-2 border-neutral-100 w-full" />
      <span className="px-2 py-0.5 font-medium text-neutral-700 text-3xl italic">
        {children}
      </span>
      <div className="border-b-2 border-neutral-100 w-full" />
    </div>
  );
};

export default Divider;