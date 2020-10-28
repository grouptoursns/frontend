import axios from "axios";

export function custimerCabinetSeccess(data){
    return{
        type:"CUSTIMER_CABINET",
        data,

    }
}

export function custimerCabinet(){

    let token = localStorage.getItem('token');
    let id = localStorage.getItem('id');
    return async (dispatch)=>{
      await  axios
      .get(`http://admin.tripsaround.me/api/users/v2/customer/${id}`,{
        headers: {
            Authorization: 'Token ' + token 
          }
      })
      .then(res => {
     dispatch(custimerCabinetSeccess(res.data))
      })
      .catch(err=>{
          console.log(err)
      });

}
}