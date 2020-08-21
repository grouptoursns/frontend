import faker from 'faker'
import _ from 'lodash'
import React from 'react'
import { Dropdown } from 'semantic-ui-react'


const stateOptions = [
    {
        key:"Very light",
        text:"Very light",
        value:"Very light"
    },
    {
        key: "Easy",
        text: "Easy",
        value: "Easy"
    },
    {
        key: "Medium",
        text: "Medium",
        value: "Medium"
    },
    {
        key: "Hard",
        text: "Hard",
        value: "Hard"
    },
    {
        key: "Very hard",
        text: "Very hard",
        value: "Very hard"
    }

]


const Difficult = (props) => (
  <Dropdown  search selection options={stateOptions} onChange={(e)=>props.propsDifficult(e.target.textContent)} />
)

export default Difficult