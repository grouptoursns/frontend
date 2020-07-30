const initialState={
    trigerActivity: false,
}
export function trigerActivity(state=initialState,action){
    switch(action.type){
        case "TRIGER_TRUE_ACTIVITY":
            return { 
                ...state,trigerActivity:true
             }
        case "TRIGER_FALSE_ACTIVITY":
            return {
                ...state,trigerActivity:false
            }
        default:
            return state;
    }
}