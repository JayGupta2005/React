import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div>
      <div className='nav'>
        <h2>Logo</h2>
        <div className='navRoute'>
          <Link to='/' >Home</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/about'>About</Link>
        </div> 
      </div>
    </div>
  )
}

export default Nav
