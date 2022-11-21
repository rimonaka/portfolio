import React from 'react'
import './certificate.css'
import LOGO1 from "../../assets/Work Evidence/University_of_Auckland_logo.png"
import LOGO2 from "../../assets/Work Evidence/iiba.png"
import LOGO3 from "../../assets/Work Evidence/SAMSUNG-internship.jpg"
import C1 from '../../assets/Work Evidence/Certificate of Outstanding Achievement.pdf'
import C2 from '../../assets/Work Evidence/IIBACertificate.pdf'
import C3 from '../../assets/Work Evidence/Woosung Kim Highly Commended Certificate.pdf'
import C4 from '../../assets/Work Evidence/Confirmation_graduation.pdf'
import C5 from '../../assets/Work Evidence/Academic_record.pdf'




const Certificate = () => {
  return (
    <section id="certificate">
      <h5>My Recent Qualification</h5>
      <h2>Certificate</h2>

      <div className="container certificate__container">
        <article className='certificate__item'>
          <div className="certificate__item-image">
            <img src={LOGO1} alt="" />
          </div>
          <h3>Certificate of Outstanding Achievement</h3>
          <a href={C1}target="_blank" rel="noopener noreferrer"className='btn'>View</a>

        </article>

        <article className='certificate__item'>
          <div className="certificate__item-image">
            <img src={LOGO2} alt="" />
          </div>
          <h3>Academic Certificate in Business Analysis</h3>
          <a href={C2}target="_blank" rel="noopener noreferrer"className='btn'>View</a>

        </article>

        <article className='certificate__item'>
          <div className="certificate__item-image">
            <img src={LOGO3} alt="" />
          </div>
          <h3>HIGHLY COMMENDED UNIVERSITY OF AUCKLAND MICRO-INTERNSHIP with SAMSUNG</h3>
          <a href={C3}target="_blank" rel="noopener noreferrer"className='btn'>View</a>

        </article>

        <article className='certificate__item'>
          <div className="certificate__item-image">
            <img src={LOGO1} alt="" />
          </div>
          <h3>Graduation Certificate</h3>
          <a href={C4}target="_blank" rel="noopener noreferrer"className='btn'>View</a>

        </article>

        <article className='certificate__item'>
          <div className="certificate__item-image">
            <img src={LOGO1} alt="" />
          </div>
          <h3>Academic Recard</h3>
          <a href={C5}target="_blank" rel="noopener noreferrer"className='btn'>View</a>

        </article>
      </div>
    </section>
  )

}

export default Certificate