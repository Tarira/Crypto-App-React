import React from 'react'
import {Link} from 'react-router-dom'

function Navigation() {
  return (
    <div className="navigation">
        <ul className="nav-bar">
            <li><Link to='/mainpage'>Main Page</Link></li>
            <li><Link to='/cryptonews'>Crypto news</Link></li>
            <li><Link to='/aboutus'>About us</Link></li>
            <li><Link to='/contact'>Contact</Link></li>

        
        </ul>
    </div>
  )
}

export default Navigation