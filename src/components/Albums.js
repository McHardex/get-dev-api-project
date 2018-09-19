import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchAlbums} from '../actions/albumsApiActionCreators'
import {fetchPhotos} from '../actions/photosApiActionCreators'
import AlbumDetails from './AlbumDetails';

class Albums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums : [],
      photos : [],
      isPhoto: false,
      isAlbum: false
    }
    this.albumImages = this.albumImages.bind(this)
    // this.toggleAlbum = this.toggleAlbum.bind(this)
    // this.showAlbumPhotos = this.showAlbumPhotos.bind(this)
  }
  
  // togglePhoto() {
  //   this.setState({
  //     isPhoto: !this.state.isPhoto,
  //   })
  //   // console.log(e.target.id)
  // }

  // toggleAlbum = (e) => {
  //   e.preventDefault()
  //   const id = e.target.id
  //   this.setState({ albumId: this.state.albumId === id ? null : id})
  // }

  componentWillMount() { 
    this.props.fetchAlbums()
    this.props.fetchPhotos()
  }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({
  //     albums: nextProps.myApp.albums,
  //     photos: nextProps.myApp.photos
  //   })
  // }

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