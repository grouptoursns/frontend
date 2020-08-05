import axios from "axios";
import { history } from "../history";

export const SuccessfulSignIn = (data) => {
  return {
    type: "SUCCESS_LOGIN",
    data,
  };
};

export function signIn(data) {
  return async (dispatch) => {
    try {
      await axios
        .post("http:///161.35.199.172/api/users/login/", {
          email: data.email,
          password: data.password,
        })
        .then((res) => {
          console.log(res.data);
          dispatch(SuccessfulSignIn(res.data));
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", res.data.is_customer);
          localStorage.setItem("company", res.data.is_company);
          localStorage.setItem("email", data.email);
          history.push("/");
        })
        .catch((error) => {
          console.log(error.data);
        });
    } catch {}
  };
}
