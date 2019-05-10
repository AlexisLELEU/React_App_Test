import React, { Component } from "react";
import ErrorForm from '../error/ErrorForm'
import uid from 'uid'
import {
  EMPTY_FORM, 
  PLACEHOLDER_TITLE,
  PLACEHOLDER_CONTENT,
  SUBMIT,
  API_URL, 
  METHODS,
  CONTENT_TYPE,
  ADD_POST
} from '../../Constants'

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    }
  }

  _onSubmit = event => {
    event.preventDefault();
    const title = this.title.value;
    const message = this.body.value;
    const body = {
      id: uid(),
      title,
      body: message
    }

    fetch(`${API_URL}/posts`, {
      method: METHODS.post,
      body: JSON.stringify(body),
      headers: {
        "Content-type": CONTENT_TYPE
      }
    })
    .then(response => response.json())
    .then(json => {
      return this.props.addArticle(json)
    });
  }

  render() {
    return (
      <div className='form'>
        <h3>{ADD_POST}</h3>
        <form onSubmit={event => this._onSubmit(event)}>
          <input
            ref={title => (this.title = title)}
            type="text"
            id="title"
            placeholder={PLACEHOLDER_TITLE}
          />
          <textarea
            ref={body => (this.body = body)}
            placeholder={PLACEHOLDER_CONTENT}
          />
          <button className='button button__from' type="submit">{SUBMIT}</button>
          {this.state.error === true ? <ErrorForm errorMessage={EMPTY_FORM}/> : null}
        </form>
      </div>
    );
  }
}
  
  export default AddPost;
  