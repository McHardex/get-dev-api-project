import React, { Component } from 'react'

const titleStyle = {
    cursor: 'pointer',
};

export default class AlbumDetails extends Component {
  constructor(props) {
    super(props)
    this.state = { showPhoto: false, showThumbnails: false }

    this.togglePhotos = this.togglePhotos.bind(this)
    this.toggleThumbnails = this.toggleThumbnails.bind(this)
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

  showAlbumPhotos() {
    return (
      this.props.images.map(image => {
      return ( 
        <img src={image.url}
        key={ image.id }
        alt={ image.title }
        className="rounded-circle w-25 h-25" />
      )
      })
    )
  }

  showThumbnails() {
    return (
      this.props.images.map(image => {
        return ( 
          <img src={image.thumbnailUrl}
          key={image.id}
          alt={image.title}
          className="rounded-circle img-thumbnail" />
        )
      })
    )
  }

  render() {
    const album = this.props.album
    return ( 
      <div className="shadow-sm p-3 mb-1 bg-white rounded w-75 mx-auto">
        <div>
          <h4 className="w-100 p-1" key={album.id} id={album.id} onClick ={this.togglePhotos}style={titleStyle}> 
            {album.title}
          </h4>
          {this.state.showPhoto && this.showAlbumPhotos()} 
        </div> 
        
        <div>
          <p> 
            <button type="button" className="btn btn-primary"onClick={this.toggleThumbnails}> 
            album thumnails</button>
          </p> 
          {this.state.showThumbnails && this.showThumbnails()} 
        </div> 
      </div>
    )
  }
}