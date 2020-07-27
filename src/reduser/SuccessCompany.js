const initialState={
    successCompany:"",
}
export function SuccessCompany(state=initialState,action){
    switch(action.type){
        case "SUCCESS_COMPANY":
            return { 
                ...state,successCompany:action.successfulCompany
             }
        default:
            return state;
    }
}