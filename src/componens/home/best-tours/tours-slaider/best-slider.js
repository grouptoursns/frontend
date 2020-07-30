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
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { detailsTour } from "../../../../actions/detailsTour";

const BestSlider = (props) => {
  var settings = {
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 2,
  };
  const cards1 = [
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
  let cards = [];
  if (props.cards === undefined) {
    cards = [];
  } else {
    cards = [...props.cards];
  }
  const onClickCard = (id) => {
    props.detailsTour(id);
  };
  console.log(props.cards);
  return (
    <div className="container1">
      <Slider {...settings}>
        {cards.map((item) => {
          return (
            <Link to="/tourspage">
              <div className="card" key="" onClick={() => onClickCard(item.id)}>
                <div className="block-img">
                  <img src={cards1[0].img} />
                </div>

                <div className="content">
                  <span className="card-name">{item.name}</span>
                  <div>
                    <span className="from">from </span>
                    <span className="tour-price">{item.min_price} $</span>
                  </div>
                  <div className="reitng">
                    <div className="block-stars">
                      {cards1[0].stars.map((items) => {
                        return <img src={items} alt="" className="stars" />;
                      })}
                    </div>
                    <span className="reting-figures">422 reviews</span>
                  </div>
                  <div className="block-buttom">
                    <div className="location">
                      <img src={cards1[0].paint} />
                      <span>{item.country}</span>
                    </div>
                    <div className="people">
                      <img src={cards1[0].user} />
                      <span>
                        {`${item.min_people}/${item.max_people}`} available
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </Slider>
    </div>
  );
};


const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    detailsTour: (id) => dispatch(detailsTour(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BestSlider);
