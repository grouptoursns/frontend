const initialState={
    success:"",
}
export function Success(state=initialState,action){
    switch(action.type){
        case "SUCCESS":
            return { 
                ...state,success:action.successful
             }
        default:
            return state;
    }
}