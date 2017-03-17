import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router';
import LoginForm from './components/login-form.js';

const App = () =>{
    return(
        <div className="row">
            <div className="col-md-12">
                <div className="page-header">
                    <h1>Happster Login</h1>
                </div>
                <div className="col-md-4">
                    <h3>Sign In</h3>
                    <LoginForm />
                </div>
            </div>
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('.container'));