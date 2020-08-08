const initialState={
    
}
export function custimerCabinet(state=initialState,action){
    switch(action.type){
        case "CUSTIMER_CABINET":
            return { 
                ...state,data:action.data
             }
        default:
            return state;
    }
}