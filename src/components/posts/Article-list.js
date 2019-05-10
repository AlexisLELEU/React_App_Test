import React, {Component} from 'react'
import ArticleListItem from './Article-list-item'
import Loader from '../loader/loader';
import AddPost from './AddPost';
import {API_URL, METHODS, LIMIT} from '../../Constants'
import EditForm from './EditForm';

class ArticleList extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: [],
      loader: false,
      isUpdate: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount () {
    this.setState({
      loader: true
    });

    try{
      const response = await fetch (`${API_URL}/posts${LIMIT}`);
      const json = await response.json();
      this.setState({
        data: json,
        loader: false
      })
    } catch (error){
      console.log("ERROR: " + error)
    }
  }

  async handleClick(index) {
    const { data } = this.state;
    const response = await fetch(`${API_URL}/posts/${index}` , {
      method: METHODS.delete
    });
    
    if (response.status === 200) {
      const filterData = data.filter(item => item.id !== index)
      this.setState({
        data: filterData
      });
    }
  }

  _addArticle = tab => {
    this.setState({
      loader: false,
      data: [...this.state.data, tab]
    });
  }

  _updateArticle = upd => {
    const filter = this.state.data.filter(item => item.id === upd.id)
    console.log(upd.id)
    console.log(filter[0].id)
    if(upd.title){
      filter[0].title = upd.title
    }
    if(upd.body){
      filter[0].body = upd.body
    }
    fetch(`${API_URL}/posts/${upd.id}`, {
      method: METHODS.delete
    })

    this.setState({
      data: [...this.state.data, filter[0]]
    })
  }

  _editArticle = id => {
    this.setState({
      editId: id,
      isUpdate: true
    })
  }

  render() {
    if (this.state.loader) {
      return <Loader />
    }
    const data = this.state.data
    if(data !== []) {
      
      return (
        <div className=''>
        { this.state.isUpdate ? (
          <EditForm 
            edit={this._updateArticle}
            idEdit={this.state.editId}
          /> 
        ) : (
        <AddPost 
            addArticle={this._addArticle}
          />
        )}
        <ul className='dataList'>
            {data.map(el => {
              return (
                <ArticleListItem
                  key={el.id}
                  object={el}
                  onEdit={() => this._editArticle(el.id)}
                  onClick={() => this.handleClick(el.id)}
                />
              )
            })}
          </ul>    
        </div>
      )
    }
  }
}

export default ArticleList




  