import React from 'react'
import CV from '../../assets/cv.pdf'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
const CTA = () => {
  return (
    <>
    <div className="cta">
        <a href={CV} className='btn' download>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        <HeaderSocials/>
    </div>
    <div className="me">
        <img src={ME} alt="my-pic" />
    </div>
    </>
  )
}

export default CTA;
