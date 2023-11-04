import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import { BsInstagram } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'
const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail style={{color:"white"}} className='contact__option-copy'/>
            <h4 style={{color:"white"}}>Email</h4>
            <h5 style={{color:"white"}}>Kamran Imaz</h5>
            <a href="mailto:kamranimaz.professional@gmail.com">Send a message</a>
          </article>

          <article className="contact__option">
            <BsInstagram style={{color:"white"}} className='contact__option-copy'/>
            <h4 style={{color:"white"}}>Instagram</h4>
            <h5 style={{color:"white"}}>kamran.imaz</h5>
            <a href="https://www.instagram.com/kamran.imaz" target='__blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp style={{color:"white"}} className='contact__option-copy'/>
            <h4 style={{color:"white"}}>Whatsapp</h4>
            <h5 style={{color:"white"}}>+91 6305620766</h5>
            <a href="https://api.whatsapp.com/send/?phone=6305620766" target='__blank'>Send a message</a>
          </article>
        </div>
        {/* End of Contact Options */}
        <form action="">
          <input type="text" name='name' placeholder='Your full name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" placeholder='Your Message' cols="30" rows="10" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
