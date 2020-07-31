import axios from "axios";

export function seccessdestinationData(data){
    return{
        type:"DATA_ DESTINATION",
        data,

    }
}

export function destinationsData(url){
    return async (dispatch)=>{
      await  axios
      .get(url)
      .then(res => {
        dispatch(seccessdestinationData(res.data.results))
      });

}
}