import orange from '../assets/images/orange-dishes.png'
import fish from '../assets/images/fish-dish.png'
import spaghetti from '../assets/images/spaghetti-dish.png'
import soup from '../assets/images/soup-dish.png'
import bun from '../assets/images/bun-dish.png'
import yellow from '../assets/images/yellow-dish.png'
import star from '../assets/images/star-dish.png'

function SectionFour(){
    return(
        <>
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
        </>
    )
}

export default SectionFour;