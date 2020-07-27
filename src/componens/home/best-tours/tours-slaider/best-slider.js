import React from "react";
import "./slider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import photo from "./img/Rectangle 16.png";
import blackStar from "./img/Star 6.png";
import whiteStar from "./img/Star 6 (1).png";
import mapPaint from "./img/map-pin.png";
import userIcon from "./img/users.png";

const BestSlider = () => {
  var settings = {
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 2,
  };
  const cards = [
    {
      img: photo,
      stars: [blackStar, blackStar, blackStar, blackStar, whiteStar],
      paint: mapPaint,
      user: userIcon,
    },
    {
      img: photo,
      stars: [blackStar, blackStar, blackStar, blackStar, whiteStar],
      paint: mapPaint,
      user: userIcon,
    },
    {
      img: photo,
      stars: [blackStar, blackStar, blackStar, blackStar, whiteStar],
      paint: mapPaint,
      user: userIcon,
    },
    {
      img: photo,
      stars: [blackStar, blackStar, blackStar, blackStar, whiteStar],
      paint: mapPaint,
      user: userIcon,
    },
    {
      img: photo,
      stars: [blackStar, blackStar, blackStar, blackStar, whiteStar],
      paint: mapPaint,
      user: userIcon,
    },
    {
      img: photo,
      stars: [blackStar, blackStar, blackStar, blackStar, whiteStar],
      paint: mapPaint,
      user: userIcon,
    },
    {
      img: photo,
      stars: [blackStar, blackStar, blackStar, blackStar, whiteStar],
      paint: mapPaint,
      user: userIcon,
    },
  ];
  return (
    <div className="container1">
      <Slider {...settings}>
        {cards.map((item) => {
          return (
            <div className="card">
              <div className="block-img">
                <img src={item.img} />
              </div>

              <div className="content">
                <span className="card-name">
                  Kyrgyzstan Horse-riding <br />
                  Tour 2020
                </span>
                <div>
                  <span className="from">from </span>
                  <span className="tour-price">200$</span>
                </div>
                <div className="reitng">
                  <div className="block-stars">
                    {item.stars.map((items) => {
                      return <img src={items} alt="" className="stars" />;
                    })}
                  </div>
                  <span className="reting-figures">422 reviews</span>
                </div>
                <div className="block-buttom">
                  <div className="location">
                    <img src={item.paint}/>
                    <span>Kyrgyzstan, Bishkek</span>
                  </div>
                  <div className="people">
                    <img src={item.user}/>
                    <span>20/30 available</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
export default BestSlider;
