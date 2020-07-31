import axios from "axios";

export function homeAxiosDataSeccess(data){
    return{
        type:"DATA_HOME",
        data,

    }
}

export function homeAxiosData(url){
    return async (dispatch)=>{
      await  axios
      .get(url)
      .then(res => {
        dispatch(homeAxiosDataSeccess(res.data.results))
      });

}
}