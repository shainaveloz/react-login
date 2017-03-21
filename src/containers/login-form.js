import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchUsers} from '../actions/index';


class LoginForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            value: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({
            email: event.target.email,
            password: event.target.password
        });
    }

    onFormSubmit(event) {
        console.log('A user was logged in: ' + this.state.email);
        event.preventDefault();

        this.props.fetchUsers(this.state.value);
        this.setState({
            email:'',
            password: ''
        })
    }
    
    render(){
        return(
            <form className="form" onSubmit={this.onFormSubmit}>
                <div className="col-md-4">
                    <div className="form-group" placeholder="username" required="">
                        Email:
                        <input className="form-control" type="text" value={this.state.email} onChange={this.onInputChange} placeholder="email" required=""/>
                    </div>
                    <div className="form-group">
                        Password:
                        <input type="password" className="form-control" value={this.state.password} onChange={this.onInputChange} placeholder="password" required=""/>
                    </div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        )
    }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchUsers}, dispatch);
}

export default connect(null, mapDispatchToProps)(LoginForm);