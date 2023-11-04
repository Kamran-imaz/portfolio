import React from "react";
import './portfolio.css'
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img
              src="https://images.unsplash.com/photo-1527672809634-04ed36500acd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
              alt=""
            />
          </div>
          <h3>This is a Portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://www.github.com" className="btn" target="__blank">
              Github
            </a>
            <a
              href="https://www.google.com"
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
              alt="kamran"
            />
          </div>
          <h3>This is a Portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://www.github.com" className="btn" target="__blank">
              Github
            </a>
            <a
              href="https://www.google.com"
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
          <h3>This is a Portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://www.github.com" className="btn" target="__blank">
              Github
            </a>
            <a
              href="https://www.google.com"
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
