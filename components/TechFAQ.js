// components/TechFAQ.js
'use client';

import { useState } from 'react';
import { 
  FaServer, 
  FaLaptopCode, 
  FaTools, 
  FaCloud, 
  FaShieldAlt,
  FaNetworkWired,
  FaDatabase,
  FaPhone,
  FaCogs,
  FaQuestionCircle
} from 'react-icons/fa';

export default function TechFAQ() {
  const [activeCategory, setActiveCategory] = useState('hardware');
  const [openIndex, setOpenIndex] = useState(null);

  const hardwareFAQs = [
    {
      question: 'What hardware brands do you support?',
      answer: 'We support all major brands including Dell, HP, Lenovo, Cisco, Juniper, APC, Eaton, and specialized IoT hardware from Raspberry Pi to industrial PLCs. We also work with white-label and custom hardware solutions.',
      icon: <FaServer size={18} />
    },
    {
      question: 'Do you provide hardware procurement services?',
      answer: 'Yes, we offer comprehensive procurement including bulk corporate sourcing, vendor management, supply chain coordination, and global logistics for enterprise hardware needs.',
      icon: <FaLaptopCode size={18} />
    },
    {
      question: 'What is your hardware repair turnaround time?',
      answer: 'Standard repairs: 24-48 hours. Emergency repairs: Same-day service for critical issues. We maintain an extensive parts inventory to minimize downtime.',
      icon: <FaTools size={18} />
    },
    {
      question: 'Do you offer preventive maintenance contracts?',
      answer: 'Yes, we offer AMC (Annual Maintenance Contracts) with monthly, quarterly, or annual schedules. Includes dust cleaning, thermal paste replacement, performance audits, and predictive failure analysis.',
      icon: <FaCogs size={18} />
    },
    {
      question: 'Can you help with data center setup?',
      answer: 'Absolutely. We provide end-to-end data center services: rack deployment, cable management, power distribution, cooling solutions, network infrastructure, and security systems.',
      icon: <FaDatabase size={18} />
    },
    {
      question: 'What networking equipment do you specialize in?',
      answer: 'Enterprise switches, routers, firewalls, wireless controllers, load balancers, and SD-WAN solutions from Cisco, Juniper, Fortinet, Aruba, and Ubiquiti.',
      icon: <FaNetworkWired size={18} />
    }
  ];

  const softwareFAQs = [
    {
      question: 'What technologies do you use for software development?',
      answer: 'Frontend: Next.js, React, TypeScript. Backend: Node.js, Python, Php, .NET. Mobile: React Native, Flutter. Databases: PostgreSQL, MongoDB, Redis. Cloud: AWS, Azure, Google Cloud.',
      icon: <FaLaptopCode size={18} />
    },
    {
      question: 'Do you follow Agile methodology?',
      answer: 'Yes, we use Agile/Scrum with 2-week sprints, daily standups, sprint planning, reviews, and retrospectives. We provide transparent progress tracking through tools like Jira.',
      icon: <FaCloud size={18} />
    },
    {
      question: 'What is your software development process?',
      answer: '1. Discovery & Planning, 2. UI/UX Design, 3. Development & Testing, 4. Deployment, 5. Maintenance & Support. Each phase includes client collaboration and approval.',
      icon: <FaCogs size={18} />
    },
    {
      question: 'How do you ensure software security?',
      answer: 'We implement security at every layer: Code reviews, vulnerability scanning, penetration testing, OWASP compliance, encryption, and regular security audits.',
      icon: <FaShieldAlt size={18} />
    },
    {
      question: 'Do you provide cloud migration services?',
      answer: 'Yes, we offer comprehensive cloud migration including assessment, planning, migration execution, optimization, and ongoing management across AWS, Azure, and Google Cloud.',
      icon: <FaCloud size={18} />
    },
    {
      question: 'What support do you offer after software deployment?',
      answer: 'We provide tiered support: Basic (bug fixes), Standard (updates & maintenance), Premium (24/7 support with SLAs). Includes performance monitoring and regular updates.',
      icon: <FaServer size={18} />
    }
  ];

  const mixedFAQs = [
    {
      question: 'Can you integrate hardware with custom software?',
      answer: 'Yes, we specialize in hardware-software integration. Examples: IoT device management platforms, POS systems with custom software, industrial automation control systems.',
      category: 'integration'
    },
    {
      question: 'What industries do you serve?',
      answer: 'Finance, Healthcare, Retail, Manufacturing, Logistics, Education, Government, and Startups across various sectors requiring both hardware and software solutions.',
      category: 'general'
    },
    {
      question: 'Do you offer training for implemented solutions?',
      answer: 'Yes, we provide comprehensive training including user manuals, video tutorials, on-site training sessions, and ongoing support for both hardware and software solutions.',
      category: 'support'
    },
    {
      question: 'What are your payment terms?',
      answer: 'We offer flexible payment options: Project-based (milestone payments), Retainer model (monthly), and Time & Materials. Custom plans available for enterprise clients.',
      category: 'business'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const getActiveFAQs = () => {
    if (activeCategory === 'hardware') return hardwareFAQs;
    if (activeCategory === 'software') return softwareFAQs;
    return mixedFAQs;
  };

  return (
    <section id="tech-faq" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Technical Support</div>
          <h2>Hardware & Software FAQs</h2>
          <p className="section-description">
            Detailed answers to common questions about our hardware services, 
            software development, and integrated technology solutions.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="faq-categories">
          <div className="category-tabs">
            <button 
              className={`category-tab ${activeCategory === 'hardware' ? 'active' : ''}`}
              onClick={() => {
                setActiveCategory('hardware');
                setOpenIndex(null);
              }}
            >
              <FaServer className="tab-icon" />
              Hardware Services
            </button>
            <button 
              className={`category-tab ${activeCategory === 'software' ? 'active' : ''}`}
              onClick={() => {
                setActiveCategory('software');
                setOpenIndex(null);
              }}
            >
              <FaLaptopCode className="tab-icon" />
              Software Development
            </button>
            <button 
              className={`category-tab ${activeCategory === 'mixed' ? 'active' : ''}`}
              onClick={() => {
                setActiveCategory('mixed');
                setOpenIndex(null);
              }}
            >
              <FaCogs className="tab-icon" />
              Integrated Solutions
            </button>
          </div>
        </div>

        {/* FAQ Grid */}
        <div className="tech-faq-grid">
          <div className="faq-list">
            {getActiveFAQs().map((faq, index) => (
              <div 
                key={index} 
                className={`tech-faq-item ${openIndex === index ? 'open' : ''}`}
              >
                <button 
                  className="tech-faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <div className="question-header">
                    {faq.icon && <span className="question-icon">{faq.icon}</span>}
                    <span className="question-text">{faq.question}</span>
                  </div>
                  <span className="faq-toggle">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                
                <div className="tech-faq-answer">
                  <p>{faq.answer}</p>
                  {faq.category && (
                    <div className="faq-category-tag">
                      Category: <span>{faq.category}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Help Sidebar */}
          <div className="tech-help-sidebar">
            <div className="help-card">
              <div className="help-header">
                <FaQuestionCircle size={24} className="help-icon" />
                <h3 className="help-title">Quick Help</h3>
              </div>
              
              <div className="help-links">
                <a href="#contact" className="help-link">
                  <FaServer size={16} />
                  <span>Hardware Consultation</span>
                </a>
                <a href="#contact" className="help-link">
                  <FaLaptopCode size={16} />
                  <span>Software Requirements</span>
                </a>
                <a href="#solutions" className="help-link">
                  <FaDatabase size={16} />
                  <span>View Case Studies</span>
                </a>
                <a href="#contact" className="help-link">
                  <FaShieldAlt size={16} />
                  <span>Security Assessment</span>
                </a>
              </div>

              <div className="help-contact">
                <h4 className="contact-title">Need Immediate Help?</h4>
                <p className="contact-description">
                  For urgent hardware or software issues, contact our 24/7 support team.
                </p>
                <div className="contact-info">
                  <div className="contact-item">
                    <FaPhone size={14} />
                    <span>+234 906 353 7898 (Emergency)</span>
                  </div>
                  <div className="contact-item">
                    <FaServer size={14} />
                    <span>Hardware Support: support@intelliverse.tech</span>
                  </div>
                  <div className="contact-item">
                    <FaLaptopCode size={14} />
                    <span>Software Support: dev@intelliverse.tech</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Stack Info */}
            <div className="tech-stack-card">
              <h3 className="stack-title">Our Tech Stack</h3>
              <div className="stack-grid">
                <div className="stack-item">
                  <div className="stack-category">Frontend</div>
                  <div className="stack-tech">Next.js, React, TypeScript</div>
                </div>
                <div className="stack-item">
                  <div className="stack-category">Backend</div>
                  <div className="stack-tech">Node.js, Python, Php, .NET</div>
                </div>
                <div className="stack-item">
                  <div className="stack-category">Hardware</div>
                  <div className="stack-tech">Dell, HP, Cisco, IoT</div>
                </div>
                <div className="stack-item">
                  <div className="stack-category">Cloud</div>
                  <div className="stack-tech">AWS, Azure, Google Cloud</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="faq-cta">
          <div className="cta-content">
            <h3 className="cta-title">Still Have Technical Questions?</h3>
            <p className="cta-description">
              Our technical experts are ready to answer specific questions about your 
              hardware requirements, software architecture, or integration challenges.
            </p>
          </div>
          <div className="cta-actions">
            <button className="btn">Schedule Technical Call</button>
            <button className="btn btn-secondary">Download Tech Specs</button>
          </div>
        </div>
      </div>
    </section>
  );
}