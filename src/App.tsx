import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import InteriorDesign from './pages/InteriorDesign';
import DigitalDesign from './pages/DigitalDesign';
import Art from './pages/Art';
import About from './pages/About';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/interior-design" element={<InteriorDesign />} />
        <Route path="/digital-design" element={<DigitalDesign />} />
        <Route path="/art" element={<Art />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
