import React from 'react'
import './about.css'
import ME from '../../assets/about-me.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {BsDoorOpen} from 'react-icons/bs'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Me!" />
          </div>
          

        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icons'/>
              <h5>Experience</h5>
              <small>Just graduated from UoA!</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icons'/>
              <h5>Clients</h5>
              <small>Will be a lot in the future!</small>
            </article>
            <article className='about__card'>
              <BsDoorOpen className='about__icons'/>
              <h5>Internship</h5>
              <small>SAMSUNG, Kalessi bathroomware</small>
            </article>
          </div>
          <p>
              Hello! My name is Woosung Kim from Japan. I am 22 and just graduated from Univerisity of Auckland on September 2022. I did some internship as a technology consultannt and data analyst at SAMSUNG and Kalessi Bathroomware.
              I studied Computer Science and Information System And Technology Management. My desired position as a graduate/Junior roll is a FrontEnd Engineer/Developer as I cannot forget the joy of creating frontend UI during University.
          </p>

            <a href="#contact" className='btn btn-primary'>Let'stalk</a>

        </div>
      </div>
    </section>
  )
}

export default About