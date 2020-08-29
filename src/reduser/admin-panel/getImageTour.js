const initialState=[]
export function getArrImage(state=initialState,action){
    switch(action.type){
        case "TOUR_IMAGE":
            return { 
                ...state,state:[...action.data]
             }
        default:
            return state;
    }
}