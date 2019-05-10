import React, {Component} from 'react';
import ArticleList from './components/posts/Article-list'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import PhotoList from './components/photo/Photo-List';
import ErrorRouter from './components/error/ErrorRouter'
import EditForm from './components/posts/EditForm';
import Header from './components/header/Header';

class Router extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render (){
    return (
      <div className='router'>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path='/' component={ArticleList} exact/>
              <Route path='/photo' component={PhotoList}/>
              <Route path='/edit/:id' component={EditForm}/>
              <Route component={ErrorRouter}/>
            </Switch>
          </div>
        </BrowserRouter>

      </div>
    )
  }
}

export default Router;
