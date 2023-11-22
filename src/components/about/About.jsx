import React from 'react'
import './about.css'
import ME from '../../Assets/me-about2.JPG'
import { MdWorkHistory } from "react-icons/md";
import { GiMultiDirections, GiMultipleTargets } from "react-icons/gi";
import { MdOutlineGroups3 } from "react-icons/md";
import { GiLaurelsTrophy } from "react-icons/gi";




const about = () => {
  return (
    <section id="about">
        <h5>get to know me</h5>
        <h2>About</h2>


        <div className="container about__container">
        <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="me-about" />
        </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <MdWorkHistory className='about__icon'/>
              <h5>Experience</h5>
              <small>2 years working</small>

            </article>

            <article className='about__card'>
              <GiMultipleTargets className='about__icon'/>
              <h5>Cross disciplinary</h5>
              <small>Code - UX design - Psychology</small>

            </article>

            <article className='about__card'>
              <MdOutlineGroups3 className='about__icon'/>
              <h5>Team player</h5>
              <small>10+ group projects completed</small>

            </article>

            <article className='about__card'>
              <GiLaurelsTrophy className='about__icon'/>
              <h5>Recognition</h5>
              <small>Apple's Swift Student Challenge 2023 winner</small>

            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident repellendus unde corporis odio in similique aliquid et libero. Ex vel officiis fugiat sapiente illum, laboriosam earum! Earum fuga nobis obcaecati.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's talk!</a>
        </div>

        </div>

    </section>
  )
}

export default about