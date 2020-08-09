import axios from "axios";


export function changePasswordSeccess() {
  return {
    type: "SECCESS_CHANGE_PASSWORD",

  };
}
export function changePasswordErr(data) {
  debugger;
    return {
      type: "ERR_CHANGE_PASSWORD",
  data,
    };
  }

export function changePassword(data) {
  let token = localStorage.getItem("token");

  return async (dispatch) => {
    await axios
      .put(
        `http://161.35.199.172/api/users/change-password/`,
        {
          
            old_password: data.password,
            new_password: data.password1,
            new_password2: data.password2,
         
        },
        {
          headers: {
            Authorization: "Token " + token,
          },
        }
      )
      .then((res) => {
        dispatch(changePasswordSeccess())
        localStorage.clear();
      })
      .catch((err) => {
        dispatch(changePasswordErr(err.response.data))
      });
  };
}
