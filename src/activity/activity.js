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

const Activity = () => {
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

  return (
    <div className="container p1">
      <div className="destion-title">
        <span>Activities</span>
      </div>
      <div className="destion-cards">
       
               {pictures.map((item) => {
                return <img key={item.id} className="img_act" src={item.img} />;
              })}
       
      </div>
    </div>
  );
};
export default Activity;
