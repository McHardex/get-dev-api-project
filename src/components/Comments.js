import React, { Component } from 'react'

export default class Comments extends Component {
  constructor(props) {
    super(props)
    this.state = {showComments: false}

    this.toggleComments = this.toggleComments.bind(this)
    this.showComments = this.showComments.bind(this)
  }

  toggleComments(e) {
    e.preventDefault()
    this.setState({ showComments: !this.state.showComments })
  }
  
  showComments() {
    return(
      this.props.comments.map(comment => <div key={comment.id}><p className="w-100 text-justify border-bottom p-2">{comment.body}</p></div>)
    )
  }

  render() {
    return (
      <div>
        <button type="button" className="btn btn-primary mb-3" onClick={this.toggleComments}>
        comments <span className="badge badge-light">{this.props.comments.length}</span>
        </button>
        {this.state.showComments && this.showComments()}
      </div>
    )
  }
}
