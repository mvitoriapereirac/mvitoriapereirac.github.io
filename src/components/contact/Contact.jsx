import React from 'react'
import './contact.css'
import { MdOutlineMailOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import emailjs from 'emailjs-com';
import { useRef } from 'react';

 

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_iazz2mc', 'template_ksanwe1', form.current, 'kMg6CY04RfgVkc9tx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section id='contact'>

      <h5>Get in Touch</h5>
      <h2>Contact me</h2>

      <div className="container content__container">
        <div className="contact__options">
          <article className='contact__option'>
          <MdOutlineMailOutline className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>mvitoriapereirac@gmail.com</h5>
          <a href='mailto:mvitoriapereirac@gmail.com' target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
          <FaInstagram className='contact__option-icon'/>
          <h4>Instagram</h4>
          <h5>@vi.t.o.r.ia</h5>
          <a href='https://www.instagram.com/vi.t.o.r.ia/' target='_blank'>Send me a DM</a>
          </article>

          <article className='contact__option'>
          <BsLinkedin className='contact__option-icon' />
          <h4>LinkedIn</h4>
          <h5>in/mvitoriapereirac</h5>
          <a href='https://linkedin.com/in/mvitoriapereirac/' target='_blank'>Send me a message</a>
          </article>
          
          <article className='contact__option'>
          <FaWhatsapp className='contact__option-icon'/>
          <h4>WhatsApp</h4>
          <a href='http://api.whatsapp.com/send?phone=55081998854440' target='_blank'>Send me a message</a>
          </article>
        </div>



      

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full name' required/>
          <input type="email" name='email' placeholder='Your email' required/>
          <textarea name='message' rows={7} placeholder="Your message" required></textarea>
          <button type='submit' className='btn btn-primary'> Send message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact