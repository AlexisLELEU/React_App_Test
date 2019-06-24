import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPost, deletePost } from '../../actions/index'
import PostListItem from './post_listItem'

class PostList extends Component {
  constructor(props){
    super(props)
    this.state = {
      showPost: []
    }
  }

  componentWillMount() {
    const { myPost } = this.props
    myPost()
  }

  deletePostCallback(post){
    const { deletePost } = this.props
    deletePost(post.id)
  }

  render () {
    const { dataPost } = this.props
    return (
      <div>
        <ul className='dataList'>
          {
           dataPost && dataPost.map(post => {
            return (
              <PostListItem key={post.id} object={post} deletePostCallback={(post)=>this.deletePostCallback(post)}/>
            )
           })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dataPost: state.dataPost && state.dataPost.showPost
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    myPost: () => dispatch(getPost()),
    deletePost: (id) => dispatch(deletePost(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)