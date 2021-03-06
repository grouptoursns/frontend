

import axios from "axios";

export function seccessgetGroupList(data){
    return{
        type:"DATA_ ADMIN_GROUP",
        data,

    }
}

export function getGroupList(url){
    let token = localStorage.getItem('token');
    return async (dispatch)=>{
      await  axios
      .get(url,{
          headers:{
            Authorization: 'Token ' + token 
          }
      })
      .then(res => {
          dispatch(seccessgetGroupList(res.data.results));
          console.log(res.data.results)
      });

}
}

export function seccessgetGroupListTour(data){
    return{
        type:"DATA_ ADMIN_GROUP_LIST",
        data,

    }
}
export function getGroupListTour(url){
    let token = localStorage.getItem('token');
    return async (dispatch)=>{
      await  axios
      .get(url,{
          headers:{
            Authorization: 'Token ' + token 
          }
      })
      .then(res => {
     dispatch(seccessgetGroupListTour(res.data.results))
          console.log(res.data.results)
      });

}
}