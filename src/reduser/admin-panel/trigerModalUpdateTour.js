const initialState={
    trigerModal:false,
};
export function trigerModalUpdateTour(state=initialState,action){
    switch(action.type){
        case "OPEN_MODAL_UPDATE_TOUR":
            return { 
                ...state,trigerModal:true,

             }
        case "CLOSE_MODAL_UPDATE_TOUR":
            return {
                ...state,trigerModal:false
            }
        default:
            return state;
    }
}
