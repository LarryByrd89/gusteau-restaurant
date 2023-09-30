import React from 'react'

import menu from '../assets/images/menu-alt.png'

const Menu = () => {
    return (
        <section id='menu' className='container'>
            <div className='menu-header'>
                <h1>Come Peruse Our Menu</h1>
                <h2>See This Season's Specialty</h2>
    
                <p>We Try To Serve New Items Now And Again. We Thrive For New Experiences For Our Chefs And Patrons To Try. </p>
                <a id="menu-download" href={menu} download="leBonMenu">Download Our Menu Here!</a>
            </div>
            <div className='menu-scroll'>
                <img className='alt-menu' src={menu} alt=''/>
            </div>

        </section>

    )
    }