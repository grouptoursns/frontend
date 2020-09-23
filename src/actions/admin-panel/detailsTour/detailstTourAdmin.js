

import axios from "axios";

export function seccessgetToursAdmin(data){
    return{
        type:"DATA_ ADMIN_TOUR",
        data,

    }
}

export function closePortal(){
    return{
        type:"CLOSE_PORTAL_ADMIN",

    }
}

export function detailsTourAdmin(id){
    let token = localStorage.getItem('token');
    return async (dispatch)=>{
      await  axios
      .get(`http://161.35.199.172:7000/api/company/tours/${id}/`,{
          headers:{
            Authorization: 'Token ' + token 
          }
      })
      .then(res => {
   
          dispatch(seccessgetToursAdmin(res.data))
          console.log(res.data)
      });

}
}