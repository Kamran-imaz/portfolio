import React from 'react'
import CTA from './CTA'
import './header.css'
const Header = () => {
  return (
    <>
      <header>
        <div className="container header__container">
          <h5 style={{color:"white"}}>Hello I'm</h5>
          <h1 style={{color:"white"}}>Kamran Imaz</h1>
          <h5 className='text-light'>FullStack Web Developer</h5>
          <CTA/>
        </div>
      </header>
    </>
  )
}

export default Header
