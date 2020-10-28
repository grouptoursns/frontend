import axios from "axios";




export function updatTourUser(id) {


  return async (dispatch) => {
    await axios
      .put(`http://admin.tripsaround.me/bookings/${id}`,
      {
        "status":"Inactive",

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

