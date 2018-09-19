import userRequests from '../requests/request'
import * as userConstants from '../constants/constants'

export const fetchUsers = () => {
  return (dispatch) => {
    return (
      userRequests
        .getUsers()
        .then(response => response.json())
        .then(response => dispatch(fetchUsersSuccess(response)))
        .catch(error => console.log(error))
    )
  }
}

const fetchUsersSuccess = (result) => {
  return {
    type: userConstants.FETCH_USERS_SUCCESS,
    user: result
  }
}



