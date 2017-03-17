import React, {Component} from 'react';


class LoginForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            value: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        this.setState({
            email: event.target.value,
            password: event.target.value
        });
    }

    onSubmit(event) {
        console.log('A user was logged in: ' + this.state.email);
        event.preventDefault();
    }
    
    render(){
        return(
            <form className="form" onSubmit={this.onSubmit}>
                <div className="col-md-4">
                    <div className="form-group" placeholder="username" required="">
                        Email:
                        <input className="form-control" type="text" value={this.email} onChange={this.onChange} placeholder="email" required=""/>
                    </div>
                    <div className="form-group">
                        Password:
                        <input type="password" className="form-control" value={this.password} onChange={this.onChange} placeholder="password" required=""/>
                    </div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        )
    }
};

export default LoginForm;