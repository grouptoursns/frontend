import axios from "axios";
import {errCreateTour} from "../createTour/createTour"



export default function TourPictureAddAdmin(id,data) {
  let token = localStorage.getItem("token");

  return async (dispatch) => {
    await axios
      .post(
        `http://161.35.199.172/api/company/tours/${id}/images/`,data,
        {
          headers: {
            Authorization: "Token " + token,
          },
        }
      )
      .then((res) => {
        console.log(res);
        dispatch(errCreateTour())
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
