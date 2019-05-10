import React, {Component} from 'react';
import Navigation from './Navigation'
import {MAIN_TITLE, MY_NAME} from '../../Constants'

class Header extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render (){
     return (
      <div className='header'>
        <h1>{MAIN_TITLE}</h1>
        <h2>{MY_NAME}</h2>
        <Navigation/>
      </div>
     )
  }
}

export default Header;
