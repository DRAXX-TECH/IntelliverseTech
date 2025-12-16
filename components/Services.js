// components/Services.js - Updated with animations
'use client';

import ScrollAnimation from './ScrollAnimation';
import { 
  FaRobot, 
  FaLink, 
  FaCloud, 
  FaShieldAlt, 
  FaChartBar, 
  FaGlobe 
} from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      icon: <FaRobot size={32} />,
      title: 'Artificial Intelligence',
      description: 'Custom AI solutions, machine learning models, and predictive analytics to drive business intelligence.',
      features: ['ML Pipelines', 'Computer Vision', 'NLP', 'Predictive Analytics']
    },
    {
      icon: <FaLink size={32} />,
      title: 'Blockchain Development',
      description: 'Secure, transparent blockchain solutions including smart contracts, DApps, and decentralized systems.',
      features: ['Smart Contracts', 'DApps', 'Tokenization', 'DeFi Solutions']
    },
    {
      icon: <FaCloud size={32} />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure, migration services, and cloud-native application development.',
      features: ['AWS/Azure/GCP', 'Migration', 'DevOps', 'Containerization']
    },
    {
      icon: <FaShieldAlt size={32} />,
      title: 'Cybersecurity',
      description: 'Comprehensive security audits, threat detection, and protection systems for digital assets.',
      features: ['Security Audits', 'Threat Detection', 'Encryption', 'Compliance']
    },
    {
      icon: <FaChartBar size={32} />,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights with advanced analytics and visualization tools.',
      features: ['Big Data', 'BI Tools', 'Data Warehousing', 'Real-time Analytics']
    },
    {
      icon: <FaGlobe size={32} />,
      title: 'Web3 Solutions',
      description: 'Next-generation decentralized web applications and digital transformation services.',
      features: ['Metaverse', 'NFT Platforms', 'DAO', 'Web3 Integration']
    }
  ];

  return (
    <section id="services" className="section section-dark">
      <div className="container">
        <ScrollAnimation animation="fade-up">
          <div className="section-header">
            <div className="section-badge">Our Expertise</div>
            <h2>Core Services</h2>
            <p className="section-description">
              We deliver comprehensive technology solutions that empower businesses 
              to thrive in the digital era.
            </p>
          </div>
        </ScrollAnimation>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <ScrollAnimation 
              key={index} 
              animation="fade-up"
              delay={index * 100}
            >
              <div className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <div className="service-features">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="feature-tag">{feature}</span>
                  ))}
                </div>
                
                <a href="#" className="service-link">
                  Learn More →
                </a>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}