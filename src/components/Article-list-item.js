import React from 'react'




const ArticleListItem = (props) =>{
    const {
      title, 
      body, 
      id,
      onClick
    } = props
    return (
      <li>
        <p>{id}</p>
        <p>{title}</p>
        <p>{body}</p>
        <button onClick={onClick}>delete</button>
      </li>
    )
} 

export default ArticleListItem