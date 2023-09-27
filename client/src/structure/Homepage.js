
import siteIcon from '../assets/images/Logo.png'
import orange from '../assets/images/orange-dishes.png'
import fish from '../assets/images/fish-dish.png'
import spaghetti from '../assets/images/spaghetti-dish.png'
import soup from '../assets/images/soup-dish.png'
import bun from '../assets/images/bun-dish.png'
import yellow from '../assets/images/yellow-dish.png'
import star from '../assets/images/star-dish.png'

let siteName = 'Patron';

function HomePage(){
return(
    <>

    <header>
        <div className="logo-nav container">
            <div className="information">
            <div className="store-info">
                <p>Welcome {siteName}</p>
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
                    <span className="menu"> <span className="hamburger"></span> </span>

                    </label>
                </nav>
            </div>
        </div>
        </header>

<section className="intro clearfix">
    <div className="showcase"></div>
</section>

<section className="section-two">

<div className="sectwo-header container">
      <h1>C&apos;est Le Bon Mange </h1>
      <h2>This Is<em>The Good Eats</em></h2>
      <hr/>
</div>

<div className="desc-gallery">



</div>

<div className="gallery-and-desc container">

<div className="description">
  <p>We welcome you to our new franchise expansion to the country. This restaurant is a part of the eight wordplay restaurant since 1963, originating from our head chef in France.</p>
      
  <p>
  But each of our restaurants carry out the same high quality, atmosphere, service and most importantly a palette surprise for everyone to remember.
  </p>

  <p>So please peruse around to your heart&apos;s content.</p>
</div>
<div className="gallery-container">
  <div className="carousel">
    <div className="carousel__face"></div>
    <div className="carousel__face"></div>
    <div className="carousel__face"></div>
    <div className="carousel__face"></div>
    <div className="carousel__face"></div>
    <div className="carousel__face"></div>
    <div className="carousel__face"></div>
    <div className="carousel__face"></div>
    <div className="carousel__face"></div>
  </div>
</div>
</div>
</section>

<section className="section-three">
            <div>
            <div className="sec-three-header container">
                <h2>Our Staff and Process</h2>
                <h3>From Prep To Platter</h3>
            </div>
            <div className="pllx-and-desc">
            <div className='home-parallax'></div>

            <p className='container sec-three-desc'>
                Our restaurant has always been full of people with different skill sets and hidden talents from veteran chefs to the new cooks and charismatic waiters to swift servers. Even our original founders were an unlikely combination. 
                <p>Here we value  creativity, talent, and most of all honesty to ourselves, our work, and those who enjoy our service.</p>
            </p>
            </div>
            </div>
        </section>

        <section className="section-four">
        <div className="slider-one">
        <div className="slider">
        <div className="slide-track">
            <div className="slide">
                <img src={orange} height="400" width="380" alt="" />
            </div>
            <div className="slide">
                <img src={fish} height="400" width="380" alt="" />
            </div>
            <div className="slide">
                <img src={spaghetti} height="400" width="380" alt="" />
            </div>
            <div className="slide">
                <img src={soup} height="400" width="350" alt="" />
            </div>
            <div className="slide">
                <img src={bun} height="400" width="350" alt="" />
            </div>
            <div className="slide">
                <img src={yellow} height="400" width="350" alt="" />
            </div>
            <div className="slide">
                <img src={star} height="400" width="350" alt="" />
            </div>
            <div className="slide">
                <img src={orange} height="400" width="380" alt="" />
            </div>
            <div className="slide">
                <img src={fish} height="400" width="380" alt="" />
            </div>
            <div className="slide">
                <img src={spaghetti} height="400" width="380" alt="" />
            </div>
            <div className="slide">
                <img src={soup} height="400" width="350" alt="" />
            </div>
            <div className="slide">
                <img src={bun} height="400" width="350" alt="" />
            </div>
            <div className="slide">
                <img src={yellow} height="400" width="350" alt="" />
            </div>
            <div className="slide">
                <img src={star} height="400" width="350" alt="" />
            </div>
          
          
            </div>
        </div>
    </div>

<div className="secfour-header container">
        <h2>View The Menu</h2>
        <h3>From Dinners to Desert</h3>
        <p>Look through our online menu of our selected and seasonal items. We have over <strong>40</strong> high quality dishes.  Curated, tested, and tasted from our wonderful chefs, waiters, and most importantly our wonderful patrons.</p>
</div>

            </section>


<footer>
 <form>
        <div className="container">
        <input type="email" id="email" placeholder="Email"/>
        <input type="password"  id="password" placeholder="Password"/>
        <input id="register" type="submit" value="Register"/>
        <input id="member" type="submit" value="Log In"/>
        </div>
    </form>

    <div className="store-info container">
                <p>Welcome {siteName}</p>
                <ul>
                    <li>1800 S Main St, Roswell NY </li>
                    <li>575-627-0144</li>
                    <li>Opening Hours From 1:00pm - 10:00pm</li>
                </ul>
            </div>

</footer>

    </>
)
}

export default HomePage;