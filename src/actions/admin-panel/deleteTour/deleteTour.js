import axios from "axios";

export function deleteTourAdmin(id){
    let token = localStorage.getItem('token');
    return async (dispatch)=>{
      await  axios
      .delete(`http://admin.tripsaround.me/api/company/tours/${id}/`,{
          headers:{
            Authorization: 'Token ' + token 
          }
      })
      .then(res => {
         
          console.log(res.data)
      });

}
}