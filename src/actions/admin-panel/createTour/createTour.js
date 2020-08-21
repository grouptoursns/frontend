import axios from "axios";

export default function createTour(data) {
  let token = localStorage.getItem("token");

  return async (dispatch) => {
    await axios
      .post(
        `http://161.35.199.172/api/company/tours/create/`,data,
        {
          headers: {
            Authorization: "Token " + token,
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
