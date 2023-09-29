import React, { useState } from 'react';
import siteIcon from '../assets/images/Logo.png'
import { Link } from 'react-router-dom';

function Nav(){
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    return(
        <>
 <header>
<div className="logo-nav container">

<div class="scrolling-words-container">
<div class="scrolling-words-box">
<ul>
<li>1800 S Main St, Roswell NY </li>
<li>575-627-0144</li>
<li>Opening Hours From 1:00pm - 10:00pm</li>
</ul>
</div>
</div>

    <div className="logo">
        <img src={siteIcon} alt="Le Bon Manges"/>
    </div>
    <div className="nav">
        <nav>
        <label>
        <input type="checkbox"/>
        <span class="menu"> <span class="hamburger"></span> 
        </span>
        <ul>
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/about">About Us</Link> </li>
        <li> <Link to="/menu">Menu</Link> </li>
        <li> <Link to="/guest-membership">Guest Membership</Link> </li>
        <li> <Link to="/contact">Contact</Link> </li>
        </ul>
        </label>
        </nav>
    </div>
</div>
</header>
    </>
  );
}

export default Nav;



