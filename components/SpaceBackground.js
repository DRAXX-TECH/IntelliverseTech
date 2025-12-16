'use client';

import { useEffect, useRef } from 'react';

export default function SpaceBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let w = window.innerWidth;
    let h = window.innerHeight;

    // handle device pixel ratio for crisp dark color
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    // Theme helper
    const theme = () => document.documentElement.getAttribute('data-theme') || 'dark';

    // Stars
    const STAR_COUNT = 120;
    let stars = [];
    function initStars() {
      stars = Array.from({ length: STAR_COUNT }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.2 + 0.3,
        s: Math.random() * 0.08 + 0.02,
        o: Math.random() * 0.5 + 0.2
      }));
    }

    // Planets
    const planets = [
      { x: w * 0.25, y: h * 0.3, r: 80, color: 'rgba(180,80,50,0.9)' },
      { x: w * 0.75, y: h * 0.6, r: 120, color: 'rgba(60,120,200,0.85)' }
    ];

    // Asteroids / Rocks
    const rocks = Array.from({ length: 15 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 6 + 2,
      s: Math.random() * 0.6 + 0.2
    }));

    // Shooting stars
    let shootingStars = [];
    function spawnShootingStar() {
      shootingStars.push({
        x: Math.random() * w,
        y: Math.random() * h / 2,
        len: Math.random() * 200 + 100,
        speed: Math.random() * 15 + 5
      });
    }

    setInterval(spawnShootingStar, 5000);

    function resize() {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
      initStars();
    }

    window.addEventListener('resize', resize);
    initStars();

    // Draw functions
    function drawBackground() {
      ctx.fillStyle = theme() === 'dark' ? '#050507' : '#f6f7f9';
      ctx.fillRect(0, 0, w, h);

      // radial vignette
      const v = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, Math.max(w, h));
      if (theme() === 'dark') {
        v.addColorStop(0, 'rgba(40,40,55,0.25)');
        v.addColorStop(1, 'rgba(5,5,7,1)');
      } else {
        v.addColorStop(0, 'rgba(255,255,255,0.8)');
        v.addColorStop(1, 'rgba(220,225,230,1)');
      }
      ctx.fillStyle = v;
      ctx.fillRect(0, 0, w, h);
    }

    function drawStars() {
      stars.forEach(star => {
        // flicker
        star.o += (Math.random() - 0.5) * 0.02;
        star.o = Math.min(Math.max(star.o, 0.2), 0.7);

        star.y += star.s * (star.r * 1.5);
        if (star.y > h) star.y = 0;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = theme() === 'dark'
          ? `rgba(180,190,220,${star.o})`
          : `rgba(150,155,165,${star.o})`;
        ctx.fill();
      });
    }

    function drawPlanets() {
      planets.forEach(p => {
        const gradient = ctx.createRadialGradient(p.x, p.y, p.r * 0.1, p.x, p.y, p.r);
        gradient.addColorStop(0, p.color);
        gradient.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    function drawRocks() {
      rocks.forEach(r => {
        r.x -= r.s;
        if (r.x < 0) r.x = w;
        ctx.fillStyle = 'rgba(150,150,150,0.8)';
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.r, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    function drawShootingStars() {
      shootingStars.forEach((s, idx) => {
        s.x += s.speed;
        s.y += s.speed / 2;
        ctx.strokeStyle = 'rgba(255,255,255,0.9)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.len, s.y - s.len / 2);
        ctx.stroke();

        if (s.x - s.len > w || s.y - s.len / 2 > h) {
          shootingStars.splice(idx, 1);
        }
      });
    }

    function animate() {
      drawBackground();
      drawStars();
      drawPlanets();
      drawRocks();
      drawShootingStars();
      requestAnimationFrame(animate);
    }

    animate();

    return () => window.removeEventListener('resize', resize);
  }, []);

  return <canvas ref={canvasRef} className="space-canvas" style={{ display: 'block' }} />;
}
