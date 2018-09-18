import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchposts} from '../actions/postApiActionCreators'
import {fetchcomments} from '../actions/commentApiActionCreators'

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: []
    }
  }
    
  componentWillMount() { 
    this.props.fetchposts().then(() => {
      this.props.fetchcomments( this.props.comments );
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      posts: nextProps.myApp.posts,
      comments: nextProps.myApp.comments
    })
  }
  render() {
    console.log(this.state.comments)
      return (
        <div>
          {
            this.state.posts.map(post => (
              <div>
                <h3>post: {post.title}</h3>
                {
                  this.state.comments.map((comment) => {
                    if(post.id === comment.postId) {
                      return ( <div>
                      <p>{comment.body}</p>
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
export default connect(mapStateToProps, {fetchposts, fetchcomments})(Posts)