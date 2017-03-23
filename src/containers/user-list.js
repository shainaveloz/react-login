import React, {Component} from 'react';
import {connect} from 'react-redux';


class UserList extends Component{
    renderList(){
        return this.props.users.map((user) => {
            return (
                <table
                    key={user.email}
                    className="table table-hover">
                    <thead>
                        <tr>
                            <th>Users:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.email}
                    </tbody>
                </table>
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