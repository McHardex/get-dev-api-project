import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchposts} from '../actions/postApiActionCreators'
import {fetchcomments} from '../actions/commentApiActionCreators'
import '../Assets/stylesheets/posts.css'
import Comments from './Comments'


class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: []
    }
  }
    
  componentWillMount() { 
    this.props.fetchposts()
    this.props.fetchcomments()
  }

  render() {
    const posts = this.props.myApp.posts
    return (
      <div>
        {
          posts.map(post => {
            const commentsForPost = this.props.myApp.comments.filter(comment => comment.postId === post.id)
            return(
              <div key={post.id} className="shadow-sm p-2 mb-2 bg-white rounded w-50 mx-auto">
                <button type="button" className="btn btn-outline-none"><h3>{post.title}</h3></button>
                <Comments comments={commentsForPost} />
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