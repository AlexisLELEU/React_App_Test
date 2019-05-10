import React, {Component} from 'react';
import PhotoListItems from './Photo-list-items'
import {API_URL, LIMIT, METHODS} from '../../Constants'
import Loader from '../loader/loader';

class PhotoList extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: [],
      loader: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick(index) {
    const { data } = this.state;
    const response = await fetch(`${API_URL}/photos/${index}` , {
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
    this.setState({
      loader: true
    })
      try{
        const response = await fetch (`${API_URL}/photos${LIMIT}`);
        const json = await response.json();
        this.setState({
          data: json,
          loader: false
        })
      } catch (error){
        console.log("ERROR" + error)
      }
    }

  render(){
    if(this.state.data !== []){
      if(this.state.loading == true){
        return <Loader/>
      } else {
        return (
          <ul className='dataList'>
            {this.state.data.map(el => (
              <PhotoListItems 
                key={el.id} 
                title={el.title} 
                url={el.url} 
                onClick={() => this.handleClick(el.id)}/>
            ))}
          </ul>
        )
      }
    }
  }
} 

export default PhotoList