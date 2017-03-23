import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import LoginForm from './containers/login-form';
import UserList from './containers/user-list';

export default(
    <Route path="/" component={App}>
        <IndexRoute  component={LoginForm}/>
        <Route path="/users" component={UserList}/>
    </Route>
)
