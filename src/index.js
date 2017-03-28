import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import Login from './components/auth/login';
import Logout from './components/auth/logout';
import Feature from './components/feature';
//import Dashboard from './components/dashboard';
import RequireAuth from './components/auth/require_auth';
import reducers from './reducers';
import { AUTH_USER } from './actions/types';


const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');

if(token){
    store.dispatch({type: AUTH_USER});
}


ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <Route path="login" component={Login} />
                <Route path="logout" component={Logout} />
                <Route path="feature" component={RequireAuth(Feature)} />

            </Route>
        </Router>
    </Provider>, document.querySelector('.container'));