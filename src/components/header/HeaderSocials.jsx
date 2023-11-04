import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiCodechef} from 'react-icons/Si'
const HeaderSocials = () => {
  return (
    <>
    <div className='header__socials'>
      <a href="https://www.linkedin.com" target='__blank'><BsLinkedin/></a>
      <a href="https://www.github.com" target='__blank'><FaGithub/></a>
      <a href="https://www.naukri.com" target='__blank'><SiCodechef/></a>
    </div>
    <div className="scroll__down">
      <a href="#contact">scrolldown</a>
    </div>
    </>
  )
}

export default HeaderSocials
