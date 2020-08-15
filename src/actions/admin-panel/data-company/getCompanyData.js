import axios from "axios";

export function seccessgetCompany(data){
    return{
        type:"GET_DATA_COMPANY",
        data,

    }
}

export function getCompany(url){
    return async (dispatch)=>{
      await  axios
      .get(url)
      .then(res => {
          dispatch(seccessgetCompany(res.data))
      });

}
}