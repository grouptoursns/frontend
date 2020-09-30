import axios from "axios";

export function homeAxiosDataSeccess(data){
    return{
        type:"DATA_HOME",
        data,

    }
}

const lang = localStorage.getItem('language')

export function homeAxiosData(url){
    return async (dispatch)=>{
      await  axios
      .get(url,{
          headers:{
              "Accept-Language": lang
          }
      })
      .then(res => {
        dispatch(homeAxiosDataSeccess(res.data.results))
      });

}
}