import React from 'react'

const PhotoListItems = (props) => {
  const {url, title, onClick} = props
  return(
    <li className='itemPhoto'>
      <img src={url} arl={title}/>
      <p>{title}</p>
      <div className='containerButton'>
        <button className='button' onClick={onClick}>delete</button>
      </div>
    </li>
  )
}

export default PhotoListItems