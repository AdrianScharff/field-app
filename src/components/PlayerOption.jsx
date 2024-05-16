import React from "react";

const PlayerOption = ({ name, rate, image }) => {
  return (
    <div
      className="flex justify-between items-center px-3 py-2 h-[4rem] w-[20rem] bg-slate-600"
    >
      <p className="text-white">{name}</p>
      <p className="text-white">{rate}</p>
      <img className="h-full" src={image} alt="" />
    </div>
  );
};

export default PlayerOption;
