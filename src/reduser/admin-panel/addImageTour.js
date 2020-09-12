const initialState={
    trigerModalCreateImage:false,
};
export function trigerModalCreteTour(state=initialState,action){
    switch(action.type){
        case "OPEN_CREATE_IMAGE_TOUR":
            return { 
                ...state,trigerModalCreateImage:true,

             }
        case "CLOSE_CREATE_IMAGE_TOUR":
            return {
                ...state,trigerModalCreateImage:false
            }
        default:
            return state;
    }
}

