import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <div className="fullstack__container">
          <h3 style={{color:"white"}}>Full Stack(MERN)</h3>
        </div>
        <div className="ml__container">
          <h3 style={{color:"white"}}>Machine Learning</h3>
        </div>
      </div>
    </section>
  )
}

export default Services
