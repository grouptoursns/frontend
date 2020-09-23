import axios from "axios";




export function updatTourUser(id) {


  return async (dispatch) => {
    await axios
      .put(`http://161.35.199.172:7000/bookings/${id}`, 
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

