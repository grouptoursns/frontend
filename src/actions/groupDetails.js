
export function groupDataFetchSuccess(groupData) {
    return{
        type:"GROUP_DATA_SUCCESS",
        groupData
    }
}

let lang = localStorage.getItem("language")

export function groupDataFetch(url){
    return(dispatch)=>{
        fetch(url,{
            headers:{
                "Accept-Language": lang
            }})
            .then(res =>{
                if(!res.ok){
                    throw new Error(res.statusText)
                }
                return res;
            })
            .then(res =>res.json())
            .then(groupData => dispatch(groupDataFetchSuccess(groupData)))
    }

}
