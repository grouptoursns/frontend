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
import {Link} from "react-router-dom"

const Destinations = () => {
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
  return (
    <div className="container p1">
      <div className="destion-title">
        <span>Destinations</span>
      </div>
      <div className="destion-cards">
        {pictures.map((item) => {
          return (
            <Link to="/result_search">
              <div className="cards" key={item.id}>
                <img className="img" src={item.img} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Destinations;
