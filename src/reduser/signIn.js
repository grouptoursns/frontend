const initialState={
    signIn:{
        user:false,
        company:false,
    },
}
export function SuccessSignIn(state=initialState,action){
    switch(action.type){
        case "SUCCESS_LOGIN":
            return { 
                ...state,
                signIn: {
                    ...state.signIn,
                    user: action.data.is_customer,
                    company:action.data.is_company
                  },
             }
        default:
            return state;
    }
}