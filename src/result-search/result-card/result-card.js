import React from "react";
import "./result-card.css";
import imgCard from "./img/Frame 42.png";
import star1 from "./img/Star 6.png";
import star2 from "./img/Star 6 (1).png";
import mapPaint from "./img/map-pin.png";

const ResultCard = () => {
  const cards = [
    {
      img: imgCard,
      stars: [star1, star1, star1, star1, star2],
      paint: mapPaint,
    },
    {
      img: imgCard,
      stars: [star1, star1, star1, star1, star2],
      paint: mapPaint,
    },
    {
        img: imgCard,
        stars: [star1, star1, star1, star1, star2],
        paint: mapPaint,
      },
          {
      img: imgCard,
      stars: [star1, star1, star1, star1, star2],
      paint: mapPaint,
    },
  ];

  return (
    <div className="result">
      {cards.map((item) => {
        return (
          <div className="result-li">
            <img alt="" src={item.img} />
            <div className="description-tours">
              <h1 className="title-tours">
                1 Day Burana-Kegety Gorge-Kol-Tor lake tripe
              </h1>
              <div className="description">
                  <div>
                            {
                    item.stars.map((star) => {
                    return <img className="star" alt="" src={star} />;
                    })
                }
                  </div>
                  <span className="descrip_text">422 reviews</span>
                  <img alt="" className="descrip_text" src={item.paint}/>
                  <span className="descrip_text">Kyrgyzstan, Bishkek</span>
              </div>
              <sapn className="price">from 200$ </sapn> 
               <button className="more_details">more details</button>
            </div>
          
          </div>
        );
      })}
    </div>
  );
};
export default ResultCard;
