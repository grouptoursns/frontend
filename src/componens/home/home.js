import React from "react";
import Slider1 from "./slider/slider.js";
import GroupTours from "./group-tours/group-tours.js";
import BoxCard from "./best-destinations/box-card/box-card.js";
import Actvities from "./actvities/actvities.js";
import BestTours from "./best-tours/best-tours.js"

const Home = () => {
  return (
    <div>
      <Slider1 />
      <BoxCard />
      <BestTours/>
      <Actvities />
      <GroupTours />
    </div>
  );
};

export default Home;
