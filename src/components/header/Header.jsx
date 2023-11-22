import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from "../../Assets/ME.png"
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header>
        <div className="container header__container">

        <h5>Hello, I'm</h5>
        <h1>Maria Vitória</h1>
        <h5 className="text-light">iOS Developer</h5>
        <CTA/>
        <HeaderSocials />
        <div className="me">
            <div className='gradient'></div>
            <img src={ME} className="profile__img" alt="me"/>

        </div>

        <a href='#contact' className='scroll__down'>Scroll down</a>
        </div>

    </header>
  )
}

export default Header