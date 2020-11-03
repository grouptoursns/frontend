const initialState = {
  data: {},
  triger: false,
};
export function UserRegistr1(state = initialState, action) {
  switch (action.type) {
    case "LOAD_DATA_COMPANY":
      return {
        ...state,
        data: action.data,
      };
    case "ERR_COMPANY":
      return {
        ...state,
        triger: true,
      };
      case "ERR_COMPANY_FALSE":
        return {
          ...state,
          triger: false,
        };
    default:
      return state;
  }
}
