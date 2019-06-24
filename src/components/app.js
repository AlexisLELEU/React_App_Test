import React, { Component } from 'react';
import PostList from './PostList/posts_list'
import PostForm from './Form/posts_form'
import { PROJECT_TITLE } from '../constant'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>{PROJECT_TITLE}</h1>
        <PostForm/>
        <PostList/>
      </div>
    );
  }
}