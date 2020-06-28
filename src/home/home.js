import React from "react";
import NavBar from "./navBar/navBar.js";
import Slider1 from "./slider/slider.js";
import GroupTours from "./group-tours/group-tours.js";
import BoxCard from "./best-destinations/box-card/box-card.js";
import Footer from "./footer/footer.js";
import Actvities from "./actvities/actvities.js";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Slider1 />
      <BoxCard />
      <GroupTours />
      <Actvities />
      <Footer />
    </div>
  );
};

export default Home;
