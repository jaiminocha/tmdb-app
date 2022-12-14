import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='navbar-div'>
        <div className="logo">
            <img id='logo-img' src='./logo-video.png' alt='logo-img' />
              The <span id="spl-char">Movie</span> App
        </div>
        
        <div className="menus">
            <ul className='menu'>
                <li className='nav-item'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/watchlist'>Watchlist</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}
