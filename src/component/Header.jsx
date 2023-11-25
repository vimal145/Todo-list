import React from 'react'
import {Link} from 'react-router-dom'

const Header = (props) => {
  return (
    <>
        <h1 className='heading'>{props.heading}</h1>
        <div className='navLinks'>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/user/tempId">User</Link>
        </div>
    </>
  )
}

export default Header