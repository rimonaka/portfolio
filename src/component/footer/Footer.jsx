import React from 'react'
import './footer.css'
import {FaFacebookF} from "react-icons/fa"
import {FiInstagram} from "react-icons/fi"
const Footer = () => {
  return (
    <footer>
      <a href="#header" className='footer__logo'>WOOKI</a>
      <ul className="permalinks">
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experiemce">Experience</a></li>
        <li><a href="#certificate">Certificate</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      
      <div className="footer__socials">
        <a href="https://www.facebook.com/people/Woosung-Kim/100009575138367/"><FaFacebookF/></a>
        <a href="https://www.instagram.com/kimwoosung1123/"><FiInstagram/></a>
       
      </div>

      <div className="footer__copyright">
        <small>&copy; WOOKI(my nickname). All rights reserved.</small>
      </div>



    </footer>
  )
}

export default Footer