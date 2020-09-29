import axios from "axios";
export const loadData = (data) => {
  return {
    type: "LOAD_DATA",
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
export const trigerSpiner=()=>{
  return{
      type:"TRIGER_SPINER"
  }
}

export const Successful=(successful)=>{
    return{
        type:"SUCCESS",
        successful,
    }
}

export function putData(data) {
  return async (dispatch) => {
    try {
       dispatch( openSpiner());
      await axios
        .post("http://161.35.199.172:7000/api/users/registration/", {
          email: data.email,
          password: data.pasword,
          password2: data.pasword2,
          first_name: data.fname,
          last_name: data.lname,
          birthday: data.date,
          country: "Australia",
        })
        .then((res) => {
            dispatch(closeSpiner());
          dispatch(loadData(data));
          dispatch(Successful(res.data.message))
          dispatch({type:"OPEN_SWCCESS"})
        })
        .catch((error) => {
          console.log(error.response.data.email[0]);
          dispatch(Successful(error.response.data.email[0]))
     
        });
    }catch{

    }
  }
}
