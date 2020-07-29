const initialState={
    tourSearch:[],
}
export function tourSearch(state=initialState,action){
    switch(action.type){
        case "SEARCH_TOUR":
            return { 
                ...state,tourSearch:[...action.data]
             }
        default:
            return state;
    }
}