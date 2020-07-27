import React, {useState} from "react";
import "./user.css";
 import DatePicker from "react-datepicker";


const Calendar=() => {
    const [startDate, setStartDate] = useState(new Date());
    console.log(startDate)
    return (
      <DatePicker selected={startDate} className="input" onChange={date => setStartDate(date)} />
    );
  };
  export default Calendar;