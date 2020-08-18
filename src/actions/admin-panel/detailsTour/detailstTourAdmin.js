

import axios from "axios";

export function seccessgetToursAdmin(data){
    return{
        type:"DATA_ ADMIN_TOURS",
        data,

    }
}

export function detailsTourAdmin(id){
    let token = localStorage.getItem('token');
    return async (dispatch)=>{
      await  axios
      .get(`http://161.35.199.172/api/company/tours/${id}/`,{
          headers:{
            Authorization: 'Token ' + token 
          }
      })
      .then(res => {
   
          console.log(res.data)
      });

}
}