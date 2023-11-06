import React from 'react'
import CV from '../../assets/kamran_imaz_resume.pdf'
// import ME from '../../assets/me.png'
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
        {/* <img src={ME} alt="my-pic" /> */}
        <p>"Designing with passion and Coding with creativity" - Kamran Imaz</p>
    </div>
    </>
  )
}

export default CTA;
