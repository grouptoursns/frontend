
export function groupDataFetchSuccess(groupData) {
    return{
        type:"GROUP_DATA_SUCCESS",
        groupData
    }
}



export function groupDataFetch(url){
    return(dispatch)=>{
        fetch(url)
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
