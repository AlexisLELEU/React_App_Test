import React from 'react'
import {NavLink} from 'react-router-dom'
import {ARTICLE, PHOTO} from '../../Constants'

const Navigation = () => {
  return (
    <div className='navigation'>
      <NavLink to='/'>{ARTICLE}</NavLink>
      <NavLink to='/photo'>{PHOTO}</NavLink>
    </div>
  )
}

export default Navigation