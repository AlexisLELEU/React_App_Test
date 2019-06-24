import React from 'react';
import { connect } from 'react-redux'
import { setIsEdit } from '../../actions/index'
import { BUTTON } from '../../constant'


const PostListItem = (props) => {
  const {
    object
  } = props

  const deletePost = (post) => {
    props.deletePostCallback(post)
  }

  const editPost = (object) => {
    props.toEdit(object)
  }

  return (
    <li>
      <h3>{object.title}</h3>
      <p>{object.body}</p>
      <div className='containerButton'>
          <button className='button' onClick={() => deletePost(object)}>{BUTTON.delete}</button>
          <button className='button' onClick={() => editPost(object)}>{BUTTON.edit}</button>
      </div>
    </li>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    toEdit: (object) => dispatch(setIsEdit(object))
  }
}

export default connect(null, mapDispatchToProps)(PostListItem)