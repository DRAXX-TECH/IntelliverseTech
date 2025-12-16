// components/ScrollAnimation.js
'use client';

import { useEffect, useRef } from 'react';

export default function ScrollAnimation({ children, animation = 'fade-up', delay = 0, threshold = 0.1 }) {
  const ref = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-in');
            }, delay);
          }
        });
      },
      { threshold }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay, threshold]);
  
  return (
    <div 
      ref={ref} 
      className={`scroll-animation ${animation}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}