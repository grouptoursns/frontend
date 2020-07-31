import React from "react";
import "./group-tours.css";
import TextTours from "./text-tours/text-tours.js";
import ToursSlider from "./tours-slaider/slider.js";

const GroupTours = (props) => {
  return (
    <div className="block-tours">
      <TextTours />
      <ToursSlider card={props.card1}/>
    </div>
  );
};

export default GroupTours;