import React from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

function Collection() {
  return (
    <div className="page-wrapper">
      <Navbar />

      <section className="section-container" style={{ marginTop: '4rem' }}>
        <motion.h1 
          className="hero-title" 
          style={{ marginBottom: '1rem' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          The Portfolio.
        </motion.h1>
        <motion.p 
          className="hero-subtitle" 
          style={{ textAlign: 'center', marginBottom: '4rem' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A curated collection of my best video edits, motion graphics, and creative posters.
        </motion.p>
        
        <div style={{ width: '100%', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
          {[1,2,3,4,5,6].map((item, i) => (
            <motion.div 
              key={item} 
              className="bento-item flash-animated"
              style={{ padding: '1rem' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div style={{ aspectRatio: '16/9', background: '#000', borderRadius: '16px', position: 'relative', overflow: 'hidden', zIndex: 2 }}>
                 <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                   <div style={{ width: '0', height: '0', borderTop: '8px solid transparent', borderBottom: '8px solid transparent', borderLeft: '12px solid #fff', marginLeft: '4px' }}></div>
                 </div>
              </div>
              <div style={{ padding: '1.5rem', zIndex: 2, position: 'relative' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#fff' }}>Project Title #{item}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--apple-gray)' }}>Cinematic Edit / Motion Graphics</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Collection;
