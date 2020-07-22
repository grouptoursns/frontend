import React,{useState} from "react";
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

const BoxCard = () => {
  const pictures=[
    { id:1, img:card1},
    { id:2, img:card2},
    { id:3, img:card3},
    { id:4, img:card4},
    { id:5, img:card5},
    { id:6, img:card6},
    { id:7, img:card7},
    { id:8, img:card8}
  ]

  return (
    <div className="box-card">
      <Title />
      <div className="container flex-box">
        {
          pictures.map(item=>{
            return(
              <div className="cards" key={item.id}>
              <img className="img" src={item.img} />
            </div>
            )
          })
        }
        
      </div>
    </div>
  );
};
export default BoxCard;
