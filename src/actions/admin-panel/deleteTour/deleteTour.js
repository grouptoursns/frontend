import axios from "axios";

export function deleteTourAdmin(id){
    let token = localStorage.getItem('token');
    return async (dispatch)=>{
      await  axios
      .delete(`http://161.35.199.172:7000/api/company/tours/${id}/`,{
          headers:{
            Authorization: 'Token ' + token 
          }
      })
      .then(res => {
         
          console.log(res.data)
      });

}
}