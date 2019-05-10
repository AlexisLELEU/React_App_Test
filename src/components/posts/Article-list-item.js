import React from 'react';
import { withRouter } from 'react-router-dom';

const ArticleListItem = (props) =>{
  const {
    object,
    onClick,
    onEdit
  } = props

  return (
    <li>
      <h3>{object.title}</h3>
      <p>{object.body}</p>
      <div className='containerButton'>
        <button className='button' onClick={onEdit} >Modifier</button>
        <button className='button' onClick={() => onClick()}>Suprimer</button>
      </div>
    </li>
  )
} 

export default withRouter(ArticleListItem);