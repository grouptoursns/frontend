const initialState = {
  spiner: {},
  modal:{
      data:"",
      modal:false
  }
};
export function Spiner(state = initialState, action) {
  switch (action.type) {
    case "OPEN_SPINER":
      return {
        ...state,
        spiner: true,
      };
    case "CLOSE_SPINER":
      return {
        ...state,
        spiner: false,
      };
    case "TRIGER_SPINER":
      return {
        ...state,
        spiner: "",
      };
    case "OPEN_SWCCESS":
      return {
        ...state,
        modal:{
            data:action.data,
            modal:true,
        }
        };
      
    case "CLOSE_SWCCESS":
      return {
        ...state,
        modal:{
            data:"",
            modal:false,
        }
    }
    default:
      return state;
  }
}
