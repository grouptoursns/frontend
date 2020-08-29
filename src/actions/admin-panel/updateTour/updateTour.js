

import axios from "axios";
export function openModal(){
  return {
    type:"OPEN_MODAL_UPDATE_TOUR"

}
}
export function closeModal(){
  return{
    type:"CLOSE_MODAL_UPDATE_TOUR"
  }
}

export function updateTourAdmin(data,id) {
    let token = localStorage.getItem('token');
 

  return async (dispatch) => {
    await axios
      .put(`http://161.35.199.172/api/company/tours/${id}/`,data
      ,
      {
        headers: {
            Authorization: 'Token ' + token ,
          
        },
      })
      .then((res) => {
  if(res.status===200){
    dispatch(openModal());
    setTimeout(() => {
      dispatch(closeModal());
    }, 2000);
  }

        
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

