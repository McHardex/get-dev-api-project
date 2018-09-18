import postRequests from '../requests/request'
import * as postConstants from '../constants/constants'

export const fetchposts = () => {
  return (dispatch) => {
    return (
      postRequests
        .getPosts()
        .then(response => response.json())
        .then(response => dispatch(fetchpostsSuccess(response)))
        .catch(error => console.log(error))
    )
  }
}

const fetchpostsSuccess = (result) => {
  return {
    type: postConstants.FETCH_POSTS_SUCCESS,
    post: result
  }
}



