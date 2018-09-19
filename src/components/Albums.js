import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchAlbums} from '../actions/albumsApiActionCreators'
import {fetchPhotos} from '../actions/photosApiActionCreators'
import AlbumDetails from './AlbumDetails';

class Albums extends Component {
  constructor(props) {
    super(props);
    this.state = { albums : [] }
    this.albumImages = this.albumImages.bind(this)
  }
 
  componentWillMount() { 
    this.props.fetchAlbums()
    this.props.fetchPhotos()
  }

  albumImages(albumId) {
    const imagesArray = [].concat.apply([],  this.props.myApp.photos)

    const images = imagesArray.filter(photo => photo.albumId === albumId)
    return images
  }

  render() {
    return this.props.myApp.albums.map(album => <AlbumDetails album={album} images={this.albumImages(album.id)} key={album.id}/>) 
  }
}


const mapStateToProps = ({myApp}) => ({myApp})
export default connect(mapStateToProps, {fetchAlbums, fetchPhotos})(Albums)