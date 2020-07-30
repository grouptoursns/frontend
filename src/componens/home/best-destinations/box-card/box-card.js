import React, { useState } from "react";
import "./box-card.css";
import Title from "../title/title.js";
import card1 from "../img/CARD_DESTINATON.png";
import card2 from "../img/CARD_DESTINATON(1).png";
import card3 from "../img/CARD_DESTINATON(2).png";
import card4 from "../img/CARD_DESTINATON(3).png";
import card5 from "../img/CARD_DESTINATON(4).png";
import card6 from "../img/CARD_DESTINATON(5).png";
import card7 from "../img/CARD_DESTINATON(6).png";
import card8 from "../img/CARD_DESTINATON(7).png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {ResultSearchCount} from "../../../../actions/ResultSearchCount";
import {searchTrigerFalse} from "../../../../actions/tourSearch";
import {trigerActivityOff} from "../../../../actions/trigerActivity"
import {trigerBestOn} from "../../../../actions/trigerBest";


const BoxCard = (props) => {
  const pictures = [
    { id: 1, img: card1 },
    { id: 2, img: card2 },
    { id: 3, img: card3 },
    { id: 4, img: card4 },
    { id: 5, img: card5 },
    { id: 6, img: card6 },
    { id: 7, img: card7 },
    { id: 8, img: card8 },
  ];
  let card = [];
  if (props.count === undefined) {
    card = [];
  } else {
    card = [...props.count];
  }
  console.log(props.count)
  const onClickCard=(item)=>{
    props.triger()   
    props.trigerActivity()
    props.trigerBest()
    props.pushCount(item)

  }
  return (
    <div className="box-card">
      <Title />
      <div className="container flex-box">
        {card.map((item) => {
          return (
            <Link to="/result_search">
              <div className="cards" key=""  onClick={()=>onClickCard(item.country)}>
              <img className="img" src={item.country_image} />
                <sapn  className="card-text">{item.country}</sapn>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
   count:state.dataHome.homeData.TourCountry
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    pushCount: (city) => dispatch(ResultSearchCount(city)),
    triger: () => dispatch(searchTrigerFalse()),
    trigerActivity:()=>dispatch(trigerActivityOff()),
    trigerBest:()=>dispatch(trigerBestOn())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoxCard);
    

