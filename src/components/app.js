import React, {Component, PropTypes} from 'react';
import Header from './header';


export default class App extends Component {
    render() {
        const children = this.props.children;
        return(
            <div className="row">
                <div className="col-md-12">
                    <div className="page-header">
                        <Header/>
                        <h1>Happster Admin Dashboard</h1>
                        {children}
                    </div>
                </div>
            </div>
        )
    }
}

App.propTypes = {
    children: PropTypes.node
};