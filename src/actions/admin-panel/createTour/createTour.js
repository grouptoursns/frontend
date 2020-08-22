import axios from "axios";

export function seccessCreateTour(){
  return{
    type:"SECCESS_CREATE_TOUR"
  }
}
export function errCreateTour(){
  return{
    type:"ERR_CREATE_TOUR"
  }
}

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
        console.log(res.status);
        if(res.status===201){
     dispatch(seccessCreateTour())
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
