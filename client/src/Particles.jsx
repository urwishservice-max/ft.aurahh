import React, { useEffect, useRef } from 'react';

function Particles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Set canvas to full window size
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Mouse tracking
    let mouse = {
      x: null,
      y: null,
      radius: 150 // Area of the "water wake" effect
    };

    window.addEventListener('mousemove', (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    });

    window.addEventListener('mouseout', () => {
      mouse.x = null;
      mouse.y = null;
    });

    window.addEventListener('resize', () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      init();
    });

    // Particle Class
    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.baseX = x; // Original X
        this.baseY = y; // Original Y
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
        this.density = (Math.random() * 30) + 1; // Determines how heavy it feels
      }

      // Draw particle
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.shadowBlur = 0; // reset for performance
      }

      // Update particle position and handle mouse interaction
      update() {
        // Normal slow floating movement
        this.x += this.directionX;
        this.y += this.directionY;

        // Bounce off edges
        if (this.x > width || this.x < 0) this.directionX = -this.directionX;
        if (this.y > height || this.y < 0) this.directionY = -this.directionY;

        // Interaction with mouse (Water wake effect)
        if (mouse.x != null && mouse.y != null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius) {
            // Calculate force (closer = stronger)
            let forceDirectionX = dx / distance;
            let forceDirectionY = dy / distance;
            let force = (mouse.radius - distance) / mouse.radius;
            
            // Push particle away
            let directionX = forceDirectionX * force * this.density;
            let directionY = forceDirectionY * force * this.density;
            
            this.x -= directionX;
            this.y -= directionY;
          }
        }

        this.draw();
      }
    }

    let particleArray = [];

    // Initialize particle array
    function init() {
      particleArray = [];
      let numberOfParticles = (canvas.height * canvas.width) / 9000;
      
      for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 2) + 1;
        let x = (Math.random() * ((width - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((height - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 1) - 0.5;
        let directionY = (Math.random() * 1) - 0.5;
        // Use the Apple blue and whites
        let color = Math.random() > 0.5 ? 'rgba(41, 151, 255, 0.6)' : 'rgba(255, 255, 255, 0.4)';

        particleArray.push(new Particle(x, y, directionX, directionY, size, color));
      }
    }

    // Animation Loop
    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      
      // Clear canvas with a very slight opacity to create a subtle trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.2)'; 
      ctx.fillRect(0, 0, innerWidth, innerHeight);

      for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].update();
      }
      
      // Optional: Draw connecting lines between close particles for a more viscous "web/water" look
      connect();
    }

    // Draw lines between particles if they are close
    function connect() {
      let opacityValue = 1;
      for (let a = 0; a < particleArray.length; a++) {
        for (let b = a; b < particleArray.length; b++) {
          let distance = ((particleArray[a].x - particleArray[b].x) * (particleArray[a].x - particleArray[b].x))
            + ((particleArray[a].y - particleArray[b].y) * (particleArray[a].y - particleArray[b].y));
          if (distance < (canvas.width / 7) * (canvas.height / 7)) {
            opacityValue = 1 - (distance / 20000);
            ctx.strokeStyle = `rgba(41, 151, 255, ${opacityValue * 0.2})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particleArray[a].x, particleArray[a].y);
            ctx.lineTo(particleArray[b].x, particleArray[b].y);
            ctx.stroke();
          }
        }
      }
    }

    init();
    animate();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', null);
      window.removeEventListener('mouseout', null);
      window.removeEventListener('resize', null);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -2,
        pointerEvents: 'none' // Ensures it doesn't block clicking on buttons
      }}
    />
  );
}

export default Particles;
