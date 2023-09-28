import React from 'react';

import { Link } from 'react-router-dom';

function Aboutpage(){
    return(
        <>
        <section className='about-showcase'>
            <div className='description'>
                <h1>
                    Meet The Residents
                </h1>
                <h2>
                    From The Front To The Back Of House
                </h2>

                <p>We find all of our staff, essential to our restaurant.</p>
                <p>From the cleaners who keep the plates and place in top shape to the cooks who uphold our standards for food quality.</p>
                <p>Everyone here deserves to be mentioned and named.</p>
            </div>
            <div className='chef-showcase'>
  
            </div>
        </section>

    <section className="process">
    <div className="container">
        <h2>Our Process</h2>
        <h3>Learn Our Day To Day</h3>
    </div>

    </section>

    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/dinner-menu">Dinner Menu</Link></li>
            <li><Link to="/guest-membership">Guest Membership</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default Aboutpage;