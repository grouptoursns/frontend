import React from "react";
import "./result-card.css";
import imgCard from "./img/Freme 42.png";
import star1 from "./img/Star 6.png";
import star2 from "./img/Star 6 (1).png";
import mapPaint from "./img/map-pin.png";

const ResultCard = () => {
  const cards =[
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
  ]

  return(
<div>
    (
        {
            cards.map(item=>{
                return(
                    <div className="content">
                        
                    </div>
                )
            })
        }
    )
</div>
  )
};
export default ResultCard;
