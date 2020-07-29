import { combineReducers } from 'redux'
import { routeReducer } from 'react-router-redux';
import {UserRegistr} from "./userRegistration.js"
import {Spiner} from "./spiner";
import {Success} from "./Success";
import {SuccessCompany} from "./SuccessCompany";
import {dataHome} from "./homeData";
import {countBest} from "./countBest"
import {tourSearch} from "./tourSearch"
import {trigerSearch} from "./trigerSearch"
import {dataActivity} from "./dataActivity";

const rootReduser = combineReducers({
    routing:routeReducer,
    UserRegistr,
    Spiner,
    Success,
    SuccessCompany,
    dataHome,
    countBest,
    tourSearch,
    trigerSearch,
    dataActivity
});

export default rootReduser;