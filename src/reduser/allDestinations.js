

const initialState={
    allDestinations:{},
}
export function allDestinations(state=initialState,action){
    switch(action.type){
        case "DATA_ DESTINATION":
            return { 
                ...state,allDestinations:action.data
             }
        default:
            return state;
    }
}