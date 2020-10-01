import axios from "axios";
import {errCreateTour} from "../createTour/createTour"


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
export default function TourPictureAddAdmin(id,data) {
  let token = localStorage.getItem("token");

  return async (dispatch) => {
    dispatch(openModal())
    await axios
      .post(
        `http://admin.tripsaround.me/api/company/tours/${id}/images/`,data,
        {
          headers: {
            Authorization: "Token " + token,
          },
        }
      )
      .then((res) => {
        console.log(res);
        dispatch(errCreateTour())
        dispatch(closeModal())
      })
      .catch((err) => {
        console.log(err);
        dispatch(closeModal())
      });
  };
}
