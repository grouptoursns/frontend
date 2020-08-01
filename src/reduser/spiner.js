const initialState={
    spiner:{},
}
export function Spiner(state=initialState,action){
    switch(action.type){
        case "OPEN_SPINER":
            return { 
                ...state,spiner:true
             }
        case "CLOSE_SPINER":
            return {
                ...state,spiner:false
            }
            case "TRIGER_SPINER":
                return {
                    ...state,spiner:""
                }
        default:
            return state;
    }
}
