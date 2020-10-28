import React,{useState} from "react";
import "./country.css";
import { Dropdown } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { connect } from "react-redux";
import {useTranslation} from "react-i18next";


const DropdownCountry = (props) => {
  const {t} = useTranslation()

  let country=[]
if(props.allCountry=== undefined){
  country =[]
}
else{
  country=props.allCountry.map((item)=>{
    return{
      key:item.id,
      value:item.country,
      flag:item.country,
     text:item.country,
    }
  });
  
}

  const [value,setValue]= useState(props.country)
  if(props.country!=""){

  }

  return (
    <Dropdown
      placeholder={t("result.chooseC")}
      fluid
      search
      selection
      options={country}
      onChange={(e) => props.countryProps(e.target.textContent)}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    country: state.countBest.count,
    tourCountry:state.dataHome.homeData.Tour.map((item)=>item.country),
    allCountry:state.dataHome.homeData.TourCountry
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DropdownCountry);
