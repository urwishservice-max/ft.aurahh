import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Collection from './Collection';
import Services from './Services';
import Contact from './Contact';
import './index.css';

function App() {
  return (
    <>
      {/* Global Expensive Elements */}
      <div className="noise-overlay"></div>
      <div className="ambient-light-1"></div>
      <div className="ambient-light-2"></div>
      
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
