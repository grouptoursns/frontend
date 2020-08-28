
const initialState={}
export function dataCompany(state=initialState,action){
    switch(action.type){
        case "GET_DATA_COMPANY":
            return { 
                ...state,state:action.data
             }
        default:
            return state;
    }
}