import React from 'react';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import interiorImg from '../assets/images/main-page-interior1.jpg';
import digitalImg from '../assets/images/main-page-digital2.jpg';
import artImg from '../assets/images/main-page-art.jpg';
import '../styles/App.css';

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="bio-section">
        <p>
          Hi! I'm Ozge, a dedicated interior and digital designer who graduated
          from Beykent University in 2017 with a degree in Interior Architecture
          and Environmental Design. Since then, she has built a diverse
          portfolio, working on a variety of projects that blend functionality
          with creative aesthetics. With a passion for both art and design, Ozge
          has gained experience in multiple fields, including digital design and
          3D visualization.
        </p>
      </div>
      <div className="project-container">
        <div
          className="project interior"
          style={{ backgroundImage: `url(${interiorImg})` }}
        >
          <h2>Interior Design</h2>
          <p>Explore my latest interior design projects.</p>
          <a href="/interior">View Interior Projects</a>
        </div>
        <div
          className="project digital"
          style={{ backgroundImage: `url(${digitalImg})` }}
        >
          <h2>Digital Design</h2>
          <p>See my digital design works, from web design to digital art.</p>
          <a href="/digital">View Digital Projects</a>
        </div>
        <div
          className="project art"
          style={{ backgroundImage: `url(${artImg})` }}
        >
          <h2>Art</h2>
          <p>Dive into my artistic creations.</p>
          <a href="/art">View Art Projects</a>
        </div>
      </div>

      <footer>
        <p>Contact: ozge@example.com</p>
      </footer>
    </div>
  );
};

export default Home;
