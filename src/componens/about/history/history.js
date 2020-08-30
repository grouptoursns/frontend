import React from "react";
import "./history.css";
import images from "./img/44240014405_58ce5bce45_h.png";
import img1 from './img/llw2.jpg'
import img2 from './img/selfie.jpg'

const History = () => {
  return (
    <div className="history">
      <div className="histore-title">
        <span className="history-titl">Our history</span>
        <div className="line-history"></div>
      </div>
      <div className="block-content hist">
        <img alt="img" style={{"padding": "20px"}} src={img1} />
        <div className="block-history-text">
          <span className="lorem">TripsAroundMe`s history</span>
          <div style={{"padding": "20px"}} className="history-desc">
            <span>
              TripsAroundMe was created to help travelers get the best from destinations
              by providing a great choice of local tours.
              Wherever your travels take you, we’ll show you the unique and unmissable
              things to do in your destination. TripsAroundMe can help you easily
              join likeminded people in group trips or book a private tour.
              <br />
              {/*<br /> E cillum dolore eu fugiat nulla pariatur. Excepteur sint*/}
              {/*occaecat cupidatat non proident, sunt in culpa qui officia*/}
              {/*deserunt mollit anim id est laborum.*/}
            </span>
          </div>
        </div>
      </div>
      <div className="block-content block-buttom-history">
        <div className="block-history-text">
          <span className="lorem">Lorem ipsum dolor sit amet</span>
          <div style={{"padding": "20px"}} className="history-desc">
            <span>
              We believe that there is a world of unique travel
              experiences out there that most people don't know about.
              Hundreds of small tour operators around the globe are offering unique trips
              and accommodations that we want to make searchable in a single place.
              We're changing the way people connect to the places they visit.
              You’ll find activities for all ages and interests on TripsAroundMe.
              <br />
              <br /> E cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </span>
          </div>
        </div>
        <img alt="img" style={{"width": "600px", "padding": "20px" }} src={img2} />
      </div>
    </div>
  );
};
export default History;
