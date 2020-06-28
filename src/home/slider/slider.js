
import React from "react";
import "./slider.css";
import "bootstrap/dist/css/bootstrap.min.css"
import slide1 from "./img/Rectangle 5.png";
import Search from "./search/search.js"
import TitleSlider from "./title/title-slider.js"


const Slider1 = () => {
  return (
    <div className="block1">

          <img className="d-block " src={slide1} />
       <div className="text-slider"><TitleSlider/></div>
      <div className="nav-panel">
        <Search/>
      </div>
    </div>
  );
};
export default Slider1;
