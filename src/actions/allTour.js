import axios from "axios";

export function allTourSeccess(data){
    return{
        type:"ALL_TOUR",
        data,

    }
}

export function allTour(url){
    return async (dispatch)=>{
      await  axios
      .get(url)
      .then(res => {
        dispatch(allTourSeccess(res.data))
    console.log(res.data)
      });

}
}