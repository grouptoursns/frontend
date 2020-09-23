import axios from "axios";




export function updateGroupAdmin(id1,id2,data) {
    let token = localStorage.getItem('token');
  let id = localStorage.getItem("id");

  return async (dispatch) => {
    await axios
      .put(`http://161.35.199.172:7000/api/company/tours/${id1}/group/${id2}/`, 
      {
        "id": data.id,
        "name": data.name,
        "tour": data.tour,
        "start_time": data.start_time,
        "finish_time": data.finish_time,
        "status_group_tour":data.status_group ,
        "price": data.price,
        "count_of_people": data.count_people,
        "free_slots": data.free_slots
      }
      ,
      {
        headers: {
            Authorization: 'Token ' + token ,
          
        },
      })
      .then((res) => {
        console.log(res);
  
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

