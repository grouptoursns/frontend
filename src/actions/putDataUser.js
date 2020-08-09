import axios from "axios";

export function putDataUser(data) {
  let token = localStorage.getItem("token");
  let id = localStorage.getItem("id");
  return async (dispatch) => {
    await axios
      .put(`http://161.35.199.172/api/users/v2/customer/${id}`, {
        first_name: data.fname,
        last_name: data.lname,
        birthday: data.date,
        avatar: data.avatar,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
