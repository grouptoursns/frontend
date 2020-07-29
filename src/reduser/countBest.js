const initialState = {
  count: "",
};
export function countBest(state = initialState, action) {
  switch (action.type) {
    case "CLICK_COUNT":
      return {
        ...state,
        count: action.city,
      };
    case "OFCLICK_COUNT":
      return {
        ...state,
        count: "",
      };
    default:
      return state;
  }
}
