
const initialState={
    about_data:{},
}
export function AboutData(state=initialState,action){
    switch(action.type){
        case "DATA_ABOUT":
            return { 
                ...state,about_data:action.data
             }
        default:
            return state;
    }
}