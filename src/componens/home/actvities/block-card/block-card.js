import React from "react";
import "./block-card.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { searchTrigerFalse } from "../../../../actions/tourSearch";
import { pushActivity } from "../../../../actions/dataActivity";
import {trigerBestOff} from "../../../../actions/trigerBest"
import {trigerActivityOn} from "../../../../actions/trigerActivity"

const BlockCardActv = (props) => {
  let card = [];
  if (props.card === undefined) {
    card = [];
  } else {
    card = [...props.card];
  }
  const onClickCard = (item) => {
    props.triger()
    props.trigerBest()
    props.trigerActivOn()
    props.pushActivity(item);
  };
  console.log(card)
  return (
    <div className="cards1">
      {card.map((item) => {
        return (
          <Link to="/result_search" key={item.id} onClick={() => onClickCard(item.name)}>
            <div className="active-card"   >
              <img key={item.name} className="img_act" src={item.image} />
              <span className="card-text-activity">{item.name}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    pushActivity: (activity) => dispatch(pushActivity(activity)),
    triger: () => dispatch(searchTrigerFalse()),
    trigerBest:()=>dispatch(trigerBestOff()),
    trigerActivOn:()=>dispatch(trigerActivityOn()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlockCardActv);
