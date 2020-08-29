import axios from "axios";
import { history } from "../history";

export const SignInOn = () => {
  return {
    type: "LOGIN_ON",

  };
};
export const SignInOff = () => {
  return {
    type: "LOGIN_OFF",
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

          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", res.data.is_customer);
          localStorage.setItem("company", res.data.is_company);
          localStorage.setItem("email", data.email);
          localStorage.setItem("id", res.data.id);
dispatch(SignInOn()
    )
        })
        .catch((error) => {
          console.log(error.data);
        });
    } catch {}
  };
}
