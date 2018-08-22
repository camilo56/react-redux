import {combineReducers} from 'react-redux';
import usersReducer from "./reducer-users";

export const allReducers = combineReducers({
    users: usersReducer
});