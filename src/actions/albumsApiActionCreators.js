import albumRequests from '../requests/request'
import * as albumConstants from '../constants/constants'

export const fetchAlbums = () => {
  return (dispatch) => {
    return (
      albumRequests
        .getAlbums()
        .then(response => response.json())
        .then(response => dispatch(fetchAlbumsSuccess(response)))
        .catch(error => console.log(error))
    )
  }
}

const fetchAlbumsSuccess = (result) => {
  return {
    type: albumConstants.FETCH_ALBUMS_SUCCESS,
    album: result
  }
}



