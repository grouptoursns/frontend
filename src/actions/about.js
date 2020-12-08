import axios from "axios";

export function seccess(data){
    return{
        type:"DATA_ABOUT",
        data,

    }
}
const lang = localStorage.getItem('language')


export function getAbout(){
    return async (dispatch)=>{
      await  axios
      .get("http://admin.tripsaround.me/about-us-links-contacts/",{
          headers:{
              "Accept-Language": lang
          }
      })
      .then(res => {
        dispatch(seccess(res.data.results))
      });

}
}