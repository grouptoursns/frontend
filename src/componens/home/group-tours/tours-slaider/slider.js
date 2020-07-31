import React from "react";
import "./slider.css";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import photo from "../../best-tours/tours-slaider/img/Rectangle 16.png";
import blackStar from "./img/Star 6.png";
import whiteStar from "./img/Star 6 (1).png";
import mapPaint from "./img/map-pin.png";
import userIcon from "./img/users.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { detailsTour } from "../../../../actions/detailsTour";

const ToursSlider = (props) => {
  var settings = {
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 2,
  };
  console.log(props)
  const cards1 = [
    {
      img: photo,
      stars: [
        {
          id:1,
          img:blackStar,
        },
        {
          id:2,
          img:blackStar,
        },
        {
          id:3,
          img:blackStar,
        },
        {
          id:4,
          img:blackStar,
        },
        {
          id:5,
          img:whiteStar,
        }
      ],
      paint: mapPaint,
      user: userIcon,
    },

  ];
  let cards = [];
  if (props.card === undefined) {
    cards = [];
  } else {
    cards = [...props.card];
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
            <Link to="/tourspage" key={item.id} onClick={() => onClickCard(item.id)}>
              <div className="card" >
                <div className="block-img">
                  <img src={cards1[0].img} alt="img" />
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
                        return <img src={items.img} key={items.id} alt="img" className="stars" />;
                      })}
                    </div>
                    <span className="reting-figures">422 reviews</span>
                  </div>
                  <div className="block-buttom">
                    <div className="location">
                      <img src={cards1[0].paint} alt="img" />
                      <span>{item.country}</span>
                    </div>
                    <div className="people">
                      <img src={cards1[0].user} alt="img" />
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

export default connect(mapStateToProps, mapDispatchToProps)(ToursSlider);


