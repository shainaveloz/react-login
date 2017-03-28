import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

class Header extends Component{
    renderLinks(){
        if(this.props.authenticated){
            return <li className="nav-item">
                <Link className="nav-link" to="/logout">Log Out</Link>
            </li>
        }else{
            return <li className="nav-item">
                <Link className="nav-link" to="/login">Log In</Link>
            </li>
        }
    }

    render(){
        return(
            <nav className="navbar navbar-light">
                <Link to="/" className="navbar-brand"> Happster App</Link>
                <ul className="nav navbar-nav">
                    {this.renderLinks()}
                </ul>
            </nav>
        )
    }
}

function mapStateToProps(state){
    return{
        authenticated: state.auth.authenticated
    };
}

export default connect(mapStateToProps)(Header);