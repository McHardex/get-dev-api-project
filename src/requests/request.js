import { getApi } from '../helpers/utils'

export default {
  getPosts(){
    return getApi('GET', 'https://jsonplaceholder.typicode.com/posts')
  },
  getcomments(){
    return getApi('GET', 'https://jsonplaceholder.typicode.com/comments')
  },
  getAlbums(){
    return getApi('GET', 'https://jsonplaceholder.typicode.com/albums')
  },
  getPhotos(){
    return getApi('GET', 'https://jsonplaceholder.typicode.com/photos')
  }
}
