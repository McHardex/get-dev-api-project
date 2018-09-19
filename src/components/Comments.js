import React, { Component } from 'react'

export default class Comments extends Component {
  constructor(props) {
    super(props)
    this.state = { showComments: false }

    this.toggleComments = this.toggleComments.bind(this)
    this.showComments = this.showComments.bind(this)
  }

  toggleComments(e) {
    e.preventDefault()
    this.setState({ showComments: !this.state.showComments })
  }
  
  showComments() {
    return(
      this.props.comments.map(comment => <div key={comment.id}><p className="comments">{comment.body}</p></div>)
    )
  }

  render() {
    return (
      <div>
        <span className="noOfComments" onClick={this.toggleComments}>{this.props.comments.length} Comments</span>
        {this.state.showComments && this.showComments()}
      </div>
    )
  }
}
