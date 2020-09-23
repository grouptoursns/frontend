import axios from "axios";

export function dataGroup(data){
    return{
        type:"DATA_ ADMIN_GROUP_DETAILS",
        data,

    }
}

export function trigerModalExitOn(){
    return{
        type:"MODAL_EDIT_ON",
    }
}
export function trigerModalExitOff(){
    return{
        type:"MODAL_EDIT_OFF",
    }
}


export function detailGroup(id_tour,id_group){
    let token = localStorage.getItem('token');
   
    return async (dispatch)=>{
      await  axios
      .get(`http://161.35.199.172:7000/api/company/tours/22/group/40/`,{
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