import React from "react";
import "./title.css";
import next from "./img/Vector(1).png";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <div className="title1">
      <span className="span1">Actvities</span>
      <Link to="/activity">
        <span className="span2">
          All activities{" "}
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.74735 1.31307L5.24574 0.816645C5.45678 0.606447 5.79802 0.606447 6.00681 0.816645L10.3711 5.16148C10.5822 5.37168 10.5822 5.71157 10.3711 5.91954L6.00681 10.2666C5.79577 10.4768 5.45453 10.4768 5.24574 10.2666L4.74735 9.77018C4.53407 9.55775 4.53856 9.21115 4.75633 9.00318L7.46158 6.43609H1.00939C0.710798 6.43609 0.470581 6.19682 0.470581 5.89941V5.18384C0.470581 4.88644 0.710798 4.64717 1.00939 4.64717H7.46158L4.75633 2.08007C4.53632 1.87211 4.53183 1.5255 4.74735 1.31307Z"
              fill="black"
            />
          </svg>
        </span>
      </Link>
    </div>
  );
};
export default Title;
