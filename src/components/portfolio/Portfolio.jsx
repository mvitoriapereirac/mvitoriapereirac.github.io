import React from 'react'
import './portfolio.css'
import heads from '../../Assets/heads-musicapp.png'
import MusicMood from '../../Assets/MusicMood.jpg'
import FuraBolo from '../../Assets/FuraBolo.png'
import FaceReality from '../../Assets/FaceReality.png'
import Naia from '../../Assets/Naia-logo.png'
import WavePong from '../../Assets/Wave-Pong.png'




const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={heads} alt="heads" className='heads-img' />

        </div>
        <h3>Music Does Not Exist</h3>
        <ul>
          <li>
            🏆 Swift Student Challenge 2023 Winner
          </li>
        </ul>
        <small> This is a personal project that discusses music and phenomenology through a projective test simulation. Soon to be available on App Store.</small>

        <div className="portfolio__item-cta">
          <a href='https://github.com/mvitoriapereirac/WWDC23-MusicDoesNotExist/' className='btn'>Github</a>
          <a href='https://vimeo.com/885967434?share=copy' className='btn btn-primary' target="_blank">Live demo</a>
        </div>
      </article>
      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={MusicMood} alt="heads"  />

        </div>
        <h3>MusicMood</h3>
        <small> This personal project is made with SwiftUI, integrates with Spotify Web API and includes unit testing.</small>

        <div className="portfolio__item-cta">

          <a href='https://github.com/mvitoriapereirac/SpotifyApp' className='btn'>Github</a>
          <a href="https://vimeo.com/885845467?share=copy" className='btn btn-primary'>Live demo</a>
        </div>
      </article>
      <article className='portfolio__item'>
        <div className="portfolio__item-image-fr">
          <img src={FaceReality} alt="heads" className="portfolio__item-image"/>

        </div>
        <h3>Face Reality</h3>
        <small> This app is maintained by a team which I'm part of. We've implemented Unity integration for an optimized experience. It is available on App Store.</small>

        <div className="portfolio__item-cta">

          <a href='https://github.com/hibianca/FaceReality' className='btn'>Github</a>
          <a href='https://vimeo.com/887269036?share=copy' className='btn'>Live demo</a>
          

        </div>
        <a href='https://apps.apple.com/br/app/face-reality/id6452017308' className='btn btn-primary'>App Store</a>

      </article>
      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={MusicMood} alt="heads" />

        </div>
        <h3>Luna</h3>
        <small> This app is maintained by a team which I'm a part of. I've programmed it in its v1, as well as had a major role in the ideation process. It is available on App Store.</small>

        <div className="portfolio__item-cta">

          <a href='https://github.com/Sofiamdl/ProCycle' className='btn'>Github</a>
          <a href='https://github.com/' className='btn'>Live demo</a>

        </div>
        <a href='https://apps.apple.com/br/app/luna-sintonize-seu-ciclo/id6453293872' className='btn btn-primary'>App Store</a>

      </article>
      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={Naia} alt="heads" />

        </div>
        <h3>Naiá</h3>
        <small> This app was built by a team which I'm a part of. I've programmed the Client-side, as well as had a major role in the ideation process.</small>

        <div className="portfolio__item-cta">

          <a href='https://github.com/Sofiamdl/brokenTelephone' className='btn'>Github</a>
          <a href='https://vimeo.com/885824097?share=copy' className='btn btn-primary'>Live demo</a>

        </div>
      </article>
      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={WavePong} alt="heads" />

        </div>
        <h3>Wave Pong</h3>
        <small> This app was built by a team which I'm a part of. I've had contact with SpriteKit, as well as coded in SwiftUI. Its 2nd version is available on App Store.</small>

        <div className="portfolio__item-cta">

          <a href='https://github.com/rinaldosbj/WavePong' className='btn'>Github</a>
          <a href='https://vimeo.com/885854969?share=copy' className='btn'>Live demo</a>

        </div>
        <a href='https://apps.apple.com/br/app/wave-pong/id6444109159' className='btn btn-primary'>App Store</a>

      </article>
      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={FuraBolo} alt="heads" />

        </div>
        <h3>Fura Bolo</h3>
        <small> This is a frontend project, designed by a team and programmed with View Code and UIKit, almost entirely by me. The server-side is on its way! </small>

        <div className="portfolio__item-cta">
          <a href='https://github.com/MarianeVilarim/ChallengeParis' className='btn'>Github</a>
          <a href='https://vimeo.com/885856993?share=copy' className='btn btn-primary'>Live demo</a>
        </div>
      </article>
      </div>

    </section>
  )
}

export default Portfolio