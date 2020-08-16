import axios from "axios";

export function deleteGroupAdmin(id_tour,id_group){
    let token = localStorage.getItem('token');
    return async (dispatch)=>{
      await  axios
      .delete(`http://161.35.199.172/api/company/tours/${id_tour}/group/${id_group}/`,{
          headers:{
            Authorization: 'Token ' + token 
          }
      })
      .then(res => {
         
          console.log(res.data)
      });

}
}