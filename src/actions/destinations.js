import axios from "axios";

export function seccessdestinationData(data){
    return{
        type:"DATA_ DESTINATION",
        data,

    }
}
const lang = localStorage.getItem('language')

export function destinationsData(url){
    return async (dispatch)=>{
      await  axios
      .get(url,{
          headers:{
              "Accept-Language": lang
          }
      })
      .then(res => {
        dispatch(seccessdestinationData(res.data.results))
      });

}
}