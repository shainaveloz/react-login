import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import * as actions from '../actions';

class AdminUser extends Component {
    componentWillMount() {
        this.props.fetchUsers();
    }

    onExportToCSV() {
        return this.props.users;
    }

    render() {
        const selectRow = {
            cliclToSelct: true,
            clickToExpand: true
        };

        const options = {
            sortIndicator: false,
            onExportToCSV: this.props.onExportToCSV,
            onSearchChange: this.props.onSearchChange, clearSearch: true
        };
        return(
            <div>
                <BootstrapTable
                    data={this.props.users}
                    selectRow={ selectRow }
                    striped={true}
                    hover={true}
                    pagination
                    exportCSV={ true }
                    csvFileName='Happster-data.csv'
                    search={ true }
                    expandableRow={ this.isExpandableRow }
                    keyField={'lastAppActivityAt', 'createdAt'}
                    options={options}>
                    <TableHeaderColumn dataField="lastAppActivityAt" dataAlign="center" dataSort>Last Activity</TableHeaderColumn>
                    <TableHeaderColumn dataField="createdAt" dataSort>Created</TableHeaderColumn>
                    <TableHeaderColumn dataField="welcomeChallengeCompletionCount" dataSort>Challenges Completed</TableHeaderColumn>
                    <TableHeaderColumn dataField="email" dataSort>Email</TableHeaderColumn>
                    <TableHeaderColumn dataField="firstName" dataSort>First Name</TableHeaderColumn>
                    <TableHeaderColumn dataField="lastName" dataSort>Last Name</TableHeaderColumn>
                    <TableHeaderColumn dataField="title" dataSort>Title</TableHeaderColumn>
                    <TableHeaderColumn dataField="teamName" dataSort>Team</TableHeaderColumn>
                    <TableHeaderColumn dataField="isTeamOwner" dataSort>Team Owner?</TableHeaderColumn>
                    <TableHeaderColumn dataField="isTeamAdmin" dataSort>Team Admin?</TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    };
}

AdminUser.propTypes = {
    fetchUsers: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
    dateFormatter: PropTypes.func
};

export default connect(mapStateToProps, actions)(AdminUser);