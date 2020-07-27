import React from "react";
import "./slider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ToursSlider=()=>  {

    var settings = {
      infinite: true,
      speed: 500,
      arrows:true,
      slidesToShow: 3,
      slidesToScroll: 2
    }

    return (
        <div className="container1">
           <Slider {...settings}>
        <div  className="card">
          <h3>1</h3>
        </div>
        <div className="card">
          <h3>2</h3>
        </div>
        <div className="card">
          <h3>3</h3>
        </div>
        <div className="card">
          <h3>4</h3>
        </div>
        <div className="card">
          <h3>5</h3>
        </div>
        <div className="card">
          <h3>6</h3>
        </div>
      </Slider> 
        </div>
      
    );
  }
export default ToursSlider;