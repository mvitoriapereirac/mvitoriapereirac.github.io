import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGitSquare } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";




const HeaderSocials = () => {
  return (
    <div className='header__socials'> 
    <a href='https://linkedin.com/in/mvitoriapereirac' target="_blank"><BsLinkedin /></a>
    <a href='https://github.com' target="_blank"><FaGitSquare /></a>
    <a href='https://dribble.com' target="_blank"><FiDribbble /></a>


    </div>
  )
}

export default HeaderSocials