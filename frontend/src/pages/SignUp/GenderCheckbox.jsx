import React from "react";

const GenderCheckbox = () => {
  return (
    <div className="flex justify-between mb-4">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text text-white">Male</span>
          <input type="checkbox" className="checkbox border-gray-200" />
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text text-white">Female</span>
          <input type="checkbox" className="checkbox border-gray-200" />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
