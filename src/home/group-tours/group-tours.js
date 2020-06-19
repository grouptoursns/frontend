import React from "react";
import "./group-tours.css";
import TextTours from "./text-tours/text-tours.js";
import ToursSlider from "./tours-slaider/slider.js";

const GroupTours = () => {
  return (
    <div className="block-tours">
      <TextTours />
      <ToursSlider />
    </div>
  );
};

export default GroupTours;