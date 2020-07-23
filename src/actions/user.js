import axios from "axios";
export const loadData = (data) => {
  return {
    type: "LOAD_DATA",
    data,
  };
};

export function putData(data) {
  return async (dispatch) => {
    try {
      await axios
        .post("http://161.35.199.172/api/users/registration/", {
          email: data.email,
          password: data.pasword,
          password2: data.pasword2,
          first_name: data.fname,
          last_name: data.lname,
          birthday: data.date,
          country: "KG",
          avatar: null,
        })
        .then((res) => {
          dispatch(loadData(data));
          console.log(res.data)
        })
        .catch((error) => {
          console.log(error.data);
        });
    }catch{

    }
  }
}
