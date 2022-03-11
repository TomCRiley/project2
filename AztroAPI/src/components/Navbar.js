import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../assets/moon-image.png';

const Navbar = () => {
  return (
    <header>
      <nav className='navbar'>
        <div className='navbar-brand'>
          <div className='navbar-logo'>
            <img src={Image} id='main-logo-image' alt='logo' />
          </div>
          <Link className='navbar-item' to='/'>
            Home
          </Link>
          <Link className='navbar-item' to='/dailyhoroscope'>
            Daily Horoscope
          </Link>
          <Link className='navbar-item' to='about'>
            About
          </Link>
          <Link className='navbar-item' to='/register'>
            Register
          </Link>
          <Link className='navbar-item' to='/login'>
            Login
          </Link>
          {/* <Link to="horoscopeshow" >
              Card
            </Link> */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
