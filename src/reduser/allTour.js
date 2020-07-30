const initialState={
    allTour:[],
}
export function allTour(state=initialState,action){
    switch(action.type){
        case "ALL_TOUR":
            return { 
                ...state,allTour:[...action.data]
             }
        default:
            return state;
    }
}