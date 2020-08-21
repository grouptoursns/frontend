import faker from 'faker'
import _ from 'lodash'
import React from 'react'
import { Dropdown } from 'semantic-ui-react'


const stateOptions = [
    {
        key:"Active",
        text:"Active",
        value:"Active"
    },
    {
        key: "Inactive",
        text: "Inactive",
        value: "Inactive"
    }
]


const Status = (props) => (
  <Dropdown  search selection options={stateOptions} onChange={(e)=>props.status(e.target.textContent)} />
)

export default Status