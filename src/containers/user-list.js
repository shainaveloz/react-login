import React, {Component} from 'react';
import {connect} from 'react-redux';


class UserList extends Component{
    renderList(){
        return this.props.users.map((user) => {
            return (
                <li
                    key={user.email}
                    className="list-group-item">
                    {user.email}
                </li>
            );
        });
    }

    render(){
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    //whatever is returned will show up as props
    //inside of BookList
    return{
        users: state.users
    };
}

export default connect(mapStateToProps)(UserList);