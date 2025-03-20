import React from "react";
import img1 from "../assets/images/img1.avif";

const StaticCard = () => {
  return (
    <div className="h-1/2 bg-amber-800 flex items-center justify-center overflow-hidden rounded-2xl">
      <img src={img1} alt="Static Card" className="w-full h-full object-cover" />
    </div>
  );
};

export default StaticCard;
