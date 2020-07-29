const initialState={
    trigerSearch: false,
}
export function trigerSearch(state=initialState,action){
    switch(action.type){
        case "TRIGER_TRUE":
            return { 
                ...state,trigerSearch:true
             }
        case "TRIGER_FALSE":
            return {
                ...state,trigerSearch:false
            }
        default:
            return state;
    }
}