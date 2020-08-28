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
  return (dispatch) => {
    dispatch(openSpiner());
    axios.get(url)
    .then((res) => {
      dispatch(closeSpiner());
      dispatch(loadFilterTour(res.data));
      console.log(res.data)
    })
  };
}
