

import axios from "axios";

export function seccessGetImageTour(data){
    return{
        type:"TOUR_IMAGE",
        data
    }
}
export function openModal(){
  return{
    type:"OPEN_CREATE_IMAGE_TOUR"
  }
}
export function closeModal(){
  return{
    type:"CLOSE_CREATE_IMAGE_TOUR"
  }
}
export function updateTourImage(id) {
    let token = localStorage.getItem('token');
 

  return async (dispatch) => {

    await axios
      .get(`http://admin.tripsaround.me/api/company/tours/${id}/images/`,
      {
        headers: {
            Authorization: 'Token ' + token ,
          
        },
      })
      .then((res) => {
        dispatch(seccessGetImageTour(res.data))


      })
      .catch((err) => {
        console.log(err);
      });
  };
}


