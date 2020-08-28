import axios from "axios";
import { func } from "prop-types";

export function searchTour(data){
    return{
        type:"SEARCH_TOUR",
        data,

    }
}

export function searchTrigerTrue(){
    return{
        type:"TRIGER_TRUE",
    }
}

export function searchTrigerFalse(){
    return{
        type:"TRIGER_FALSE"
    }
}

export function tourSearch(url){
    return async (dispatch)=>{
        dispatch( searchTrigerTrue());
      await  axios
      .get(url)
      .then(res => {
        dispatch(searchTour(res.data.results))
    console.log(res.data)
      });

}
}