import { combineReducers } from 'redux'
import { routeReducer } from 'react-router-redux';
import {UserRegistr} from "./userRegistration.js"


const rootReduser = combineReducers({
    routing:routeReducer,
    UserRegistr,
});

export default rootReduser;