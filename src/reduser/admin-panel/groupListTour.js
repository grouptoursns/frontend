

const initialState=[]
export function GroupListTour(state=initialState,action){
    switch(action.type){
        case "DATA_ ADMIN_GROUP_LIST":
            return { 
                ...state,state:[...action.data]
             }
        default:
            return state;
    }
}