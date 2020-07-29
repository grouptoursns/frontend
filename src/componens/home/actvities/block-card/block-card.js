import React from "react";
import "./block-card.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { searchTrigerFalse } from "../../../../actions/tourSearch";
import { pushActivity } from "../../../../actions/dataActivity";

const BlockCardActv = (props) => {
  let card = [];
  if (props.card === undefined) {
    card = [];
  } else {
    card = [...props.card];
  }
  const onClickCard = (item) => {
    props.pushActivity(item);
  };
  return (
    <div className="cards1">
      {card.map((item) => {
        return (
          <Link to="/result_search">
            <div className="active-card" onClick={() => onClickCard(item.name)}>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlockCardActv);
