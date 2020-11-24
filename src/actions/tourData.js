
export function tourDataFetchSuccess(tourData) {
    return{
        type:"TOUR_DATA_SUCCESS",
        tourData
    }
}

const lang = localStorage.getItem("language")

export function tourDataFetch(url){
    return(dispatch)=>{
        fetch(url,{
            headers:{
                "Accept-Language": lang
            }
        })
            .then(res =>{
                if(!res.ok){
                 //   throw new Error(res.statusText)
                }
                return res;
            })
            .then(res =>{
                return res.json()
            })
            .then(tourData => {
                console.log(tourData)
                return dispatch(tourDataFetchSuccess(tourData))
            })
    }

}
