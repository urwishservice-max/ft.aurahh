import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Film, MonitorPlay, Zap, ArrowRight, Aperture, CheckCircle, Crosshair, Clock, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Particles from './Particles';
import ButterflyCanvas from './ButterflyCanvas';
import ErrorBoundary from './ErrorBoundary';
import heroImg from './assets/aurah_hero.png';

function Home() {
  const { scrollYProgress } = useScroll();
  
  // Advanced Scroll Animations for Hero
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scaleHero = useTransform(scrollYProgress, [0, 0.2], [1, 0.85]);
  const yHero = useTransform(scrollYProgress, [0, 0.2], [0, 150]);
  const rotateXHero = useTransform(scrollYProgress, [0, 0.2], [0, 20]);
  
  // Statement 3D parallax
  const statementY = useTransform(scrollYProgress, [0.05, 0.2], [100, 0]);
  const statementOpacity = useTransform(scrollYProgress, [0.05, 0.15], [0, 1]);

  const [stats, setStats] = useState({
    projectsCompleted: '350+',
    happyClients: '120+',
    totalViews: '50M+'
  });

  useEffect(() => {
    fetch('http://localhost:5000/api/aurah-stats')
      .then(res => res.json())
      .then(data => {
        if(data) setStats(data);
      })
      .catch(err => console.error("Error fetching stats:", err));
  }, []);

  // 3D variants for scroll reveals - Enhanced for Smooth Scroll
  const card3DVariant = {
    hidden: { opacity: 0, y: 150, rotateX: -15, scale: 0.9, z: -100 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0, 
      scale: 1, 
      z: 0,
      transition: { duration: 1.4, type: "spring", bounce: 0.2 } 
    }
  };

  const text3DVariant = {
    hidden: { opacity: 0, y: 80, rotateX: 60 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0, 
      transition: { duration: 1.2, type: "spring", bounce: 0.3 } 
    }
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, type: "spring", bounce: 0.2 } }
  };

  const containerStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  return (
    <div className="page-wrapper" style={{ perspective: '1200px' }}>
      <Particles />
      <Navbar />

      {/* Hero Section */}
      <motion.section 
        className="hero-wrapper"
        style={{ opacity: opacityHero, scale: scaleHero, y: yHero, rotateX: rotateXHero, transformStyle: "preserve-3d" }}
      >
        <div className="hero-image-container">
          <img src={heroImg} alt="Background Blur" />
        </div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#888890', marginBottom: '2rem' }}
        >
          FT.AURAH._
        </motion.h2>
        
        <motion.h1 
          className="hero-title text-gradient"
          initial={{ opacity: 0, filter: 'blur(20px)', scale: 0.95, rotateX: 20 }}
          animate={{ opacity: 1, filter: 'blur(0px)', scale: 1, rotateX: 0 }}
          transition={{ duration: 1.5, delay: 0.4, type: "spring" }}
        >
          VISUAL STORY<br />TELLER.
        </motion.h1>

        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, rotateX: -10 }}
          animate={{ opacity: 1, rotateX: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          style={{ marginTop: '2.5rem' }}
        >
          Cinematic motion graphics and elite color grading.<br/>Designed for creators who demand perfection.
        </motion.p>
        
        <Link to="/collection" style={{ display: 'inline-block', perspective: '1000px', marginTop: '3rem' }}>
          <motion.button 
            className="apple-btn"
            style={{ 
              transformStyle: "preserve-3d", 
              boxShadow: "10px 15px 30px rgba(0,0,0,0.8)", 
            }}
            initial={{ opacity: 0, y: 20, rotateX: 45, rotateY: 0 }}
            animate={{ opacity: 1, y: 0, rotateX: 10, rotateY: -5 }} 
            whileHover={{ 
              scale: 1.05, 
              y: -2,
              rotateX: 0, 
              rotateY: 0, 
              boxShadow: "0 25px 50px rgba(255,255,255,0.2)" 
            }}
            whileTap={{ 
              scale: 0.95, 
              y: 2,
              rotateX: -10, 
              rotateY: 5,
              boxShadow: "0 5px 10px rgba(255,255,255,0.1)"
            }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            View Portfolio
          </motion.button>
        </Link>
      </motion.section>

      {/* 3D Animated Butterfly Section */}
      <ErrorBoundary>
        <ButterflyCanvas />
      </ErrorBoundary>

      {/* About Section */}
      <section className="section-container" style={{ position: 'relative', zIndex: 10, perspective: '1000px', paddingBottom: '2rem' }}>
        <motion.div 
          style={{ y: statementY, opacity: statementOpacity, transformStyle: "preserve-3d" }}
        >
          <h2 className="statement-text text-gradient" style={{ fontSize: '3.2rem' }}>
            At FT.AURAH._, every frame is crafted with precision. <br/>
          </h2>
          <p style={{ color: 'var(--apple-gray)', fontSize: '1.2rem', textAlign: 'center', maxWidth: '700px', margin: '3rem auto 0', fontWeight: 300, lineHeight: 1.8 }}>
            We create high-impact visuals for creators, brands, businesses, filmmakers, and social media campaigns that need premium cinematic quality. From smooth transitions to powerful storytelling, our edits are built to capture attention and increase engagement across every platform.
          </p>
        </motion.div>
      </section>

      {/* What We Do - Bento Grid */}
      <section className="section-container" style={{ paddingTop: '4rem', position: 'relative', zIndex: 10, perspective: '1500px' }}>
        <motion.h2 
          className="statement-text text-gradient" 
          style={{ fontSize: '3rem', marginBottom: '5rem', transformOrigin: "bottom" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          variants={text3DVariant}
        >
          What We Do
        </motion.h2>
        
        <motion.div 
          className="bento-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          variants={containerStagger}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Cinematic Video Editing - Large */}
          <motion.div className="bento-item large flash-animated" variants={card3DVariant} whileHover={{ y: -5, rotateX: 2, rotateY: -2, boxShadow: "0 40px 80px rgba(0,0,0,0.9)" }}>
            <div style={{ flex: 1, position: 'relative', zIndex: 2 }}>
              <Film className="bento-icon" size={32} />
              <h3 className="bento-title">Cinematic Video Editing</h3>
              <p className="bento-desc">
                Professional edits with clean pacing, smooth cuts, and immersive storytelling that elevate your content beyond ordinary social media videos.
              </p>
            </div>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 2 }}>
               <motion.div 
                 style={{ width: '100%', aspectRatio: '16/9', background: 'transparent', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', transformStyle: 'preserve-3d', boxShadow: 'inset 0 0 40px rgba(255,255,255,0.02)' }}
                 whileHover={{ scale: 1.02, rotateZ: 1, translateZ: 30 }}
                 transition={{ type: "spring", stiffness: 300 }}
               >
                  <Aperture size={48} color="rgba(255,255,255,0.8)" strokeWidth={1} />
               </motion.div>
            </div>
          </motion.div>

          {/* Motion Graphics */}
          <motion.div className="bento-item flash-animated" variants={card3DVariant} whileHover={{ y: -5, rotateX: 2, rotateY: 2, boxShadow: "0 40px 80px rgba(0,0,0,0.9)" }}>
            <Zap className="bento-icon" size={32} />
            <h3 className="bento-title">Motion Graphics</h3>
            <p className="bento-desc">
              Dynamic animations, typography, logo reveals, and visual effects designed to make your brand stand out instantly.
            </p>
          </motion.div>

          {/* Elite Color Grading */}
          <motion.div className="bento-item flash-animated" variants={card3DVariant} whileHover={{ y: -5, rotateX: 2, rotateY: -2, boxShadow: "0 40px 80px rgba(0,0,0,0.9)" }}>
            <MonitorPlay className="bento-icon" size={32} />
            <h3 className="bento-title">Elite Color Grading</h3>
            <p className="bento-desc">
              Film-inspired color grading that gives your content a premium cinematic look with rich tones and professional consistency.
            </p>
          </motion.div>

          {/* Short Form Content */}
          <motion.div className="bento-item flash-animated" variants={card3DVariant} whileHover={{ y: -5, rotateX: 2, rotateY: 2, boxShadow: "0 40px 80px rgba(0,0,0,0.9)" }}>
            <Zap className="bento-icon" size={32} />
            <h3 className="bento-title">Short Form Content</h3>
            <p className="bento-desc">
              High-retention edits for Instagram Reels, YouTube Shorts, TikTok, and ads optimized for audience engagement.
            </p>
          </motion.div>

          {/* Commercial & Brand Ads */}
          <motion.div className="bento-item flash-animated" variants={card3DVariant} whileHover={{ y: -5, rotateX: 2, rotateY: -2, boxShadow: "0 40px 80px rgba(0,0,0,0.9)" }}>
            <Film className="bento-icon" size={32} />
            <h3 className="bento-title">Commercial Ads</h3>
            <p className="bento-desc">
              Creative ad edits designed to increase conversions, strengthen branding, and deliver powerful visual impact.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Choose FT.AURAH._ */}
      <section className="section-container" style={{ position: 'relative', zIndex: 10, paddingTop: '8rem' }}>
        <motion.h2 
          className="statement-text text-gradient" 
          style={{ fontSize: '3rem', marginBottom: '5rem', transformOrigin: "bottom" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={text3DVariant}
        >
          Why Choose Us
        </motion.h2>
        
        <motion.div 
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', width: '100%' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerStagger}
        >
          {[
            { icon: <Crosshair strokeWidth={1} size={32} />, title: "Precision Editing", desc: "Every cut, transition, and effect is crafted with absolute attention to detail." },
            { icon: <Clock strokeWidth={1} size={32} />, title: "Fast Delivery", desc: "Highly optimized workflow for premium quality edits delivered flawlessly on time." },
            { icon: <Sparkles strokeWidth={1} size={32} />, title: "Creative Direction", desc: "Not just editing — we help architect the entire visual identity of your content." },
            { icon: <CheckCircle strokeWidth={1} size={32} />, title: "Premium Style", desc: "Modern cinematic aesthetics directly inspired by high-end commercial production." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              variants={fadeUpVariant}
              style={{ background: 'transparent', padding: '1rem', borderLeft: '1px solid rgba(255,255,255,0.05)' }}
            >
              <div style={{ color: 'var(--apple-gray)', marginBottom: '2rem' }}>{item.icon}</div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 500, color: '#fff', marginBottom: '1rem', letterSpacing: '-0.02em' }}>{item.title}</h4>
              <p style={{ color: 'var(--apple-gray)', fontSize: '0.9rem', lineHeight: 1.6, fontWeight: 300 }}>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Portfolio Text & Client Experience */}
      <section className="section-container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '10rem 2rem' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant} style={{ maxWidth: '700px' }}>
          <h3 style={{ color: '#fff', fontSize: '2rem', fontWeight: 400, marginBottom: '2rem', letterSpacing: '-0.02em' }}>The Portfolio Experience</h3>
          <p style={{ color: 'var(--apple-gray)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '5rem', fontWeight: 300 }}>
            A collection of cinematic edits, motion graphics, commercial visuals, reels, and creative projects crafted to deliver maximum impact. Each project is designed with storytelling, emotion, and visual excellence at its core.
          </p>
          
          <h3 style={{ color: '#fff', fontSize: '2rem', fontWeight: 400, marginBottom: '2rem', letterSpacing: '-0.02em' }}>Client Experience</h3>
          <p style={{ color: 'var(--apple-gray)', fontSize: '1.1rem', lineHeight: 1.8, fontWeight: 300 }}>
            We work closely with creators and brands to transform raw footage into visually powerful content that connects with audiences and builds strong digital presence. From concept to final export, quality remains the priority.
          </p>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="section-container trust-section" style={{ position: 'relative', zIndex: 10, perspective: '1000px' }}>
        <motion.h2 
          className="statement-text text-gradient" 
          style={{ fontSize: '4rem', transformOrigin: "bottom" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={text3DVariant}
        >
          Ready to elevate your content?
        </motion.h2>
        
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={text3DVariant}
          style={{ color: 'var(--apple-gray)', fontSize: '1.2rem', marginTop: '1.5rem', marginBottom: '5rem', fontWeight: 300 }}
        >
          Let’s create visuals that people remember.
        </motion.p>
        
        <motion.div 
          style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerStagger}
        >
          <motion.div variants={fadeUpVariant}>
            <Link to="/collection" style={{ textDecoration: 'none', perspective: '1000px' }}>
              <motion.button 
                className="apple-btn"
                style={{ 
                  transformStyle: "preserve-3d", 
                  boxShadow: "10px 15px 30px rgba(0,0,0,0.8)", 
                }}
                initial={{ rotateX: 10, rotateY: 5 }} 
                whileHover={{ scale: 1.05, y: -2, rotateX: 0, rotateY: 0, boxShadow: "0 25px 40px rgba(255,255,255,0.2)" }}
                whileTap={{ scale: 0.95, y: 2, rotateX: -10, rotateY: -5, boxShadow: "0 5px 10px rgba(255,255,255,0.05)" }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                View Portfolio
              </motion.button>
            </Link>
          </motion.div>

          <motion.div variants={fadeUpVariant}>
            <Link to="/contact" style={{ textDecoration: 'none', perspective: '1000px' }}>
              <motion.button 
                className="apple-btn"
                style={{ 
                  transformStyle: "preserve-3d", 
                  background: 'rgba(255,255,255,0.02)',
                  backdropFilter: 'blur(10px)',
                  color: '#fff',
                  boxShadow: "10px 15px 30px rgba(0,0,0,0.8)", 
                  border: "1px solid rgba(255,255,255,0.1)"
                }}
                initial={{ rotateX: 10, rotateY: -5 }} 
                whileHover={{ scale: 1.05, y: -2, rotateX: 0, rotateY: 0, boxShadow: "0 25px 40px rgba(255,255,255,0.1)", background: 'rgba(255,255,255,0.1)' }}
                whileTap={{ scale: 0.95, y: 2, rotateX: -10, rotateY: 5, boxShadow: "0 5px 10px rgba(255,255,255,0.02)" }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                Start Your Project
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
      
      {/* Footer Space */}
      <footer style={{ padding: '6rem 2rem 4rem', textAlign: 'center', color: 'var(--apple-gray)', fontSize: '12px', borderTop: '1px solid rgba(255,255,255,0.03)' }}>
        <h4 style={{ fontFamily: 'Syne', color: '#fff', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '2px' }}>FT.AURAH._</h4>
        <p style={{ marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '10px' }}>Cinematic Editing • Motion Graphics • Color Grading</p>
        <p style={{ fontWeight: 300 }}>Creating premium visual experiences for the next generation of creators.</p>
        <p style={{ marginTop: '4rem', fontSize: '10px', opacity: 0.3 }}>© 2026 FT.AURAH._ All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
