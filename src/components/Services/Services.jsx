import React from 'react'
import './services.css'
import { BiCheck } from "react-icons/bi";


const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
          <h3>Development for Apple Ecosystem</h3>

          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p> iOS </p>

            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p> watchOS </p>

            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> macOS </p>

            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> tvOS </p>

            </li>
            
          </ul>

        </article>
        <article className='service'>
          <div className="service__head">
          <h3>Apple frameworks</h3>

          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p> UIKit </p>

            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p> SwiftUI </p>

            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> RealityKit </p>

            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> SpriteKit </p>

            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> CoreData </p>

            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Many more </p>

            </li>
          </ul>

        </article>

        <article className='service'>
          <div className="service__head">
          <h3>Other aspects</h3>

          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p> MVVM Architecture </p>

            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p> MVC Architecture </p>

            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Unity Framework integration </p>

            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Firebase Analytics </p>

            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Back-End integration </p>

            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p> User Stories </p>

            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p> Wireframes </p>

            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Lo-fi and Mid-fi Prototyping </p>

            </li>
          </ul>

        </article>
      </div>
    </section>
  )
}

export default Services