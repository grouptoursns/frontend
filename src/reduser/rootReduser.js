import { combineReducers } from 'redux'
import { routeReducer } from 'react-router-redux';


const rootReduser = combineReducers({
    routing:routeReducer,
});

export default rootReduser;