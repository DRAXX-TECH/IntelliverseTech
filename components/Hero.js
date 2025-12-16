'use client';

import { useEffect, useState, useRef, useCallback } from 'react';

// Throttle function to limit how often we update state
const throttle = (func, limit) => {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const animationFrameId = useRef(null);

  // Use useCallback to memoize the handler
  const handleMouseMove = useCallback((e) => {
    // Cancel any pending animation frame
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }

    // Use requestAnimationFrame for smooth updates
    animationFrameId.current = requestAnimationFrame(() => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    });
  }, []);

  // Debounced version for better performance
  const handleMouseMoveThrottled = useCallback(
    throttle((e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    }, 100), // Update at most every 100ms
    []
  );

  useEffect(() => {
    // Use the throttled version for better performance
    window.addEventListener('mousemove', handleMouseMoveThrottled);
    
    // Cleanup function
    return () => {
      window.removeEventListener('mousemove', handleMouseMoveThrottled);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [handleMouseMoveThrottled]); // Add the handler to dependencies

  // Alternative: Simplified version with less frequent updates
  // If you still have issues, use this instead:
  /*
  useEffect(() => {
    let lastUpdate = 0;
    const updateInterval = 50; // Update at most every 50ms

    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastUpdate > updateInterval) {
        lastUpdate = now;
        setMousePosition({
          x: e.clientX / window.innerWidth,
          y: e.clientY / window.innerHeight
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  */

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span>PIONEERING DIGITAL TRANSFORMATION</span>
          </div>
          
          <h1 className="hero-title">
            Delivering Resilient Software and 
            <span className="gradient-text"> Hardware Ecosystems </span>
            for Modern Enterprises.
          </h1>
          
          <p className="hero-description">
           We pair cloud-native engineering, AI accelerators, and enterprise hardware teams to ship platforms that scale reliably across your business.
          </p>
          
          <div className="hero-actions">
            <a href="#solutions" className="btn">Explore Our Solutions</a>
            <a href="#contact" className="btn btn-secondary">Schedule a Consultation</a>
          </div>
          
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">100+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <div className="stat-number">25+</div>
              <div className="stat-label">Countries Served</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div 
        className="hero-bg-circle" 
        style={{
          left: `${mousePosition.x * 100}%`,
          top: `${mousePosition.y * 100}%`,
        }}
      ></div>
      
      <div className="hero-grid"></div>
    </section>
  );
}