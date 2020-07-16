import React from "react";
import { Tabs, Tab} from "@material-ui/core";

import User from './user/user.js'


const Form =()=>{

        const [selectedTab, setSelectedTab] = React.useState(0);
        const handleChange =(event, newValue)=>{
            setSelectedTab(newValue);
        }


    return(
        <>
            <Tabs value={selectedTab} onChange={handleChange} centered indicatorColor="none" textColor="black">
                <Tab label="User"/>
                <Tab label="Company"/>
            </Tabs>

            {selectedTab === 0 && <User />}
            {selectedTab === 1 && <User />}
        </>

)
}
export default Form;