import React from 'react';
import { Link } from 'react-router-dom';

function Aboutpage(){
    return(
        <>
        <section className='about container'>
            <div className='description'>
                <h1>
                    About Us
                </h1>
                <h2>
                Step into a world where time stands still.
                </h2>

                <p>At Le Bon Mange, we're dedicated to the art of culinary enchantment. Our mission is simple: to exceed your expectations with each visit.</p>

                <p>Every member of our team, from the chefs to the assisting staff, plays a pivotal role in crafting perfection. It's their unwavering dedication that ensures your visit is nothing short of remarkable. We believe that every person behind the scenes contributes to the excellence of the guest experience.</p>

                <p>
                Experience the artistry of French cuisine, reimagined with modern flair. Our Michelin-star chefs orchestrate every dish to create a harmonious symphony of flavors. Each visit to Les Bon Mange is an exploration of gourmet excellence.
                </p>
            </div>
            <div className='about-showcase'>
  
            </div>
        </section>

    <section className="staff">
    <div className="container">

    <div class="container">


  <div class="gallery-wrap">
    <div class="item item-1"></div>
    <div class="item item-2"></div>
    <div class="item item-3"></div>
    <div class="item item-4"></div>
    <div class="item item-5"></div>
  </div>
 </div>


        
        {/* <h2>Meet the Residence</h2>
        <h3>Head Chef: Pierre Leclair</h3>
            <p>Pierre Leclair, our esteemed Head Chef, is a culinary virtuoso with a passion for crafting exquisite French cuisine. With 8 years of intensive culinary training in the heart of France, Pierre honed his skills under the mentorship of renowned chefs. His culinary journey is steeped in tradition, and his creativity knows no bounds. Inspired by the flavors of his childhood, Pierre continues to create gastronomic masterpieces that redefine French dining.</p>
        <h3>Sous Chef: Isabelle Dubois</h3>
            <p>Isabelle Dubois, our Sous Chef, brings a wealth of culinary expertise to The Residence. Prior to joining our team, Isabelle had the privilege of working alongside the legendary Chef Antoine Michaud. Her culinary journey began in the bustling bistros of Paris, where she learned the art of balancing flavors and textures. Isabelle's commitment to perfection and her love for the culinary arts shine through in every dish she prepares.</p>
        <h3>Maître d'Hôtel: Jean-Pierre Martin</h3>
            <p>Jean-Pierre Martin, our Maître d'Hôtel, is your guide to a seamless dining experience at The Residence. With a background in hospitality that spans two decades, Jean-Pierre ensures that every guest feels welcome and pampered. His attention to detail and commitment to guest satisfaction are second to none. Jean-Pierre's warm demeanor and extensive knowledge of wine pairings elevate your evening to an unforgettable level.</p> */}
    </div>

    </section>

    {/* <nav>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/dinner-menu">Dinner Menu</Link></li>
        <li><Link to="/guest-membership">Guest Membership</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav> */}
    </>
  );
}

export default Aboutpage;