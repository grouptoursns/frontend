import axios from "axios";

export function loadFilterTour(arr) {
  return {
    type: "FILTER_TOUR",
    arr,
  };
}

export const openSpiner = () => {
  return {
    type: "OPEN_SPINER",
  };
};
export const closeSpiner = () => {
  return {
    type: "CLOSE_SPINER",
  };
};
export const filterTourErr=(err)=>{
    return console.log(err);
  

}

export function filterTour(url) {
  return async (dispatch) => {
    dispatch(openSpiner());
    await axios.get(url).then((res) => {
      dispatch(closeSpiner());
      dispatch(loadFilterTour(res.data));
    })
    .catch((err)=>{
        dispatch(filterTourErr(err))
    });
  };
}
