import React, { useEffect, useRef } from 'react';

const SpaceBackground = () => {
  const canvasRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);

    // --- Entities ---

    // Stars (static specks)
    const stars = [];
    for (let i = 0; i < 40; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.2 + 0.3,
        alpha: Math.random() * 0.5 + 0.2,
        twinkleSpeed: Math.random() * 0.01 + 0.005,
        twinkleOffset: Math.random() * Math.PI * 2,
      });
    }

    // Spaceship
    const shipImg = new Image();
    shipImg.src = '/SpaceShip.png';

    const ship = {
      x: width * 0.15,
      y: height * 0.5,
      size: 24, // slightly larger for sprite bounding box
      baseY: height * 0.5,
      time: 0,
    };

    // Obstacles (asteroids / UFOs)
    function createObstacle() {
      return {
        x: width + Math.random() * 200,
        y: Math.random() * height,
        size: Math.random() * 16 + 10,
        speed: Math.random() * 0.6 + 0.3,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.01,
        type: Math.random() > 0.7 ? 'ufo' : 'asteroid',
      };
    }

    const obstacles = [];
    for (let i = 0; i < 5; i++) {
      const obs = createObstacle();
      obs.x = Math.random() * width; // spread initially
      obstacles.push(obs);
    }

    // Collectible particles
    const particles = [];
    for (let i = 0; i < 6; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 2.5 + 1.5,
        speed: Math.random() * 0.3 + 0.15,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.03 + 0.02,
      });
    }

    // --- Draw helpers ---

    function drawShip(x, y, size, tilt) {
      if (!shipImg.complete) return;
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(tilt);

      // Draw the sprite
      ctx.globalAlpha = 1.0; 
      const imgWidth = size * 1.8;
      const imgHeight = (shipImg.height / shipImg.width) * imgWidth;
      
      // Flip the image horizontally so the nose points right
      ctx.scale(-1, 1);
      
      // Center the image at the x,y coordinates
      ctx.drawImage(shipImg, -imgWidth / 2, -imgHeight / 2, imgWidth, imgHeight);

      ctx.restore();
    }

    function drawAsteroid(obs) {
      ctx.save();
      ctx.translate(obs.x, obs.y);
      ctx.rotate(obs.rotation);
      ctx.fillStyle = 'rgba(51, 53, 53, 0.7)';
      ctx.strokeStyle = 'rgba(87, 66, 63, 0.5)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      const s = obs.size;
      // Irregular polygon
      ctx.moveTo(s * 0.6, -s * 0.3);
      ctx.lineTo(s * 0.3, -s * 0.6);
      ctx.lineTo(-s * 0.3, -s * 0.5);
      ctx.lineTo(-s * 0.6, -s * 0.1);
      ctx.lineTo(-s * 0.5, s * 0.4);
      ctx.lineTo(-s * 0.1, s * 0.6);
      ctx.lineTo(s * 0.4, s * 0.4);
      ctx.lineTo(s * 0.6, s * 0.1);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.restore();
    }

    function drawUfo(obs) {
      ctx.save();
      ctx.translate(obs.x, obs.y);
      const s = obs.size;
      // Dome
      ctx.fillStyle = 'rgba(87, 66, 63, 0.6)';
      ctx.beginPath();
      ctx.ellipse(0, -s * 0.15, s * 0.3, s * 0.25, 0, Math.PI, 0);
      ctx.fill();
      // Body
      ctx.fillStyle = 'rgba(51, 53, 53, 0.7)';
      ctx.beginPath();
      ctx.ellipse(0, 0, s * 0.6, s * 0.18, 0, 0, Math.PI * 2);
      ctx.fill();
      // Light
      ctx.fillStyle = 'rgba(255, 127, 110, 0.3)';
      ctx.beginPath();
      ctx.arc(0, s * 0.05, s * 0.08, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    // --- Animation loop ---
    let frame = 0;

    function render() {
      ctx.clearRect(0, 0, width, height);

      // Stars
      stars.forEach(star => {
        const alpha = prefersReducedMotion
          ? star.alpha
          : star.alpha + Math.sin(frame * star.twinkleSpeed + star.twinkleOffset) * 0.15;
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.05, alpha)})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fill();
      });

      if (prefersReducedMotion) return; // Static stars only for reduced motion

      frame++;

      // Update ship — sinusoidal weaving
      ship.time += 0.015;
      ship.y = ship.baseY + Math.sin(ship.time * 1.5) * (height * 0.15);
      ship.y += Math.sin(ship.time * 3.7) * (height * 0.04); // secondary wobble
      // Keep ship on screen
      ship.y = Math.max(ship.size * 2, Math.min(height - ship.size * 2, ship.y));
      const tilt = Math.cos(ship.time * 1.5) * 0.15; // slight nose tilt
      drawShip(ship.x, ship.y, ship.size, tilt);

      // Update obstacles
      obstacles.forEach(obs => {
        obs.x -= obs.speed;
        obs.rotation += obs.rotSpeed;
        if (obs.x < -obs.size * 2) {
          obs.x = width + Math.random() * 100;
          obs.y = Math.random() * height;
          obs.speed = Math.random() * 0.6 + 0.3;
        }
        if (obs.type === 'ufo') {
          drawUfo(obs);
        } else {
          drawAsteroid(obs);
        }
      });

      // Update collectible particles
      particles.forEach(p => {
        p.x -= p.speed;
        p.pulse += p.pulseSpeed;
        if (p.x < -10) {
          p.x = width + Math.random() * 50;
          p.y = Math.random() * height;
        }
        const pulseAlpha = 0.25 + Math.sin(p.pulse) * 0.15;
        const pulseSize = p.r + Math.sin(p.pulse) * 0.8;
        // Glow
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, pulseSize * 3);
        glow.addColorStop(0, `rgba(255, 127, 110, ${pulseAlpha * 0.5})`);
        glow.addColorStop(1, 'rgba(255, 127, 110, 0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(p.x, p.y, pulseSize * 3, 0, Math.PI * 2);
        ctx.fill();
        // Core
        ctx.fillStyle = `rgba(255, 180, 169, ${pulseAlpha + 0.2})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, pulseSize, 0, Math.PI * 2);
        ctx.fill();
      });

      animRef.current = requestAnimationFrame(render);
    }

    // Render one static frame for reduced motion, otherwise loop
    if (prefersReducedMotion) {
      render();
    } else {
      animRef.current = requestAnimationFrame(render);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    />
  );
};

export default SpaceBackground;
