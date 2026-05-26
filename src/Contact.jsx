import React from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <div className="page-wrapper" style={{ perspective: '1500px' }}>
      <Navbar />

      <section className="section-container" style={{ marginTop: '4rem', maxWidth: '600px', transformStyle: 'preserve-3d' }}>
        <motion.h1 
          className="hero-title" 
          style={{ marginBottom: '1rem', textAlign: 'center' }}
          initial={{ opacity: 0, y: 50, rotateX: 90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
        >
          Contact.
        </motion.h1>
        <motion.p 
          className="hero-subtitle" 
          style={{ textAlign: 'center', marginBottom: '4rem' }}
          initial={{ opacity: 0, rotateX: -20 }}
          animate={{ opacity: 1, rotateX: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Ready to elevate your content? Fill out the form below and we'll get back to you within 24 hours.
        </motion.p>
        
        <motion.form 
          className="bento-item flash-animated"
          style={{ width: '100%', padding: '3rem', transformStyle: 'preserve-3d' }}
          initial={{ opacity: 0, y: 100, rotateX: -30, z: -100 }}
          animate={{ opacity: 1, y: 0, rotateX: 0, z: 0 }}
          transition={{ duration: 0.8, delay: 0.3, type: 'spring' }}
          whileHover={{ rotateX: 2, rotateY: 2, y: -5, boxShadow: "0 30px 60px rgba(0,0,0,0.8)" }}
          onSubmit={(e) => e.preventDefault()}
        >
          <div style={{ position: 'relative', zIndex: 2 }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--apple-gray)', fontSize: '0.9rem' }}>Name</label>
            <input type="text" className="apple-input" placeholder="Tim Cook" />
            
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--apple-gray)', fontSize: '0.9rem', marginTop: '1rem' }}>Email</label>
            <input type="email" className="apple-input" placeholder="tim@apple.com" />
            
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--apple-gray)', fontSize: '0.9rem', marginTop: '1rem' }}>Project Details</label>
            <textarea className="apple-input" rows={5} placeholder="Tell us about your vision..."></textarea>
            
            <div style={{ perspective: '500px', marginTop: '2rem' }}>
              <motion.button 
                type="submit" 
                className="apple-btn" 
                style={{ 
                  width: '100%', 
                  margin: 0, 
                  transformStyle: "preserve-3d", 
                  boxShadow: "10px 15px 30px rgba(0,0,0,0.6)", 
                  border: "1px solid rgba(255,255,255,0.2)" 
                }}
                initial={{ opacity: 0, y: 20, rotateX: 45 }}
                animate={{ opacity: 1, y: 0, rotateX: 10, rotateY: -5 }} // Permanently slightly rotated
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  rotateX: 0, // Flattens out on hover
                  rotateY: 0,
                  boxShadow: "0 25px 40px rgba(255,255,255,0.3)" 
                }}
                whileTap={{ 
                  scale: 0.95, 
                  y: 5,
                  rotateX: -10,
                  rotateY: 5,
                  boxShadow: "0 5px 10px rgba(255,255,255,0.1)"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                Send Message
              </motion.button>
            </div>
          </div>
        </motion.form>
      </section>
    </div>
  );
}

export default Contact;
