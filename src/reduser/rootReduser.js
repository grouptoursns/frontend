import { combineReducers } from 'redux'
import { routeReducer } from 'react-router-redux';
import {UserRegistr} from "./userRegistration.js"
import {Spiner} from "./spiner";
import {Success} from "./Success";
import {SuccessCompany} from "./SuccessCompany";
import {dataHome} from "./homeData";


const rootReduser = combineReducers({
    routing:routeReducer,
    UserRegistr,
    Spiner,
    Success,
    SuccessCompany,
    dataHome
});

export default rootReduser;