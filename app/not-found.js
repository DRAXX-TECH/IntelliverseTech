'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { 
  FaHome, 
  FaArrowLeft, 
  FaSearch, 
  FaMapMarkerAlt,
  FaExclamationTriangle
} from 'react-icons/fa';

export default function NotFound() {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = '/';
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="not-found-page">
      <div className="container">
        <div className="not-found-content">
          {/* Error Code */}
          <div className="error-code">
            <span className="digit">4</span>
            <div className="zero-circle">
              <span className="zero">0</span>
              <div className="zero-inner"></div>
            </div>
            <span className="digit">4</span>
          </div>
          
          {/* Message */}
          <h1 className="error-title">Page Not Found</h1>
          <p className="error-description">
            We're sorry, the page you have looked for does not exist in our website! 
            Maybe go to our home page or try to use a search?
          </p>
          
          {/* Actions */}
            <div className="error-actions">
        <Link href="/" className="btn">
          <FaHome /> Go to Homepage
        </Link>
        <button 
          onClick={() => window.history.back()} 
          className="btn btn-secondary"
        >
          <FaArrowLeft /> Go Back
        </button>
      </div>
          
          {/* Countdown */}
          <div className="countdown">
            <p>Redirecting to homepage in <span className="countdown-number">{countdown}</span> seconds</p>
          </div>
          
          {/* Search */}
          <div className="search-suggestion">
            <h3 className="search-title">Try Searching</h3>
            <div className="search-links">
              <Link href="/#services" className="search-link">Services</Link>
              <Link href="/#solutions" className="search-link">Solutions</Link>
              <Link href="/#about" className="search-link">About Us</Link>
              <Link href="/#contact" className="search-link">Contact</Link>
              <Link href="/#faq" className="search-link">FAQ</Link>
            </div>
          </div>
          
          {/* Navigation Help */}
           <div className="navigation-help">
        <div className="help-item">
          <div className="help-icon"><FaMapMarkerAlt size={24} /></div>
          <div className="help-content">
            <h4>Lost in Navigation?</h4>
            <p>Check our sitemap or use the main menu above</p>
          </div>
        </div>
        <div className="help-item">
          <div className="help-icon"><FaSearch size={24} /></div>
          <div className="help-content">
            <h4>Can't Find Something?</h4>
            <p>Try our contact form for direct assistance</p>
          </div>
        </div>
        <div className="help-item">
          <div className="help-icon"><FaExclamationTriangle size={24} /></div>
          <div className="help-content">
            <h4>Report an Issue</h4>
            <p>Contact support if this page should exist</p>
          </div>
        </div>
      </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="not-found-bg">
        <div className="bg-grid"></div>
        <div className="bg-circles">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
        </div>
      </div>
    </div>
  );
}