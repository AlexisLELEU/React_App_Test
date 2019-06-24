import React, { Component } from 'react'
import {reduxForm, Field, getFormValues} from 'redux-form'
import { addPost, updatePost, setClearIsEdit } from '../../actions/index'
import { connect } from 'react-redux'
import TextField from '../Fields/TextField/index';
import { BUTTON, FORM } from '../../constant'

class PostForm extends Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
    const { 
      isEdit, 
      editPost, 
      clearEdit, 
      updatePost, 
      addNewPost,
      reset
    } = this.props

    const newPostData = {
      title: this.props[FORM.title],
      body: this.props[FORM.body]
    }

    if (isEdit) {
      newPostData.id = editPost.id;
      updatePost(newPostData)
      clearEdit();
    } else if (newPostData.title && newPostData.body) {
      addNewPost(newPostData)
    }
    reset();
  }

  render () {
    const { handleSubmit } = this.props
    return (
      <div className='formContainer'>
       <form name={FORM.name} onSubmit={handleSubmit(this.handleSubmit)}>
          <Field
            name={FORM.title}
            component={TextField}
            placeholder={FORM.title_placeholder}
            typeArea = "input"
          />
          <Field 
            name={FORM.body}
            component={TextField}
            typeArea = "textarea"
            placeholder={FORM.body_placeholder}
            onChange={this.handleChange}
          />
          <button className='button button__from' type='submit'>{BUTTON.add}</button>
        </form>
      </div>
    )
  }
}

const Form = reduxForm({
  form: FORM.name,
  enableReinitialize: true
})(PostForm)

const mapDispatchToProps = (dispatch) => {
  return {
    addNewPost: (dataPost) => dispatch(addPost(dataPost)),
    updatePost: (data) => dispatch(updatePost(data)),
    clearEdit: () => dispatch(setClearIsEdit()),
    dispatch
  }
}

const mapStateToProps = (state) => {
  const values = getFormValues(FORM.name)(state) || {};

  const { 
    dataPost: { 
      isEdit,
      editPost
    }
  } = state
  
  const initialValues = {
    title: editPost && editPost.title || '',
    body: editPost && editPost.body || ''
  }
  return {
    ...values,
    initialValues,
    isEdit,
    editPost
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);