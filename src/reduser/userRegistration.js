const initialState={
    data:{},
}
export function UserRegistr(state=initialState,action){
    switch(action.type){
        case "LOAD_DATA":
            return { 
                ...state,data:action.data
             }
        default:
            return state;
    }
}