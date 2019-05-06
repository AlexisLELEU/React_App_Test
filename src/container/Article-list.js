import React, {Component} from 'react'


class ArticleList extends Component {

    

    constructor(props){
        super(props)
        this.state = {
            list: this.props.list
        }
      }

      

      render() {
          return (
                <div>
                    {console.log(this.props.list)}
                    
              </div>
          )
      }

}

export default ArticleList

// {this.state.data.map(el => (
//     <li>
//       {el.title}
//     </li>
//   ))}


  