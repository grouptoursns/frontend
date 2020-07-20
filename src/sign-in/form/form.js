import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Tabs, Tab} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Company from './company/company.js'
import User from './user/user.js'
import divWithClassName from "react-bootstrap/cjs/divWithClassName";


const Form =()=>{
//         const useStyles = makeStyles((theme) => ({
//             root: {
//                 flexGrow: 1,
//             },
//             padding: {
//                 padding: theme.spacing(5),
//             },
//             demo1: {
//                 backgroundColor: theme.palette.background.paper,
//             },
//             demo2: {
//                 backgroundColor: '#2e1534',
//             },
//         }));
//
//         const classes = useStyles();
//         const [selectedTab, setSelectedTab] = React.useState(0);
//         const handleChange =(event, newValue)=>{
//             setSelectedTab(newValue);
//         }
//
//
//     return(
//         <>
//             <div className={classes.padding}>
//             <Tabs value={selectedTab} onChange={handleChange} centered indicatorColor="none" textColor="black">
//                 <Tab label="User"/>
//                 <Tab label="Company"/>
//             </Tabs>
//             {selectedTab === 0 && <User />}
//             {selectedTab === 1 && <Company />}
//             </div>
//         </>
//
// )
    return(
        <div className="tabs">
            <Router>
                <Switch>
                    <Route path="/user" component={User} />
                    <Route path="/company" component={Company} />
                </Switch>
            </Router>
        </div>
    )



}
export default Form;