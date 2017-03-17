import {combineReducers} from 'redux';
import UserLoginReducer from './reducer_userLogin.js'

const rootReducer = combineReducers({
    userLogin: UserLoginReducer
});

export default rootReducer;