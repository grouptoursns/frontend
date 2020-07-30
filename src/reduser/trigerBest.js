const initialState={
    trigerBest: false,
}
export function trigerBest(state=initialState,action){
    switch(action.type){
        case "TRIGER_TRUE_BEST":
            return { 
                ...state,trigerBest:true
             }
        case "TRIGER_FALSE_BEST":
            return {
                ...state,trigerBest:false
            }
        default:
            return state;
    }
}