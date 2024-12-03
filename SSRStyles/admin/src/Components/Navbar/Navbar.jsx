import React from 'react';
import './Navbar.css';
import navlogo from '../../assets/nav_logo.png';
import navProfile from '../../assets/nav-profile.svg';

export const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={navlogo} alt="Logo" className='nav-logo'/>
        <img src={navProfile} alt="" className='nav-profile' />
    </div>
  );
};

export default Navbar; 
