import photoRequests from '../requests/request'
import * as photoConstants from '../constants/constants'

export const fetchPhotos = () => {
  return (dispatch) => {
    return (
      photoRequests
        .getPhotos()
        .then(response => response.json())
        .then(response => dispatch(fetchPhotosSuccess(response)))
        .catch(error => console.log(error))
    )
  }
}

const fetchPhotosSuccess = (result) => {
  return {
    type: photoConstants.FETCH_PHOTOS_SUCCESS,
    photo: result
  }
}



