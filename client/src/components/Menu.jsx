import React from 'react'
import menuCover from '../assets/images/menuCover.png'
import menu1 from '../assets/images/menu1.png'
import menu2 from '../assets/images/menu2.png'
import leBonMenu from '../assets/images/leBonMenu.pdf'

const Menu = () => {
    return (
        <section id='menu'>
            <div id="menu__items">
                <img className='menu__image' src={menuCover} alt="menu page cover" />
                <img className='menu__image' src={menu1} alt="menu page 1" />
                <img className='menu__image' src={menu2} alt="menu page 2" />
            </div>
            <div id="downloadMenu__link">
                <a href={leBonMenu} download="leBonMenu">Download our Menu!</a>
            </div>
        </section>

    )
}

export default Menu