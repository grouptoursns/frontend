import axios from "axios";

export function changeDataCompany(data) {
    let token = localStorage.getItem('token');
  let id = localStorage.getItem("id");

  return async (dispatch) => {
    await axios
      .put(`http://161.35.199.172:7000/api/users/company/me/`, data,
      {
        headers: {
            Authorization: 'Token ' + token ,
          
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

