const initialState = {
  trigerTour: false,
  id: "",
  modal: false,
};
export function trigerCreateTour(state = initialState, action) {
  switch (action.type) {
    case "SECCESS_CREATE_TOUR":
      return {
        ...state,
        id: action.id,
      };
    case "ERR_CREATE_TOUR":
      return {
        ...state,
        trigerTour: false,
      };
    case "OPEN_CREATE_MODAL_TOUR":
      return {
        ...state,
        modal: true,
      };
    case "CLOSE_CREATE_MODAL_TOUR":
      return {
        ...state,
        modal: false,
        trigerTour: true,
      };

    default:
      return state;
  }
}
