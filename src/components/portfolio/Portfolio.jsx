import React from "react";
import './portfolio.css'
import portfolio from '../../assets/portpic.png'
import ixpic from '../../assets/ixpic.png'
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img
              src={ixpic}
              alt="kamran" style={{ height: "65vh"}}
            />
          </div>
          <h3 style={{color:"white"}}>IExplorer</h3>
          <small style={{color:"white"}}>IExplorer is your local business and attraction guide, helping newcomers and locals discover top-rated hotels, hospitals, restaurants, and more. Explore with our 'iX app' and contribute through reviews.</small>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Kamran-imaz/iX" className="btn" target="__blank">
              Github
            </a>
            <a
              href="https://six-q4vt.onrender.com"
              className="btn btn-primary"
              target="__blank"
            >
              live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img
              src={portfolio}
              alt="kamran" style={{ height: "65vh"}}
            />
          </div>
          <h3 style={{color:"white"}}>Portfolio</h3>
          <small style={{color:"white"}}>Created a portfolio website to present my professional background, skills, and projects, serving as a hub for potential employers and clients to explore my work and capabilities.</small>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Kamran-imaz/portfolio" className="btn" target="__blank">
              Github
            </a>
            <a
              href="#"
              className="btn btn-primary"
              target="__blank"
            >
              live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img
              src="https://images.unsplash.com/photo-1527672809634-04ed36500acd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
              alt=""
            />
          </div>
          <h3 style={{color:"white"}}>Farmer's Connect</h3>
          <small style={{color:"white"}}>Farmers' web app connecting them to experts, middlemen, weather forecasts, and market insights. Bridging expertise with productivity, fostering knowledge exchange, enhancing agriculture.</small>
          <div className="portfolio__item-cta">
            <a href="https://www.github.com/Kamran-imaz" className="btn" target="__blank">
              Github
            </a>
            <a
              href="#"
              className="btn btn-primary"
              target="__blank"
            >
              live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
