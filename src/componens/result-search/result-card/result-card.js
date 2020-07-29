import React, { useEffect } from "react";
import "./result-card.css";
import imgCard from "./img/Frame 42.png";
import star1 from "./img/Star 6.png";
import star2 from "./img/Star 6 (1).png";
import mapPaint from "./img/map-pin.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { searchTrigerFalse } from "../../../actions/tourSearch";

const ResultCard = (props) => {
  useEffect(() => {
    //props.triger();
  }, []);
  const cards = [
    {
      img: imgCard,
      stars: [star1, star1, star1, star1, star2],
      paint: mapPaint,
    },
    {
      img: imgCard,
      stars: [star1, star1, star1, star1, star2],
      paint: mapPaint,
    },
    {
      img: imgCard,
      stars: [star1, star1, star1, star1, star2],
      paint: mapPaint,
    },
    {
      img: imgCard,
      stars: [star1, star1, star1, star1, star2],
      paint: mapPaint,
    },
  ];
  let tour = [];
  let searchTour=[]
  if (props.tour === undefined || props.tourSearch===undefined) {
    tour = [];
    searchTour=[];
  } else {
    tour = [...props.tour];
    searchTour=[...props.tourSearch]
  }

  if (props.trigerTour===true) {
    return (
      <div className="result">
        {searchTour.map((item) => {
          return (
            <div className="result-li">
              <img alt="" src={cards[0].img} />
              <div className="description-tours">
                <h1 className="title-tours">{item.name}</h1>
                <div className="description">
                  <div>
                    {cards[0].stars.map((star) => {
                      return <img className="star" alt="" src={star} />;
                    })}
                  </div>
                  <span className="descrip_text">422 reviews</span>
                  <img alt="" className="descrip_text" src={cards[0].paint} />
                  <span className="descrip_text">{item.country}</span>
                </div>
                <sapn className="result-price">from {item.min_price}$ </sapn>
                <Link to="/tourspage">
                  <button className="more_details">more details</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="result">
        {tour.map((item) => {
          return (
            <div className="result-li">
              <img alt="" src={cards[0].img} />
              <div className="description-tours">
                <h1 className="title-tours">{item.name}</h1>
                <div className="description">
                  <div>
                    {cards[0].stars.map((star) => {
                      return <img className="star" alt="" src={star} />;
                    })}
                  </div>
                  <span className="descrip_text">422 reviews</span>
                  <img alt="" className="descrip_text" src={cards[0].paint} />
                  <span className="descrip_text">{item.country}</span>
                </div>
                <sapn className="result-price">from {item.min_price}$ </sapn>
                <Link to="/tourspage">
                  <button className="more_details">more details</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    tour: state.dataHome.homeData.Tour.filter((item) =>
      item.country.includes(state.countBest.count)//.includes(state.dataActivity.activity)
    ),
    trigerTour: state.trigerSearch.trigerSearch,
    tourSearch:state.tourSearch.tourSearch
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultCard);
