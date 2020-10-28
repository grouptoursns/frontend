import axios from "axios";
export const loadDataCompany = (data) => {
  return {
    type: "LOAD_DATA_COMPANY",
    data,
  };
};

export const openSpiner=()=>{
    return{
        type:"OPEN_SPINER"
    }
}
export const closeSpiner=()=>{
    return{
        type:"CLOSE_SPINER"
    }
}
export const SuccessfulCompany=(successfulCompany)=>{
    return{
        type:"SUCCESS_COMPANY",
        successfulCompany,
    }
}

export function putCompany(data) {
  return async (dispatch) => {
    try {
       dispatch( openSpiner());
      await axios
        .post("http://admin.tripsaround.me/api/users/registration/company", {
          email: data.email,
          first_name: data.fname,
          last_name: data.lname,
          country: data.country,
          avatar: null,
          name:data.cname,
          address:data.adress,
          phone:data.phone,
          site:data.site,
          tripadvisor:data.tripadvisor,
          password: data.pasword,
          password2: data.pasword2,
        })
        .then((res) => {
            dispatch(closeSpiner());
          dispatch(loadDataCompany(data));
          dispatch(SuccessfulCompany(res.data.message))
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    }catch{

    }
  }
}
