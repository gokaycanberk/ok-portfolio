import React from 'react';
import bannerImage from '../assets/images/main-page-banner-2.jpg';
import '../styles/Banner.css';

const Banner = () => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
      <h1>Welcome to Ozge's Portfolio</h1>
      <p>Discover Interior, Digital, and Art designs</p>
    </div>
  );
};

export default Banner;
