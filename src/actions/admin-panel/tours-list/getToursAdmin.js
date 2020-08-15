import axios from "axios";

export function seccessgetToursAdmin(data){
    return{
        type:"DATA_ ADMIN_TOURS",
        data,

    }
}

export function getToursAdmin(url){
    let token = localStorage.getItem('token');
    return async (dispatch)=>{
      await  axios
      .get(url,{
          headers:{
            Authorization: 'Token ' + token 
          }
      })
      .then(res => {
          dispatch(seccessgetToursAdmin(res.data))
      });

}
}