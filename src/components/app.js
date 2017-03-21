import React from 'react';
import {Component} from 'react';
import LoginForm from '../containers/login-form';


export default class App extends Component {
    render() {
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
    }
}