const initialState = {
  activity: "",
};
export function dataActivity(state = initialState, action) {
  switch (action.type) {
    case "PUSH_ACTIVITY":
      return {
        ...state,
        activity: action.activity,
      };
    case "RIGER_OFF":
      return {
        ...state,
        activity: "",
      };
    default:
      return state;
  }
}
