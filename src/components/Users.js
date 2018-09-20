import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchUsers} from '../actions/usersApiActionCreators'


class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],

    }
  }
    
  componentWillMount() { 
    this.props.fetchUsers()
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      users: nextProps.myApp.users,
    })
  }
  render() {
    return (
      <div>
        {
          this.state.users.map(user => (
            <div key={user.id} className="shadow-sm p-3 mb-2 bg-white rounded w-75 mx-auto">
              <p className="">USERNAME: {user.username}</p> 
              <p>NAME: {user.name}</p>
              <p>EMAIL: {user.email}</p>
              <p>PHONE NUMBER: {user.phone}</p>
              <p>ADDRESS: {user.address.street}</p>
            </div>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = ({myApp}) => ({myApp})
export default connect(mapStateToProps, {fetchUsers})(Users)