import React from "react";
import "./best-tours.css";
import TextTours from "./text-tours/text-tours.js";
import BestSlider from "./tours-slaider/best-slider.js";

const BestTours = (props) => {
  return (
    <div className="block-tours1">
      <TextTours />
      <BestSlider cards={props.card}/>
    </div>
  );
};

export default BestTours;