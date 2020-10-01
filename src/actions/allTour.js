import axios from "axios";

export function allTourSeccess(data){
    return{
        type:"ALL_TOUR",
        data,

    }
}
const lang = localStorage.getItem('language')


export function allTour(url){
    return async (dispatch)=>{
      await  axios
      .get(url,{
          headers:{
              "Accept-Language": lang
          }
      })
      .then(res => {
        dispatch(allTourSeccess(res.data))
      });

}
}