import axios from "axios";

export default function addGroupAdmin(id, data) {
  let token = localStorage.getItem("token");

  return async (dispatch) => {
    await axios
      .post(
        `http://admin.tripsaround.me/api/company/tours/${id}/group-create/`,
        {
          name: data.name,
          start_time: data.start_time,
          finish_time: data.finish_time,
          status_group_tour: data.status_group,
          price: data.price,
          count_of_people: data.count_people,
        },
        {
          headers: {
            Authorization: "Token " + token,
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
