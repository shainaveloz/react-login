import {combineReducers} from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './reducer_auth';
import usersReducer from './users';

const rootReducer = combineReducers({
    form,
    auth: authReducer,
    users: usersReducer

});

export default rootReducer;
