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
    return (
      <div>
        {
          this.state.posts.map(post => {
            const commentsForPost = this.state.comments.filter(comment => comment.postId === post.id)
            return(
              <div key={post.id}>
                <h3>post: {post.title}</h3>
                { commentsForPost.map(comment => <div key={comment.id}><p>{comment.body}</p></div>)}
                <span>{commentsForPost.length} Comments</span>
              </div>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = ({myApp}) => ({myApp})
export default connect(mapStateToProps, {fetchposts, fetchcomments})(Posts)