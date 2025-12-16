// components/Contact.js
'use client';

import { useState } from 'react';
import { 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaPhone, 
  FaClock 
} from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Define services array at the top level of the component
  const contactServices = [
    'Artificial Intelligence',
    'Blockchain Development',
    'Cloud Solutions',
    'Cybersecurity',
    'Data Analytics',
    'Web3 Solutions',
    'Custom Development',
    'Consultation',
    'Hardware Services',
    'Digital Transformation',
    'Managed Support'
  ];

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt size={24} />,
      title: 'Office Location',
      details: ['No. 2, Abebe Village Road, Iganmu', 'Lagos, Nigeria'],
      color: '#111111'
    },
    {
      icon: <FaEnvelope size={24} />,
      title: 'Email Address',
      details: ['hello@intelliversetechnologies.com', 'support@intelliversetechnologies.com'],
      color: '#222222'
    },
    {
      icon: <FaPhone size={24} />,
      title: 'Phone Number',
      details: ['+234 906 353 7898'],
      color: '#333333'
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Get In Touch</div>
          <h2>Let's Build Something Great</h2>
          <p className="section-description">
            Ready to transform your business with intelligent technology? 
            Contact us for a free consultation.
          </p>
        </div>

        <div className="contact-container">
          {/* Contact Information */}
          <div className="contact-info">
            <h3 className="contact-info-title">Contact Information</h3>
            <p className="contact-info-description">
              Reach out to us through any channel convenient for you. 
              Our team typically responds within 24 hours.
            </p>
            
            <div className="contact-info-grid">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-card">
                  <div 
                    className="contact-icon"
                    style={{ backgroundColor: info.color }}
                  >
                    <span className="icon-symbol">{info.icon}</span>
                  </div>
                  <div className="contact-details">
                    <h4 className="contact-card-title">{info.title}</h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="contact-card-detail">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="social-section">
              <h4 className="social-title">Follow Our Journey</h4>
              <div className="social-links">
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">GitHub</a>
                <a href="#" className="social-link">Medium</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            {submitSuccess && (
              <div className="success-message">
                ✅ Thank you! Your message has been sent. We'll contact you shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="john@company.com"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="company" className="form-label">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Your Company Inc."
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service" className="form-label">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="">Select a service</option>
                    {contactServices.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Tell us about your project, timeline, and budget..."
                  rows="5"
                  required
                ></textarea>
              </div>

              <div className="form-actions">
                <button
                  type="submit"
                  className="btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                <p className="form-note">
                  By submitting, you agree to our Privacy Policy.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}