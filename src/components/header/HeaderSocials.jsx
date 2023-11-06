import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiCodechef} from 'react-icons/si'
const HeaderSocials = () => {
  return (
    <>
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/kamran-imaz-320826220" target='__blank'><BsLinkedin/></a>
      <a href="https://www.github.com/Kamran-imaz" target='__blank'><FaGithub/></a>
      <a href="https://www.naukri.com/mnjuser/profile?id=&altresid" target='__blank'><SiCodechef/></a>
    </div>
    <div className="scroll__down">
      <a href="#contact">scrolldown</a>
    </div>
    </>
  )
}

export default HeaderSocials
