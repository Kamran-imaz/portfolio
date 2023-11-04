import React from "react";
import ME from "../../assets/me-about.jpg";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about" className="text-light">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Education</h5>
              <small>B.Tech Undergrad 3rd year IT</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Hackathons</h5>
              <small>Participated in 2 Hackathons</small>
            </article>
            <article className="about__card">
            <VscFolderLibrary className="about__icon" />
            <h5>Projects</h5>
          </article>
          </div>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus et
          iste neque repellendus quibusdam quod sequi at porro ratione cum sint
          atque sunt, incidunt distinctio tempore est maxime. Dolores soluta
          ratione excepturi repellat libero!.
        </p>
        <a href="#contact" className="btn btn-primary">
          Let's Talk
        </a>
        </div>
        </div>
        

      
    </section>
  );
};

export default About;
