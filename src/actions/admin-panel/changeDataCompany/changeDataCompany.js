import axios from "axios";

export function changeDataCompany(data) {
    let token = localStorage.getItem('token');
  let id = localStorage.getItem("id");
  let formData= new FormData();
  formData.set("first_name",data.fname);
  formData.set("last_name",data.lname);
  formData.set("name",data.name);
  formData.set("address",data.adress);
  formData.set("phone",data.phone);
  formData.set("site",data.site);
  formData.set("tripadvisor",data.tripadvisor);
  formData.set("country",data.country);
  formData.append("avatar",data.photo);
  return async (dispatch) => {
    await axios
      .put(`http://161.35.199.172/api/users/company/me/`, formData,
      {
        headers: {
            Authorization: 'Token ' + token ,
          "Content-Type": "multipart/form-data",
          
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

