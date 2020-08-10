const initialState={
    triger:false
}
export function SuccessSignIn(state=initialState,action){
    switch(action.type){
        case "LOGIN_ON":
            return { 
                ...state,triger:true
             }
        case "LOGIN_OFF":
            return { 
                ...state,triger:false
            }
        default:
            return state;
    }
}