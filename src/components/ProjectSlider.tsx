import React, { useState } from 'react';
import '../styles/ProjectSlider.css';

interface Slide {
  image: string;
  title: string;
  description: string;
}

interface ProjectSliderProps {
  slides: Slide[];
}

const ProjectSlider: React.FC<ProjectSliderProps> = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slider">
      <button onClick={prevSlide}>‹</button>
      <div className="slide">
        <img src={slides[current].image} alt={slides[current].title} />
        <h3>{slides[current].title}</h3>
        <p>{slides[current].description}</p>
      </div>
      <button onClick={nextSlide}>›</button>
    </div>
  );
};

export default ProjectSlider;
