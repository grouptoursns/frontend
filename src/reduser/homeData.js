const initialState={
    homeData:{},
}
export function dataHome(state=initialState,action){
    switch(action.type){
        case "DATA_HOME":
            return { 
                ...state,homeData:action.data
             }
        default:
            return state;
    }
}