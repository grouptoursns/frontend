import axios from "axios";

export function putDataUser(data) {
  let token = localStorage.getItem("token");
  let id = localStorage.getItem("id");

  return async (dispatch) => {
    await axios
      .put(`http://admin.tripsaround.me/api/users/v2/customer/${id}`, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

