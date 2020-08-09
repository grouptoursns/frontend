const initialState = {
  data: false,
  text: "",
};
export function changePassword(state = initialState, action) {

  switch (action.type) {
    case "SECCESS_CHANGE_PASSWORD":
      return {
        ...state,
        data: true,
      };
    case "ERR_CHANGE_PASSWORD":
      return {
        ...state,
        data: false,
        ...state,text: action.data,
      };
    default:
      return state;
  }
}
