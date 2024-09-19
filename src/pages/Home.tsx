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
