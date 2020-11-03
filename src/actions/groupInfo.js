export function groupInfo(id) {
    return{
        type:"GROUP_INFO_SUCCESS",
        id,
    }
}



// export function groupInfoFetch(url){
//     return(dispatch)=>{
//         fetch(url)
//             .then(res =>{
//                 if(!res.ok){
//                     throw new Error(res.statusText)
//                 }
//                 return res;
//             })
//             .then(res =>res.json())
//             .then(id => dispatch(groupInfoFetchSuccess(id)))
//     }
//
// }
