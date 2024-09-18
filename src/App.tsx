import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import InteriorDesign from './pages/InteriorDesign';
import DigitalDesign from './pages/DigitalDesign';
import Art from './pages/Art';
import Contact from './pages/Contact';
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
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
