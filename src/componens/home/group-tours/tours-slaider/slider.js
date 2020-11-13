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
import ReactStars from 'react-stars'
import noImage from "../img/no image 1.png";

const ToursSlider = (props) => {

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
  var settings = {
    infinite: false,
    speed: 500,
    arrows: true,
    slidesToShow: props.card && props.card.length < 3 ? 1 : 3,
    slidesToScroll: 2,
  };
  

  const onClickCard = (id) => {
    props.detailsTour(id);
  };
  console.log(props.cards);
  return (
    <div className="container1">
      <Slider {...settings}>
      {props.card ? props.card.map((item) => 
          (
            <Link
              to={`/tourspagevdsvs/${item.id}`}
              key={item.id}
        
            >
              <div className="card">
                <div className="block-img">
                  <img src={item.main_image ? item.main_image : noImage} alt="img" />
                </div>

                <div className="content">
                  <span className="card-name">{item.name}</span>
                  <div>
                    <span className="from">from </span>
                    <span className="tour-price">{item.min_price} $</span>
                  </div>
                  <div className="reitng11">
                    <div className="block-stars">
                    <ReactStars
                    size={20}
                    count={5}
                    value={item.avg_rate_tour[0].rating}
                    edit={false}
                    half={true}
                    color1="lightgrey"
                    color2="gold"
                />
                    </div>
          <span className="reting-figures">{item.avg_rate_tour[0].count_of_voices} reviews</span>
                  </div>
                  <div className="block-buttom">
                    <div className="location11">
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
          )
        ) : <></>}
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


