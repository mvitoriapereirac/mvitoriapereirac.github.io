import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from "react-icons/bs";


const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__hardskills">
          <h3>Languages</h3>
          <div className='experience__content'>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>JavaScript</h4>
            <small className='text-light'>Basic</small>
            </div>
            
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>React</h4>
            <small className='text-light'>Basic</small>
            </div>
            
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Swift</h4>
            <small className='text-light'>Experienced</small>
            </div>
            
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Python</h4>
            <small className='text-light'>Basic</small>
            </div>
           
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Java</h4>
            <small className='text-light'>Basic</small>
            </div>
            
          </article>
          </div>
        </div>
        <div className="experience__softskills">
        <h3>Other skills</h3>
        <div className='experience__content'>
        <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Agile</h4>
            <small className='text-light'>Scrum, Kanban, Lean</small>
            </div>
            
          </article>
          
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Prototyping tools</h4>
            <small className='text-light'>Whimsical, Figma</small>
            </div>
            
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Regular Expressions</h4>
            <small className='text-light'> </small>
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>English</h4>
            <small className='text-light'>Fluent </small>
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Fast learner</h4>
            <small className='text-light'>Good writer, better reader </small>
            </div>
          </article>

          </div>

        </div>
      </div>

    </section>
  )
}

export default Experience