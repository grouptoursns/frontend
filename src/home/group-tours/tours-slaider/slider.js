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
      slidesToShow: 5,
      slidesToScroll: 4
    }

    return (
        <div className="container1">
           <Slider {...settings}>
        <div  className="card">
          <h3>1</h3>
        </div>
        <di className="card">
          <h3>2</h3>
        </di>
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