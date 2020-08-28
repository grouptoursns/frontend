import faker from 'faker'
import _ from 'lodash'
import "./status.css";
import React from 'react'
import { Dropdown } from 'semantic-ui-react'


const stateOptions = [
    {
        key:"Open",
        text:"Open",
        value:"Open"
    },
    {
        key: "Is typed",
        text: "Is typed",
        value: "Is typed"
    },
    {
        key: "Awaiting reservations",
        text: "Awaiting reservations",
        value: "Awaiting reservations"
    },
    {
        key: "Canceled",
        text: "Canceled",
        value: "Canceled"
    },
    {
        key: "Successful",
        text: "Successful",
        value: "Successful"
    },
    {
        key: "Full of people",
        text: "Full of people",
        value: "Full of people"
    }

]



const Status = (props) => {
    const change=(e)=>{
        if (e.target.value !== undefined) {
       
          props.status(e.target.value)
      
    
          
        } 
        else {

            props.status(e.target.textContent)
        }
      }
    return(
<Dropdown  search selection options={stateOptions} onChange={change} />
    )
  
    }

export default Status