import React from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import { Settings, Maximize, PlayCircle } from 'lucide-react';

function Services() {
  return (
    <div className="page-wrapper">
      <Navbar />

      <section className="section-container" style={{ marginTop: '4rem', maxWidth: '800px' }}>
        <motion.h1 
          className="hero-title" 
          style={{ fontSize: '4rem', marginBottom: '1rem', textAlign: 'center' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Services.
        </motion.h1>
        <motion.p 
          className="hero-subtitle" 
          style={{ textAlign: 'center', marginBottom: '4rem' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          From concept to final render, we engineer retention and deliver cinematic quality for every frame.
        </motion.p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%' }}>
          {[
            { icon: <Settings size={32} color="#fff" />, title: "Full-Stack Post Production", desc: "Comprehensive editing, sound design, and color grading for long-form content. We take your raw footage and turn it into a captivating story that keeps viewers watching until the very end." },
            { icon: <PlayCircle size={32} color="#fff" />, title: "Short-Form / Viral Formats", desc: "Highly engaging, fast-paced edits designed specifically for TikTok, Instagram Reels, and YouTube Shorts. Engineered with hooks, pop-up text, and sound effects to maximize watch time." },
            { icon: <Maximize size={32} color="#fff" />, title: "3D Motion & Visual Effects", desc: "Custom 3D elements, motion tracking, and advanced visual effects to elevate your brand above the competition. We build visual experiences that standard editors cannot replicate." }
          ].map((service, i) => (
            <motion.div 
              key={i} 
              className="bento-item flash-animated"
              style={{ flexDirection: 'row', alignItems: 'center', gap: '2rem', padding: '2rem 3rem' }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div style={{ position: 'relative', zIndex: 2 }}>{service.icon}</div>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#fff', fontWeight: 600, letterSpacing: '-0.02em' }}>{service.title}</h3>
                <p style={{ fontSize: '1rem', color: 'var(--apple-gray)', lineHeight: 1.5 }}>{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Services;
