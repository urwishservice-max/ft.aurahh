import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Aperture, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  const isActive = (path) => {
    return location.pathname === path ? { opacity: 1, color: '#fff' } : {};
  };

  return (
    <>
      <nav className="apple-nav">
        <div className="nav-content">
          <Link to="/" className="nav-link nav-logo" style={{ opacity: 1 }} onClick={() => setIsOpen(false)}>
            <Aperture size={16} style={{display: 'inline', marginBottom: '-2px', marginRight: '4px'}}/> FT.AURAH._
          </Link>
          
          {/* Desktop Links */}
          <div className="desktop-links">
            <Link to="/" className="nav-link" style={isActive('/')}>Home</Link>
            <Link to="/collection" className="nav-link" style={isActive('/collection')}>Portfolio</Link>
            <Link to="/services" className="nav-link" style={isActive('/services')}>Services</Link>
            <Link to="/contact" className="nav-link" style={isActive('/contact')}>Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={() => setIsOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="mobile-menu-overlay"
            initial={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
          >
            <div className="mobile-menu-header">
              <Link to="/" className="nav-link nav-logo" style={{ opacity: 1 }} onClick={() => setIsOpen(false)}>
                <Aperture size={16} style={{display: 'inline', marginBottom: '-2px', marginRight: '4px'}}/> FT.AURAH._
              </Link>
              <button className="mobile-menu-btn" onClick={() => setIsOpen(false)}>
                <X size={24} />
              </button>
            </div>
            
            <div className="mobile-menu-links">
              <Link to="/" className="mobile-link" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/collection" className="mobile-link" onClick={() => setIsOpen(false)}>Portfolio</Link>
              <Link to="/services" className="mobile-link" onClick={() => setIsOpen(false)}>Services</Link>
              <Link to="/contact" className="mobile-link" onClick={() => setIsOpen(false)}>Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
