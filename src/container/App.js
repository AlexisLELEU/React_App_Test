import React, {Component} from 'react';
import ArticleList from './Article-list'



const API_URL = 'https://jsonplaceholder.typicode.com/'

class App extends Component {


  constructor(props){
    super(props)
    this.state = {data: []}
  }

  // fetch('https://jsonplaceholder.typicode.com/todos/1')
  // .then(response => response.json())
  // .then(json => console.log(json))


  async componentDidMount () {
    const response = await fetch (API_URL + 'posts');
    const json = await response.json();
    this.setState({data: json})
  }

  render (){
   if (this.state.data != null){
     return (
       <div>
         <ArticleList list = {this.state.data}/>
       </div>
     )
   } else {
     return (
       <h1>nope</h1>
     )
   }
  }
}

export default App;
