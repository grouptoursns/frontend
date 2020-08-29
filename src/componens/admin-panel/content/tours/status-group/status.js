import faker from 'faker'
import _ from 'lodash'
import "./status.css";
import React from 'react'
import { Dropdown } from 'semantic-ui-react'






const Status = (props) => {

    return(
<input className="form-control input " value={props.status} type="text"/>
    )
  
    }

export default Status