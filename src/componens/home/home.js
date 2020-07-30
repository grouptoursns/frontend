import React,{useEffect,useState} from "react";
import Slider1 from "./slider/slider.js";
import GroupTours from "./group-tours/group-tours.js";
import BoxCard from "./best-destinations/box-card/box-card.js";
import Actvities from "./actvities/actvities.js";
import BestTours from "./best-tours/best-tours.js"
import { connect } from "react-redux";
import {homeAxiosData} from "../../actions/dataHome";
import{allTour}from "../../actions/allTour"
import {trigerFilterOff} from "../../actions/trigerFilter"

const Home = (props) => {
  const [best,setBest]=useState({hist:[]});
  useEffect( () => {

    props.trigerFilterOff()
    props.AxiosData('http://161.35.199.172/main-page');
    props.AllTours(' http://161.35.199.172/api/tours/');
  
  },[]);
  return (
    <div>
      <Slider1 />
      <BoxCard cards={props.bestImg.ImageToFront} />
      <BestTours card={props.bestImg.Tour}/>
      <Actvities activityCard={props.bestImg.Category}/>
      <GroupTours />
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
    trigerFilterOff:()=>dispatch(trigerFilterOff())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
