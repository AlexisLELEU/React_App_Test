import React, {Component} from 'react'
import ArticleListItem from '../components/Article-list-item';

import {API_URL, METHODS} from '../Constants'


class ArticleList extends Component {


    constructor(props){
        super(props)
        this.state = {data: []};

        this.handleClick = this.handleClick.bind(this);
    }

    async handleClick(index) {
      const { data } = this.state;
      const response = await fetch(`${API_URL}/posts/${index}` , {
        method: METHODS.delete
      });
      
      if (response.status === 200) {
        const filterData = data.filter(item => item.id !== index);
  
        this.setState({
          data: filterData
        });
      }
    }

    async componentDidMount () {
      try{
        const response = await fetch (`${API_URL}/posts?_limit=10`);
        const json = await response.json();
        this.setState({data: json})
      } catch (error){
        console.log("ERROR" + error)
      }
    }
  

    render() {
      
    if(this.state.data !== []){
      return (
        
        <div>
          <ul>
              {this.state.data.map(el => (
                  <ArticleListItem 
                    key={el.id} 
                    title={el.title} 
                    body={el.body} 
                    id={el.id}
                    onClick={() => this.handleClick(el.id)}
                  />
              ))}
            </ul>    
        </div>
      )
    }
  }
}

export default ArticleList




  