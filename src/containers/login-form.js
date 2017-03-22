import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchUsers} from '../actions/index';


class LoginForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
           [name]: value
        });
    }

    onFormSubmit(event) {
        console.log('A user was logged in: ' + this.state.email);
        event.preventDefault();

        this.props.fetchUsers(this.state.value);
        this.setState({
            email: '',
            password: ''
        })
    }
    
    render(){
        return(
            <form className="form" onSubmit={this.onFormSubmit}>
                <div className="col-md-4">
                    <div className="form-group" placeholder="username" required="">
                        Email:
                        <input className="form-control" type="text" name="email" value={this.state.email} onChange={this.onInputChange} placeholder="email" required=""/>
                    </div>
                    <div className="form-group">
                        Password:
                        <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.onInputChange} placeholder="password" required=""/>
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