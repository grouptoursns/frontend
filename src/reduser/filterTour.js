const initialState={
    filterTour:[],
}
export function filterTour(state=initialState,action){
    switch(action.type){
        case "FILTER_TOUR":
            return { 
                ...state,filterTour:[...action.arr]
             }
        default:
            return state;
    }
}