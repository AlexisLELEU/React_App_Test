import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import ErrorForm from './../error/ErrorForm'
import {SUBMIT, EMPTY_FORM, API_URL, CONTENT_TYPE, METHODS, EDIT_POST} from './../../Constants'


class ArticleList extends Component {
  constructor(props){
    super(props)
    this.state = { };
  }

  _onSubmit = event => {
    event.preventDefault()
    const title = this.title.value
    const message = this.body.value
    const body = {
      id: this.props.idEdit,
      title: title,
      body: message
    }

    fetch(`${API_URL}/posts/${this.props.idEdit}`, {
      method: METHODS.put,
      body: JSON.stringify(body),
      headers: {
        "Content-type": CONTENT_TYPE
      }
    })
    .then(response => response.json())
    .then(json => {
      this.props.edit(json);
    });
    this.title.value=""
    this.body.value=""
  }


  render() {
    return (
      <div className='form'>
      <h3>{EDIT_POST}</h3>
      <form onSubmit={this._onSubmit}>
        <input
          ref={title => (this.title = title)}
          type="text"
          id="title"
        />
        <textarea
          ref={body => (this.body = body)}
        />
        <button className='button button__from' type="submit">{SUBMIT}</button>
        {this.state.error === true ? <ErrorForm errorMessage={EMPTY_FORM}/> : null}
      </form>
    </div>
    )
  }
}

export default withRouter(ArticleList);
