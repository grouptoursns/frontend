import React from "react";
import "./block-card.css";

import card1 from "./img/Rectangle 1.png";
import card2 from "./img/Rectangle 2.png";
import card3 from "./img/Rectangle 3.png";
import card4 from "./img/Rectangle 4.png";
import card5 from "./img/Rectangle 5.png";
import card6 from "./img/Rectangle 6.png";
import card7 from "./img/Rectangle 7.png";
import card8 from "./img/Rectangle 8.png";

const BlockCardActv = () => {
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

  return (
    <div className="cards1">
      {pictures.map((item) => {
        return <img key={item.id} className="img_act" src={item.img} />;
      })}
    </div>
  );
};
export default BlockCardActv;
