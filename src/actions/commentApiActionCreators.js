import commentRequests from '../requests/request'
import * as commentConstants from '../constants/constants'

export const fetchcomments = () => {
  return (dispatch) => {
    return (
      commentRequests
        .getcomments()
        .then(response => response.json())
        .then(response => dispatch(fetchcommentsSuccess(response)))
        .catch(error => console.log(error))
    )
  }
}

const fetchcommentsSuccess = (result) => {
  return {
    type: commentConstants.FETCH_COMMENTS_SUCCESS,
    comment: result
  }
}



