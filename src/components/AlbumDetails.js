import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import {fetchAlbums} from '../actions/albumsApiActionCreators'
// import {fetchPhotos} from '../actions/photosApiActionCreators'
// import Albums from './AlbumDetails';

export default class AlbumDetails extends Component {
  constructor(props) {
    super(props)
    this.state = { showPhoto: false, showThumbnails: false }

    this.togglePhotos = this.togglePhotos.bind(this)
    this.toggleThumbnails = this.toggleThumbnails.bind(this)
    // this.toggleAlbum = this.toggleAlbum.bind(this)
    this.showAlbumPhotos = this.showAlbumPhotos.bind(this)
  }

  togglePhotos(e) {
    e.preventDefault()
    this.setState({ showPhoto: !this.state.showPhoto })
  }
  
  toggleThumbnails(e) {
    e.preventDefault()
    this.setState({ showThumbnails: !this.state.showThumbnails })
  }

  // toggleAlbum = (e) => {
  //   e.preventDefault()
  //   const id = e.target.id
  //   this.setState({ albumId: this.state.albumId === id ? null : id})
  // }

  // componentWillMount() {
  //   this.props.fetchAlbums()
  //   this.props.fetchPhotos()
  // }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({
  //     albums: nextProps.myApp.albums,
  //     photos: nextProps.myApp.photos
  //   })
  // }

  showAlbumPhotos() {
    return(
      this.props.images.map(image => {
        return(
          <img src={image.url} key={image.id} alt=''/>
        )
      })
    )
  }

  showThumbnails() {
    return(
      this.props.images.map(image => {
        return(
          <img src={image.thumbnailUrl} key={image.id} alt=''/>
        )
      })
    )
  }

  render() {
    const album = this.props.album
    return (
      <div>
        <div>
          <h3 key={album.id} id={album.id} onClick={this.togglePhotos} >Album title: {album.title}</h3>
          {this.state.showPhoto && this.showAlbumPhotos()}
        </div>
        <div>
          <a  href='' onClick={this.toggleThumbnails} id={album.id}>album thumnails</a>
          {this.state.showThumbnails && this.showThumbnails()}
        </div>
      </div>
    )
  }
}


// const mapStateToProps = ({myApp}) => ({myApp})
// export default connect(mapStateToProps, {})(AlbumDetails)