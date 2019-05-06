import React, {Component} from 'react';
import ArticleList from './Article-list'
import {BrowserRouter, Route} from 'react-router-dom'
import PhotoList from './Photo-List';
import Header from './Header'



class App extends Component {
  constructor(props){
    super(props)
    this.state = {}

  }

  render (){
     return (
       <div>
        <Header/>
       </div>
     )
  }
}

export default App;
