

import axios from "axios";

export function seccessGetImageTour(data){
    return{
        type:"TOUR_IMAGE",
        data
    }
}

export function updateTourImage(id) {
    let token = localStorage.getItem('token');
 

  return async (dispatch) => {
    await axios
      .get(`http://161.35.199.172/api/company/tours/${id}/images/`,
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

