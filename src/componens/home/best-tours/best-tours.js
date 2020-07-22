import React from "react";
import "./best-tours.css";
import TextTours from "./text-tours/text-tours.js";
import BestSlider from "./tours-slaider/best-slider.js";

const BestTours = () => {
  return (
    <div className="block-tours">
      <TextTours />
      <BestSlider />
    </div>
  );
};

export default BestTours;