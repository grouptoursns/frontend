import axios from "axios";

export function dataGroup(data){
    return{
        type:"DATA_ ADMIN_GROUP_DETAILS",
        data,

    }
}



export function detailGroup(id_tour,id_group){
    let token = localStorage.getItem('token');
   
    return async (dispatch)=>{
      await  axios
      .get(`http://161.35.199.172/api/company/tours/${id_tour}/group/${id_group}/`,{
          headers:{
            Authorization: 'Token ' + token 
          }
      })
      .then(res => {
          dispatch(dataGroup(res.data))
    
          console.log(res.data)
      });

}
}