import {combineReducers} from 'redux';
import HomeReducer from './reducer_home';
import AuthReducer from './reducer_auth';
import UsersReducer from './reducer_users';

const rootReducer = combineReducers({
    home: HomeReducer,
    auth: AuthReducer,
    users: UsersReducer
});

export default rootReducer;