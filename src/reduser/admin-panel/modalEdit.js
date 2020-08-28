const initialState={
    modalEdit: false,
}
export function ModalEdit(state=initialState,action){
    switch(action.type){
        case "MODAL_EDIT_ON":
            return { 
                ...state,modalEdit:true
             }
        case "MODAL_EDIT_OFF":
            return {
                ...state,modalEdit:false
            }
        default:
            return state;
    }
}