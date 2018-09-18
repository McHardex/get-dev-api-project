import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchAlbums} from '../actions/albumsApiActionCreators'
import {fetchPhotos} from '../actions/photosApiActionCreators'

class Albums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums : [],
      photos : [],
      isPhoto: false,
      isAlbum: false
    }
    this.togglePhoto = this.togglePhoto.bind(this)
    this.toggleAlbum = this.toggleAlbum.bind(this)
  }
  
  togglePhoto() {
    this.setState({
      isPhoto: !this.state.isPhoto,
    })
    // console.log(e.target.id)
  }

  toggleAlbum = () => {
    this.setState({
      isAlbum: !this.state.isAlbum
    })
  }

  componentWillMount() { 
    this.props.fetchAlbums().then(() => {
      this.props.fetchPhotos( this.props.photos );
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      albums: nextProps.myApp.albums,
      photos: nextProps.myApp.photos
    })
  }

  render() {
    console.log(this.state.isPhoto)
    return (
      <div>
         {
            this.state.albums.map(album => (
              <div>
                <h3 key={album.id} id={album.id} onClick={this.togglePhoto} >Album title: {album.title}</h3>
                <p onClick={this.toggleAlbum}>album thumnails</p>
                {
                  this.state.photos.map((photo) => {
                    if(album.id === photo.albumId) {
                      return ( <div>
                      {this.state.isAlbum && <img src={photo.thumbnailUrl} alt={photo.title}/>}
                      {this.state.isPhoto && <img src={photo.url} alt={photo.title}/>}
                      </div>
                      )
                    }
                  })
                }
              </div>
            ))
          }
      </div>
    )
  }
}


const mapStateToProps = ({myApp}) => ({myApp})
export default connect(mapStateToProps, {fetchAlbums, fetchPhotos})(Albums)