import React, { Component } from 'react';
import PostList from './PostList/posts_list'
import PostForm from './Form/posts_form'

export default class App extends Component {
  render() {
    return (
      <div>
        <PostForm/>
        <PostList/>
      </div>
    );
  }
}

