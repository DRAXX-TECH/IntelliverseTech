'use client';

import { useState, useEffect } from 'react';
import { 
  FaAward, 
  FaUsers, 
  FaProjectDiagram, 
  FaClock,
  FaCheckCircle,
  FaShieldAlt,
  FaRocket,
  FaChartLine
} from 'react-icons/fa';

export default function WhyChooseUs() {
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    experience: 0,
    support: 0
  });

  const targetCounters = {
    clients: 9999,
    projects: 9999,
    experience: 10, // Years
    support: 24 // 24/7 support
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      
      const progress = currentStep / steps;
      
      setCounters({
        clients: Math.floor(targetCounters.clients * progress),
        projects: Math.floor(targetCounters.projects * progress),
        experience: Math.floor(targetCounters.experience * progress),
        support: Math.floor(targetCounters.support * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(targetCounters);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: <FaCheckCircle size={24} />,
      title: 'Diam dolor diam ipsum et tempor sit',
      description: 'Precision engineering with attention to every detail, ensuring robust and scalable solutions.',
      color: '#111111'
    },
    {
      icon: <FaShieldAlt size={24} />,
      title: 'Diam dolor diam ipsum et tempor sit',
      description: 'Enterprise-grade security protocols and compliance standards for maximum protection.',
      color: '#222222'
    },
    {
      icon: <FaRocket size={24} />,
      title: 'Diam dolor diam ipsum et tempor sit',
      description: 'Rapid deployment and scalable architecture for fast-growing businesses.',
      color: '#333333'
    },
    {
      icon: <FaChartLine size={24} />,
      title: 'Proven ROI & Business Impact',
      description: 'Measurable results with clear KPIs and transparent reporting on every project.',
      color: '#444444'
    }
  ];

  const testimonials = [
    {
      quote: "Intelliverse transformed our AI infrastructure with precision and expertise that exceeded expectations.",
      author: "Sarah Johnson",
      role: "CTO, TechCorp Inc.",
      rating: 5
    },
    {
      quote: "Their 10 years of experience in AI is evident in every solution. A true industry leader.",
      author: "Michael Chen",
      role: "Head of Innovation, FinTech Global",
      rating: 5
    }
  ];

  return (
    <section id="why-choose-us" className="section section-dark">
      <div className="container">

          {/* Testimonials Section */}
          <div className="testimonials-section">
            <div className="section-header">
              <h3>Trusted by Industry Leaders</h3>
              <p className="section-description">
                See what our clients say about working with Intelliverse Technologies.
              </p>
            </div>

            <div className="testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <div className="testimonial-quote">
                    "{testimonial.quote}"
                  </div>
                  <div className="testimonial-rating">
                    {'★'.repeat(testimonial.rating)}
                  </div>
                  <div className="testimonial-author">
                    <div className="author-name">{testimonial.author}</div>
                    <div className="author-role">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="why-choose-cta">
            <div className="cta-content">
              <FaAward size={48} className="cta-icon" />
              <h3 className="cta-title">Award-Winning AI Excellence</h3>
              <p className="cta-description">
                Join thousands of satisfied clients who have transformed their businesses 
                with our cutting-edge AI solutions and proven methodologies.
              </p>
            </div>
            <div className="cta-actions">
              <button className="btn btn-secondary">View Case Studies</button>
            </div>
          </div>
        </div>
    </section>
  );
}