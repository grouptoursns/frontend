import React,{useState} from "react";
import "./country.css";
import { Dropdown } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { connect } from "react-redux";
const countryOptions = [
  { key: "af", value: "af", flag: "af", text: "Afghanistan" },
  { key: "ax", value: "ax", flag: "ax", text: "Aland Islands" },
  { key: "al", value: "al", flag: "al", text: "Albania" },
  { key: "dz", value: "dz", flag: "dz", text: "Algeria" },
  { key: "as", value: "as", flag: "as", text: "American Samoa" },
  { key: "ad", value: "ad", flag: "ad", text: "Andorra" },
  { key: "ao", value: "ao", flag: "ao", text: "Angola" },
  { key: "ai", value: "ai", flag: "ai", text: "Anguilla" },
  { key: "ag", value: "ag", flag: "ag", text: "Antigua" },
  { key: "ar", value: "ar", flag: "ar", text: "Argentina" },
  { key: "am", value: "am", flag: "am", text: "Armenia" },
  { key: "aw", value: "aw", flag: "aw", text: "Aruba" },
  { key: "au", value: "au", flag: "au", text: "Australia" },
  { key: "at", value: "at", flag: "at", text: "Austria" },
  { key: "az", value: "az", flag: "az", text: "Azerbaijan" },
  { key: "bs", value: "bs", flag: "bs", text: "Bahamas" },
  { key: "bh", value: "bh", flag: "bh", text: "Bahrain" },
  { key: "bd", value: "bd", flag: "bd", text: "Bangladesh" },
  { key: "bb", value: "bb", flag: "bb", text: "Barbados" },
  { key: "by", value: "by", flag: "by", text: "Belarus" },
  { key: "be", value: "be", flag: "be", text: "Belgium" },
  { key: "bz", value: "bz", flag: "bz", text: "Belize" },
  { key: "bj", value: "bj", flag: "bj", text: "Benin" },
  { key: "jue", value: "htr", flag: "thr", text: "China" },
  { key: "jue", value: "htr", flag: "thr", text: "vdfbfn" },
];

const DropdownCountry = (props) => {

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
      placeholder="Сhoose a country"
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
