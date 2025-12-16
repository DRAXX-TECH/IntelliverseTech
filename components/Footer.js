// components/Footer.js
'use client';

import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { 
  FaLinkedin, 
  FaTwitter, 
  FaGithub, 
  FaMedium, 
  FaYoutube, 
  FaDiscord,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock
} from 'react-icons/fa';
import ThemeLabel from './ThemeLabel'; // Add this import

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const footerLinks = {
    services: [
      { name: 'AI Solutions', href: '#services' },
      { name: 'Blockchain Development', href: '#services' },
      { name: 'Cloud Services', href: '#services' },
      { name: 'Cybersecurity', href: '#services' },
      { name: 'Data Analytics', href: '#services' },
      { name: 'Web3 Integration', href: '#services' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#about' },
      { name: 'Careers', href: '#about' },
      { name: 'Contact', href: '#contact' }
    ],
    resources: [
      { name: 'Case Studies', href: '#solutions' },
      { name: 'Documentation', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'Support Center', href: '#' },
      { name: 'Community', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR Compliance', href: '#' },
    ]
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: <FaLinkedin size={18} />, href: '#' },
    { name: 'Twitter', icon: <FaTwitter size={18} />, href: '#' },
    { name: 'GitHub', icon: <FaGithub size={18} />, href: '#' },
    { name: 'Medium', icon: <FaMedium size={18} />, href: '#' },
    { name: 'YouTube', icon: <FaYoutube size={18} />, href: '#' },
    { name: 'Discord', icon: <FaDiscord size={18} />, href: '#' }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        {/* Top Section - Newsletter & Contact */}
        <div className="footer-top">
          <div className="footer-newsletter">
            <h3 className="footer-title">Stay Updated</h3>
            <p className="footer-description">
              Subscribe to our newsletter for the latest in AI, blockchain, and tech innovation.
            </p>
            
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <div className="form-group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="newsletter-input"
                  required
                />
                <button type="submit" className="btn newsletter-btn">
                  {subscribed ? 'Subscribed!' : 'Subscribe'}
                </button>
              </div>
              {subscribed && (
                <p className="success-message">🎉 Thank you for subscribing!</p>
              )}
            </form>
          </div>

          <div className="footer-contact">
            <h3 className="footer-title">Ready to Transform?</h3>
            <p className="footer-description">
              Let's discuss how Intelliverse can help your business thrive.
            </p>
            <button className="btn">Schedule a Call</button>
          </div>
        </div>

        {/* Middle Section - Links Grid */}
        <div className="footer-middle">
          <div className="footer-links-grid">
            {/* Services */}
            <div className="footer-column">
              <h4 className="column-title">Services</h4>
              <ul className="footer-links">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="footer-column">
              <h4 className="column-title">Company</h4>
              <ul className="footer-links">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="footer-column">
              <h4 className="column-title">Resources</h4>
              <ul className="footer-links">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="footer-column">
              <h4 className="column-title">Legal</h4>
              <ul className="footer-links">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social & Theme */}
            <div className="footer-column">
              <h4 className="column-title">Connect With Us</h4>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="social-icon"
                    aria-label={social.name}
                    title={social.name}
                  >
                    <span className="icon">{social.icon}</span>
                  </a>
                ))}
              </div>
              
              <div className="theme-section">
                <h5 className="theme-title">Theme</h5>
                <div className="theme-toggle-wrapper">
                  <ThemeToggle />
                  <ThemeLabel /> {/* Use ThemeLabel component instead of inline logic */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright & Info */}
        <div className="footer-bottom">
          <div className="footer-info">
            <div className="footer-logo">
              <span className="logo-text">INTELLIVERSE</span>
              <span className="logo-tagline">TECHNOLOGIES</span>
            </div>
            
            <div className="footer-address">
              <p><FaMapMarkerAlt size={14} /> No. 2, Abebe Village Road, Iganmu, Lagos</p>
              <p><FaEnvelope size={14} /> hello@intelliversetechnologies.com</p>
              <p><FaPhone size={14} /> +234 906 353 7898</p>
            </div>
          </div> {/* This closing div was missing */}

          <div className="footer-copyright">
            <p className="copyright-text">
              © {currentYear} Intelliverse Technologies. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}