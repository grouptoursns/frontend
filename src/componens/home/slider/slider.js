
import React from "react";
import "./slider.css";
import "bootstrap/dist/css/bootstrap.min.css"
import Carousel from "react-bootstrap/Carousel";
import slide1 from "./img/Rectangle 5.png";
import Search from "./search/search.js"
import TitleSlider from "./title/title-slider.js"





const Slider1 = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100 " src={slide1}  />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 " src={slide1}  />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 " src={slide1}  />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
      
      </Carousel>
      <div className="text-slider"><TitleSlider/></div>
      <div className="nav-panel">
        <Search/>
      </div>
    </div>
  );
};
export default Slider1;