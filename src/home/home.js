import React from "react";
import NavBar from "./navBar/navBar.js";
import Slider1 from "./slider/slider.js";
import GroupTours from "./group-tours/group-tours.js";
import BoxCard from "./best-destinations/box-card/box-card.js";
import Footer from "./footer/footer.js"

const Home = () => {
  return (
    <div>
      <NavBar />
      <Slider1 />
      <GroupTours />
      <BoxCard/>
      <Footer/>
    </div>
  );
};

export default Home;
