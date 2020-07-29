import React,{useEffect} from "react";
import "./search.css";
import search from "./img/search.png";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {tourSearch} from "../../../../actions/tourSearch"
import {ofBestCount} from "../../../../actions/ResultSearchCount"
import {trigerActivytyOff} from "../../../../actions/dataActivity"


 function Search(props) {
  let top100Films = []
  //let top100Films = []
  let count=[]
  let name=[]
  let history = useHistory();

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

    if(e.key ==='Enter'){
      console.log(e.target.value)
      history.push("/result_search");
      props.getTourSearch(`http://161.35.199.172/api/tour-search/?search=${e.target.value}`);
      props.ofBestCount()
      props.trigerActivity()
    }
  }
  return (
    <div style={{ width: 800 }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        onKeyPress={inputOnChenge}
        options={top100Films .map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Search tours"
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
    ofBestCount:()=> dispatch(ofBestCount()),
    trigerActivity:()=>dispatch(trigerActivytyOff())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);