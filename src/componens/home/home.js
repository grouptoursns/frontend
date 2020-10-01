import React,{useEffect} from "react";
import Slider1 from "./slider/slider.js";
import BoxCard from "./best-destinations/box-card/box-card.js";
import Actvities from "./actvities/actvities.js";
import BestTours from "./best-tours/best-tours.js"
import { connect } from "react-redux";
import {homeAxiosData} from "../../actions/dataHome";
import {allTour}from "../../actions/allTour"
import {trigerFilterOff} from "../../actions/trigerFilter";
import {destinationsData} from "../../actions/destinations";
import {trigerSpiner} from "../../actions/user";
import NavBar from "../home/navBar/navBar";
import Footer from "../home/footer/footer"
import GroupTours from "./group-tours/group-tours"



const Home = (props) => {

  useEffect( () => {

    props.trigerFilterOff()
    props.AxiosData('http://admin.tripsaround.me/main-page');
    props.AllTours('http://admin.tripsaround.me/api/tours/');
    props.destinationsData('http://admin.tripsaround.me/api/test/')
    props.trigerSpin()
  
  },[]);
  return (
    <div>
      <NavBar/>
      <Slider1 />
      <BoxCard cards={props.bestImg.ImageToFront} />
      <BestTours card={props.bestImg.Tour}/>
      <Actvities activityCard={props.bestImg.Category}/>
      <Footer/>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    bestImg:state.dataHome.homeData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    AxiosData: (url) => dispatch(homeAxiosData(url)),
    AllTours:(url)=>dispatch(allTour(url)),
    trigerFilterOff:()=>dispatch(trigerFilterOff()),
    destinationsData: (url) => dispatch(destinationsData(url)),
    trigerSpin:()=>dispatch(trigerSpiner())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
