const initialState=[]
export function ToursListAdmin(state=initialState,action){
    switch(action.type){
        case "DATA_ ADMIN_TOURS":
            return { 
                ...state,state:[...action.data]
             }
        default:
            return state;
    }
}