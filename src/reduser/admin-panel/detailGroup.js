


const initialState={}
export function dataGroupAdmin(state=initialState,action){
    switch(action.type){
        case "DATA_ ADMIN_GROUP_DETAILS":
            return { 
                ...state,state:action.data
             }
        default:
            return state;
    }
}