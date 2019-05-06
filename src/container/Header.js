import React, {Component} from 'react';
import ArticleList from './Article-list'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import PhotoList from './Photo-List';
import ErrorRouter from '../components/ErrorRouter'
import Navigation from '../components/Navigation';



class App extends Component {
  constructor(props){
    super(props)
    this.state = {}

  }

  render (){
     return (
       <div>
          <BrowserRouter>
            <div>
              <Navigation/>
              <Switch>
                <Route path='/' component={ArticleList} exact/>
                <Route path='/photo' component={PhotoList}/>
                <Route component={ErrorRouter}/>
              </Switch>
            </div>
          </BrowserRouter>

       </div>
     )
  }
}

export default App;
