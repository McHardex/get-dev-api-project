import * as AppConstants from '../constants/constants'

const initalState = {
  posts: [],
  comments: [],
  albums: [],
  photos: [],
  users: []
}

export const myApp = (state = initalState, action) => {

  switch(action.type) {
    case AppConstants.FETCH_POSTS_SUCCESS:
      return {...state, posts: action.post}
    case AppConstants.FETCH_COMMENTS_SUCCESS:
      return {...state, comments: action.comment}
    case AppConstants.FETCH_ALBUMS_SUCCESS:
      return {...state, albums: action.album}
    case AppConstants.FETCH_PHOTOS_SUCCESS:
      return {...state, photos: action.photo}
    case AppConstants.FETCH_USERS_SUCCESS:
      return {...state, users: action.user}
    default:
      return state
  }
}