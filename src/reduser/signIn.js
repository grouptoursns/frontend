const initialState = {
  triger: false,
  textErr: "",
};
export function SuccessSignIn(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_ON":
      return {
        ...state,
        triger: true,
      };
    case "LOGIN_OFF":
      return {
        ...state,
        triger: false,
      };
    case "ERR_AUTORIZATION":
      return {
        ...state,
        textErr: action.text,
      };
    case "CLEAR_ERR_TEXT":
      return {
        ...state,
        textErr: "",
      };
    default:
      return state;
  }
}
