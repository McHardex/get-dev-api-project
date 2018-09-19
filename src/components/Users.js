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
              <div key={user.id}>
                <h2>USERNAME: {user.username}</h2>
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