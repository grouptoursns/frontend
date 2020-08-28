import React from "react";
import "./activity.css";

import card1 from "../home/actvities/block-card/img/Rectangle 1.png";
import card2 from "../home/actvities/block-card/img/Rectangle 2.png";
import card3 from "../home/actvities/block-card/img/Rectangle 3.png";
import card4 from "../home/actvities/block-card/img/Rectangle 4.png";
import card5 from "../home/actvities/block-card/img/Rectangle 5.png";
import card6 from "../home/actvities/block-card/img/Rectangle 6.png";
import card7 from "../home/actvities/block-card/img/Rectangle 7.png";
import card8 from "../home/actvities/block-card/img/Rectangle 8.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { searchTrigerFalse } from "../../actions/tourSearch";
import { trigerActivityOn } from "../../actions/trigerActivity";
import { trigerBestOff } from "../../actions/trigerBest";
import { pushActivity } from "../../actions/dataActivity";
import NavBar from "../home/navBar/navBar";
import Footer from "../home/footer/footer";

const Activity = (props) => {
  const pictures = [
    { id: 1, img: card1 },
    { id: 2, img: card2 },
    { id: 3, img: card3 },
    { id: 4, img: card4 },
    { id: 5, img: card5 },
    { id: 6, img: card6 },
    { id: 7, img: card7 },
    { id: 8, img: card8 },
    { id: 9, img: card1 },
    { id: 10, img: card2 },
    { id: 11, img: card3 },
    { id: 12, img: card4 },
    { id: 13, img: card5 },
    { id: 14, img: card6 },
    { id: 15, img: card7 },
  ];
  let card = [];
  if (props.allCards === undefined) {
    card = [];
  } else {
    card = [...props.allCards];
  }
  const onClickCard = (item) => {
    props.triger();
    props.trigerActivity();
    props.trigerBest();
    props.pushActivity(item);
  };
  return (
    <div>
      <NavBar />
      <div className="container p1">
        <div className="destion-title">
          <span>Activities</span>
        </div>
        <div className="destion-cards">
          {card.map((item) => {
            return (
              <Link
                to="/result_search"
                key={item.id}
                onClick={() => onClickCard(item.name)}
              >
                <div className="active-card">
                  <img key={item.name} className="img_act" src={item.image} />
                  <span className="card-text-activity">{item.name}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    allCards: state.allDestinations.allDestinations.Category,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    pushActivity: (activity) => dispatch(pushActivity(activity)),
    triger: () => dispatch(searchTrigerFalse()),
    trigerActivity: () => dispatch(trigerActivityOn()),
    trigerBest: () => dispatch(trigerBestOff()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Activity);
