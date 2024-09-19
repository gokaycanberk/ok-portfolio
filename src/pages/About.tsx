import React from 'react';
import '../styles/App.css';
import '../styles/About.css';

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <div className="timeline-container">
        <h2 className="timeline-title">Career Timeline</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-year">2017</div>
            <div className="timeline-content">
              <h3>Graduation from Beykent University</h3>
              <p>
                Earned a degree in Interior Architecture and Environmental
                Design.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-year">2016 - 2017</div>
            <div className="timeline-content">
              <h3>Junior Interior Designer - Autoban</h3>
              <p>
                Developed and designed hospitality and commercial interiors for
                Autoban. Contributed to graphic design projects.
              </p>
              <p>
                <strong>Skills:</strong> Furniture & Object Design, AutoCAD,
                SketchUp
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-year">2019 - 2020</div>
            <div className="timeline-content">
              <h3>Junior Interior Designer - IPD Architecture</h3>
              <p>
                Developed and designed hospitality and healthcare interiors.
                Also led historic renovation projects for public spaces.
              </p>
              <p>
                <strong>Skills:</strong> Furniture Design, AutoCAD, SketchUp,
                V-Ray, Residential Architecture
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-year">2021 - 2022</div>
            <div className="timeline-content">
              <h3>Interior Designer & Editorial Designer - Miinterior</h3>
              <p>
                Analyzed and designed hospitality interiors. Developed brand
                identity, logos, and vintage themes for retail and cocktail
                bars.
              </p>
              <p>
                <strong>Skills:</strong> Adobe Illustrator, AutoCAD, V-Ray,
                Interior Design
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-year">2017 - 2023</div>
            <div className="timeline-content">
              <h3>Digital Designer and Artist - Self-employed</h3>
              <p>
                Worked independently on corporate identity, logo design, and
                special hand-drawn artworks. Designed posters, menus, and
                booklets.
              </p>
              <p>
                <strong>Skills:</strong> Graphic Design, Interior Design,
                Digital Art, Adobe Photoshop, SketchUp
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-year">2023 - Present</div>
            <div className="timeline-content">
              <h3>Interior Design Coordinator - HDR</h3>
              <p>
                Currently managing design projects on-site in New York as an
                Interior Design Coordinator.
              </p>
            </div>
          </div>
        </div>
      </div>
      <p>
        Get in touch with us! You can reach us via email at
        contact@portfolio.com or fill out the form below.
      </p>
      <footer>
        <p>Contact: ozge@example.com</p>
      </footer>
    </div>
  );
};

export default About;
