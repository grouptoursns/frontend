import React from "react";
import "./box-card.css";
import Title from "../title/title.js";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {ResultSearchCount} from "../../../../actions/ResultSearchCount";
import {searchTrigerFalse} from "../../../../actions/tourSearch";
import {trigerActivityOff} from "../../../../actions/trigerActivity"
import {trigerBestOn} from "../../../../actions/trigerBest";


const BoxCard = (props) => {

  let card = [];
  if (props.count === undefined) {
    card = [];
  } else {
    card = [...props.count];
  }

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
            <Link to="/result_search" key={item.id}  onClick={()=>onClickCard(item.country)}>
              <div className="cards" >
              <img className="img" src={item.country_image} alt="img" />
                <span  className="card-text">{item.country}</span>
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
    

