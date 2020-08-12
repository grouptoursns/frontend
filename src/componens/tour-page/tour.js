import React from "react";
import Form from "./tour-form/form.js";
import Booking from "./booking/booking.js";
import Info from "./info/info.js";
import "./tour.css";
import { connect } from "react-redux";
import { homeAxiosData } from "../../actions/dataHome";
import { allTour } from "../../actions/allTour";
import { trigerFilterOff } from "../../actions/trigerFilter";

import { tourDataFetch } from "../../actions/tourData";
import NavBar from "../home/navBar/navBar";
import Footer from "../home/footer/footer";

const Tour = (props) => {
  return (
    <div>
      <NavBar />
      <div className="tour-page">
        <Form />
        <Booking />
        <Info />
      </div>
      <Footer />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    tourData: state.tourData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => {
      dispatch(tourDataFetch(url));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tour);
