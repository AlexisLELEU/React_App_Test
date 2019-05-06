import React from 'react'
import {NavLink} from 'react-router-dom'

const Navigation = () => {
    return (
        <div>
           <NavLink to='/'>Article</NavLink>
           <NavLink to='/photo'>Photo</NavLink>
        </div>
    )
}

export default Navigation