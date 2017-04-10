import React, {Component, PropTypes} from 'react';
import { reduxForm, Field  } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const renderInput = field => {
    const { input, type } = field;
    return (
        <div>
            <input {...input} type={type} className="form-control" />
        </div>
    );
}

class Login extends Component{
    handleFormSubmit({ email, password }) {
        console.log(email, password);

        this.props.loginUser({email, password});
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Oops!</strong> {this.props.errorMessage}
                </div>
            );
        }
    }
    
    render(){
        const { handleSubmit} = this.props;
        return(
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                    <label>Email:</label>
                    <Field name="email"  component={renderInput} type="text" className="form-control" />
                </fieldset>
                <fieldset className="form-group">
                    <label>Password:</label>
                    <Field name="password"  component={renderInput} type="password" className="form-control" />
                </fieldset>
                {this.renderAlert()}
                <button action="submit" className="btn btn-primary"> Log in</button>
            </form>
        )
    }
};

function mapStateToProps(state) {
    return {
        form: state.form,
        errorMessage: state.auth.errorMessage
    }
}

Login.propTypes = {
    loginUser: PropTypes.func,
    form: PropTypes.object,
    errorMessage: PropTypes.string
};

Login = connect(mapStateToProps, actions)(Login);

Login = reduxForm({
    form: 'login',
    errorMessage: 'error'
})(Login);

export default Login;