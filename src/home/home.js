import React from "react";
import NavBar from "./navBar/navBar.js";
import Slider1 from "./slider/slider.js";
import GroupTours from "./group-tours/group-tours.js";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Slider1 />
      <GroupTours />
    </div>
  );
};

export default Home;
