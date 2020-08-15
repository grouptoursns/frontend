

const initialState=[]
export function GroupListAdmin(state=initialState,action){
    switch(action.type){
        case "DATA_ ADMIN_GROUP":
            return { 
                ...state,state:[...action.data]
             }
        default:
            return state;
    }
}