import React from 'react';
import {Component} from 'react';


export default class App extends Component {
    render() {
        return(
            <div className="row">
                <div className="col-md-12">
                    <div className="page-header">
                        <h1>Happster Login</h1>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}