const initialState={
    trigerTour:true
};
export function trigerCreateTour(state=initialState,action){
    switch(action.type){
        case "SECCESS_CREATE_TOUR":
            return { 
                ...state,trigerTour:true
             }
        case "ERR_CREATE_TOUR":
            return {
                ...state,trigerTour:false
            }
        default:
            return state;
    }
}