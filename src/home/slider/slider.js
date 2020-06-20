
import React from "react";
import "./slider.css";
import "bootstrap/dist/css/bootstrap.min.css"
import slide1 from "./img/Rectangle 5.png";
import Carousel from "react-bootstrap/Carousel";
import Search from "./search/search.js"
import SearchBtn from "./searchBtn/searchBtn.js"

const Slider1 = () => {
  return (
    <div className="block1">
      <Carousel>
        <Carousel.Item>
          <img className="d-block " src={slide1} alt="First slide" />
          <Carousel.Caption>
            <h3 className="slide-text">We are making<hr/> better tours</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src={slide1} alt="Third slide" />

          <Carousel.Caption>
            <h3 className="slide-text">We are making<hr/>better tours</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block " src={slide1} alt="Third slide" />

          <Carousel.Caption>
            <h3 className="slide-text">We are making<hr/> better tours</h3>
          </Carousel.Caption>
        </Carousel.Item>
       
      </Carousel>
      <div className="nav-panel">
        <SearchBtn/>
        <Search/>
      </div>
    </div>
  );
};
export default Slider1;
