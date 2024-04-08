import React from "react";

const Navbarless = ({ state, onStepChange }) => {
  return (
    <div className="flex justify-between lg:py-5 px-2 sm:px-5 py-10">
      <div className="flex flex-row">
        <div className="font-body pr-5 text-button text-3xl lg:text-2xl px-4">
          dribbble
        </div>
        <button
          hidden={state == 0}
          className="bg-search rounded-md px-3"
          onClick={(e) => onStepChange(0)}
        >
          &lt;
        </button>
      </div>
      <hr />
    </div>
  );
};

export default Navbarless;