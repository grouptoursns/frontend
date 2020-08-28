

const initialState = {
  isOpenPortal: false,
};
export function detailTourAdmin(state = initialState, action) {
  switch (action.type) {
    case "DATA_ ADMIN_TOUR":
      return {
        ...state,
        state: action.data,
        isOpenPortal: true,
      };
    case "CLOSE_PORTAL_ADMIN":
      return {
        ...state,state: "",
        isOpenPortal: false,
      };
    default:
      return state;
  }
}
