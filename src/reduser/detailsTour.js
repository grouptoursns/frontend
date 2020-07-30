const initialState={
    detailsTour:"",
}
export function detailsTour(state=initialState,action){
    switch(action.type){
        case "DETAILS_TOUR":
            return { 
                ...state,detailsTour:action.id
             }
        default:
            return state;
    }
}