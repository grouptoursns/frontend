import faker from "faker";
import _ from "lodash";
import React from "react";
import { Dropdown } from "semantic-ui-react";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";

const stateOptions = [
  {
    key: "Active",
    text: "Active",
    value: "Active",
  },
  {
    key: "Inactive",
    text: "Inactive",
    value: "Inactive",
  },
];

const Status = (props) => {

    return(
          <Dropdown
    search


    selection
    options={stateOptions}
    onChange={(e) => props.status(e.target.textContent)}
    className="form-control input"
    id="defaultFormRegisterPasswordEx4"
  />
    )

};

export default Status;
