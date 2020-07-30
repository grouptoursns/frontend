const initialState={
    trigerFilter: false,
}
export function trigerFilter(state=initialState,action){
    switch(action.type){
        case "TRIGER_TRUE_FILTER":
            return { 
                ...state,trigerFilter:true
             }
        case "TRIGER_FALSE_FILTER":
            return {
                ...state,trigerFilter:false
            }
        default:
            return state;
    }
}