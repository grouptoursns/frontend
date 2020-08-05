
export function tourDataFetchSuccess(tourData) {
    return{
        type:"TOUR_DATA_SUCCESS",
        tourData
    }
}



export function tourDataFetch(url){
    return(dispatch)=>{
        fetch(url)
            .then(res =>{
                if(!res.ok){
                    throw new Error(res.statusText)
                }
                return res;
            })
            .then(res =>res.json())
            .then(tourData => dispatch(tourDataFetchSuccess(tourData)))
    }
}