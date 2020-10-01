import React,{useState} from "react";
import "./search.css";
import search from "./img/search.png";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {tourSearch} from "../../../../actions/tourSearch"
import {trigerBestOff} from "../../../../actions/trigerBest"
import {trigerActivityOff} from "../../../../actions/trigerActivity"
import {searchTrigerTrue} from "../../../../actions/tourSearch"
import {useTranslation} from "react-i18next";

 function Search(props) {
     const {t} = useTranslation()

     let top100Films = []
  //let top100Films = []
  let count=[]
  let name=[]
  let history = useHistory();
const [isOpen,setIsOpen]=useState(false)
if(props.tour.Tour=== undefined){
  top100Films =[]
}
else{
  count=props.tour.TourCountry.map((item)=>{
    return{
     title:item.country,
    }
  });
  name =props.tour.Tour.map((item)=>{
    return{
     title:item.name,
    }
  });
}
top100Films=[...name,...count];
  const inputOnChenge=(e)=>{
    
    if(e.target.value == ''){
      setIsOpen(false)
    }
    else{
      setIsOpen(true)
    }
    console.log(e.target.value)
    if(e.key ==='Enter'){
      console.log(e.target.value)
      history.push("/result_search");
      props.getTourSearch(`http://161.35.199.172:7000/api/tour-search/?search=${e.target.value}`);
      props.ofBestCount()
      props.trigerActiv()
      props.trigerSearchOn()
    }
  }

  return (
    <div className="serach-slider">
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
 
        onKeyPress={inputOnChenge}
        options={top100Films .map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={t("search")}
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tour:state.dataHome.homeData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTourSearch:(url)=>dispatch(tourSearch(url)),
    ofBestCount:()=> dispatch(trigerBestOff()),
    trigerActiv:()=>dispatch(trigerActivityOff()),
    trigerSearchOn:()=>dispatch(searchTrigerTrue()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);