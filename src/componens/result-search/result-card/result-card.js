import React, { useEffect } from "react";
import "./result-card.css";
import imgCard from "./img/Frame 42.png";
import star1 from "./img/Star 6.png";
import star2 from "./img/Star 6 (1).png";
import mapPaint from "./img/map-pin.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { searchTrigerFalse } from "../../../actions/tourSearch";
import { detailsTour } from "../../../actions/detailsTour";
import smail from "./img/smile.png"
import ReactStars from 'react-stars'
import noImage from "./img/no image 2.png"

const ResultCard = (props) => {
  useEffect(() => {
    //props.triger();
  }, []);
  const cards = [
    {
      id:1,
      img: imgCard,
      stars: [
        {
          id:1,
          img:star1
        },
        {
          id:2,
          img:star1
        },
        {
          id:3,
          img:star1
        },
        {
          id:4,
          img:star1
        },
        {
          id:5,
          img:star2
        },
      ],
      paint: mapPaint,
    },
    {
      id:1,
      img: imgCard,
      stars: [star1, star1, star1, star1, star2],
      paint: mapPaint,
    },
    {
      id:1,
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
  let searchTour = [];
  let tourActivity = [];
  let filterTour1 = [];
  if (
    props.tour === undefined ||
    props.tourSearch === undefined ||
    props.tourActivity === undefined ||
    props.tourFilter === undefined
  ) {
    tour = [];
    searchTour = [];
    tourActivity = [];
    filterTour1 = [];
  } else {
    tour = [...props.tour];
    searchTour = [...props.tourSearch];
    tourActivity = [...props.tourActivity];
    filterTour1 = [...props.tourFilter];
    console.log(searchTour);
  }
  const clickDetailsContact = (id) => {
    props.detailsTour(id);
  };
  console.log(searchTour);
  if (props.trigerTour === true) {
    return (
      <div className="result">
        {searchTour.map((item) => {
          return (
            <div className="result-li" key={item.id}>
              <img alt="img" className="image-card" src={item.main_image ? item.main_image :noImage} />
              <div className="description-tours">
                <h1 className="title-tours">{item.name}</h1>
                <div className="description">
                  <div>
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
                  <span className="descrip_text">{item.avg_rate_tour[0].count_of_voices} reviews</span>
                  <img alt="" className="descrip_text" src={cards[0].paint} />
                  <span className="descrip_text">{item.country}</span>
                </div>
                <span className="result-price">from {item.min_price}$ </span>
                <Link to="/tourspage">
                  <button
                    onClick={() => clickDetailsContact(item.id)}
                    className="more_details"
                  >
                    more details
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  if (props.trigerBest === true) {
    return (
      <div className="result">
        {tour.map((item) => {
          return (
            <div className="result-li" key={item.id}>
              <img alt="img" className="image-card" src={item.main_image ?`http://161.35.199.172${item.main_image}` :noImage} />
              <div className="description-tours">
                <h1 className="title-tours">{item.name}</h1>
                <div className="description">
                  <div>
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
                  <span className="descrip_text">{item.avg_rate_tour[0].count_of_voices} reviews</span>
                  <img alt="" className="descrip_text" src={cards[0].paint} />
                  <span className="descrip_text">{item.country}</span>
                </div>
                <span className="result-price">from {item.min_price}$ </span>
                <Link to="/tourspage">
                  <button
                    onClick={() => clickDetailsContact(item.id)}
                    className="more_details"
                  >
                    more details
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  if (props.trigerFilter === true) {
    if (props.spiner === true) {
      return (
        <div className="result">
          <div className="d-flex justify-content-center filter-spiner">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      );
    }
    if (filterTour1.length === 0) {
      return (
        <div className="result">
          <img alt="" className="smail" src={smail}/>
          <span className="text-err">Sorry for these parameters, there are no tours</span>
        </div>
      );
    } else {
      return (
        <div className="result">
          {filterTour1.map((item) => {
            return (
              <div className="result-li" key={item.id}>
                <img alt="img" className="image-card" src={item.main_image ? item.main_image :noImage} />
                <div className="description-tours">
                  <h1 className="title-tours">{item.name}</h1>
                  <div className="description">
                    <div>
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
                    <span className="descrip_text">{item.avg_rate_tour[0].count_of_voices} reviews</span>
                    <img alt="" className="descrip_text" src={cards[0].paint} />
                    <span className="descrip_text">{item.country}</span>
                  </div>
                  <span className="result-price">from {item.min_price}$ </span>
                  <Link to="/tourspage">
                    <button
                      onClick={() => clickDetailsContact(item.id)}
                      className="more_details"
                    >
                      more details
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      );
    }
  }

  if (props.trigerActiv === true) {
    return (
      <div className="result">
        {tourActivity.map((item) => {
          return (
            <div className="result-li" key={item.id}>
             <img alt="img" className="image-card" src={item.main_image ?`http://161.35.199.172${item.main_image}` :noImage} />
              <div className="description-tours">
                <h1 className="title-tours">{item.name}</h1>
                <div className="description">
                  <div>
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
                  <span className="descrip_text">{item.avg_rate_tour[0].count_of_voices} reviews</span>
                  <img alt="" className="descrip_text" src={cards[0].paint} />
                  <span className="descrip_text">{item.country}</span>
                </div>
                <span className="result-price">from {item.min_price}$ </span>
                <Link to="/tourspage">
                  <button
                    onClick={() => clickDetailsContact(item.id)}
                    className="more_details"
                  >
                    more details
                  </button>
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
    tour: state.allTour.allTour.filter(
      (item) => item.country.includes(state.countBest.count) //.includes(state.dataActivity.activity)
    ),
    trigerTour: state.trigerSearch.trigerSearch,
    tourSearch: state.tourSearch.tourSearch,
    tourActivity: state.allTour.allTour.filter((items) =>
      items.Category.name.includes(state.dataActivity.activity)
    ),
    trigerBest: state.trigerBest.trigerBest,
    trigerActiv: state.trigerActivity.trigerActivity,
    tourFilter: state.filterTour.filterTour,
    trigerFilter: state.trigerFilter.trigerFilter,
    spiner: state.Spiner.spiner,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    detailsTour: (id) => dispatch(detailsTour(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultCard);
