
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import slide1 from "./img/Rectangle 5.png";
import Carousel from "react-bootstrap/Carousel";

const Slider1 = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100 " src={slide1} alt="First slide" />
          <Carousel.Caption>
            <h3>We are making better tours</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide1} alt="Third slide" />

          <Carousel.Caption>
            <h3>We are making better tours</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide1} alt="Third slide" />

          <Carousel.Caption>
            <h3>We are making better tours</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <svg
            className="d-block w-100"
            viewBox="0 0 1440 586"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="1440"
              height="586"
              fill="#395BD2"
              fill-opacity="0.56"
            />
          </svg>

          <Carousel.Caption>
            <h3>We are making better tours</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </div>
  );
};
export default Slider1;
