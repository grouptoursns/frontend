import React from "react";
import "./destinations.css";
import card1 from "../home/best-destinations/img/CARD_DESTINATON.png";
import card2 from "../home/best-destinations/img/CARD_DESTINATON(1).png";
import card3 from "../home/best-destinations/img/CARD_DESTINATON(2).png";
import card4 from "../home/best-destinations/img/CARD_DESTINATON(3).png";
import card5 from "../home/best-destinations/img/CARD_DESTINATON(4).png";
import card6 from "../home/best-destinations/img/CARD_DESTINATON(5).png";
import card7 from "../home/best-destinations/img/CARD_DESTINATON(6).png";
import card8 from "../home/best-destinations/img/CARD_DESTINATON(7).png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ResultSearchCount } from "../../actions/ResultSearchCount";
import { searchTrigerFalse } from "../../actions/tourSearch";
import { trigerActivityOff } from "../../actions/trigerActivity";
import { trigerBestOn } from "../../actions/trigerBest";
import NavBar from "../home/navBar/navBar";
import Footer from "../home/footer/footer";
import {useTranslation} from "react-i18next";

const Destinations = (props) => {
  const {t} = useTranslation()

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
    props.pushCount(item);
  };
  return (
    <div>
      <NavBar />
      <div className="container p1">
        <div className="destion-title">
          <span>{t("navbar.destinations")}</span>
        </div>
        <div className="destion-cards">
          {card.map((item) => {
            return (
              <Link
                to="/result_search"
                key={item.id}
                onClick={() => onClickCard(item.country)}
              >
                <div className="cards">
                  <img className="img" src={item.country_image} alt="img" />
                  <span className="card-text">{item.country}</span>
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
    allCards: state.allDestinations.allDestinations.Tour,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    pushCount: (city) => dispatch(ResultSearchCount(city)),
    triger: () => dispatch(searchTrigerFalse()),
    trigerActivity: () => dispatch(trigerActivityOff()),
    trigerBest: () => dispatch(trigerBestOn()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Destinations);
