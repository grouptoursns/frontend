import React from "react";
import "./history.css";
import images from "./img/44240014405_58ce5bce45_h.png";

const History = () => {
  return (
    <div className="history">
      <div className="histore-title">
        <span className="history-titl">Our history</span>
        <div className="line-history"></div>
      </div>
      <div className="block-content hist">
        <img alt="img" src={images} />
        <div className="block-history-text">
          <span className="lorem">Lorem ipsum dolor sit amet</span>
          <div className="history-desc">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit ess
              <br />
              <br /> E cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </span>
          </div>
        </div>
      </div>
      <div className="block-content block-buttom-history">
        <div className="block-history-text">
          <span className="lorem">Lorem ipsum dolor sit amet</span>
          <div className="history-desc">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit ess
              <br />
              <br /> E cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </span>
          </div>
        </div>
        <img alt="img" src={images} />
      </div>
    </div>
  );
};
export default History;
