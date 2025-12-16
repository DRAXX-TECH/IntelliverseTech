// components/FAQ.js
'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How to build a website?',
      answer: 'We follow a structured 5-phase process: Discovery & Planning, Design & Prototyping, Development & Testing, Deployment & Launch, and Post-Launch Support. Each phase includes client collaboration and approval checkpoints.'
    },
    {
      question: 'How long will it take to get a new website?',
      answer: 'Timeline depends on project complexity: Basic websites (2-4 weeks), Business websites (4-8 weeks), E-commerce platforms (8-12 weeks), Custom web applications (12+ weeks). We provide detailed project timelines during discovery.'
    },
    {
      question: 'Do you only create HTML websites?',
      answer: 'No, we build modern, full-stack applications using Next.js, React, Node.js, and various databases. We create responsive, SEO-friendly websites with dynamic functionality, APIs, and content management systems.'
    },
    {
      question: 'Will my website be mobile-friendly?',
      answer: 'Absolutely. All our websites are built mobile-first with responsive design principles. We ensure optimal performance across all devices and screen sizes, with specific attention to mobile user experience.'
    },
    {
      question: 'Will you maintain my site for me?',
      answer: 'Yes, we offer comprehensive maintenance plans including security updates, performance monitoring, content updates, and technical support. Choose from Basic, Professional, or Enterprise support tiers.'
    },
    {
      question: 'I\'m on a strict budget. Do you have any low cost options?',
      answer: 'We offer scalable solutions: Starter packages for small businesses, modular development for phased implementation, and flexible payment options. We can prioritize features to meet budget constraints.'
    },
    {
      question: 'What technologies do you use?',
      answer: 'We use modern tech stacks: Next.js/React for frontend, Node.js/Python/PHP for backend, PostgreSQL/MongoDB for databases, AWS/Azure/Google Cloud for hosting, and Docker/Kubernetes for deployment.'
    },
    {
      question: 'Do you provide content creation services?',
      answer: 'Yes, we partner with professional copywriters and content strategists. We can handle everything from content strategy and writing to image selection and SEO optimization.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section section-dark">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Get Answers</div>
          <h2>Frequently Asked Questions</h2>
          <p className="section-description">
            Common questions about our web development process, timelines, 
            and services. Can't find your answer? Contact us directly.
          </p>
        </div>
        
        <div className="faq-container">
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${openIndex === index ? 'open' : ''}`}
              >
                <button 
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="question-text">{faq.question}</span>
                  <span className="faq-icon">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="faq-sidebar">
            <div className="sidebar-card">
              <h3 className="sidebar-title">Still Have Questions?</h3>
              <p className="sidebar-description">
                Our team is ready to answer any specific questions about 
                your project requirements, timelines, or budget.
              </p>
              
              <div className="sidebar-contact">
                <div className="contact-method">
                  <div className="method-icon">📧</div>
                  <div className="method-info">
                    <div className="method-label">Email Us</div>
                    <a href="mailto:support@intelliverse.tech" className="method-value">
                      support@intelliversetechnologies.com
                    </a>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-icon">📞</div>
                  <div className="method-info">
                    <div className="method-label">Call Us</div>
                    <a href="tel:+2348012345678" className="method-value">
                      +234 801 234 5678
                    </a>
                  </div>
                </div>
              </div>
              
              <button className="btn btn-secondary">Schedule a Call</button>
            </div>
            
            <div className="sidebar-tip">
              <div className="tip-icon">💡</div>
              <div className="tip-content">
                <h4>Pro Tip</h4>
                <p>
                  Have your project requirements and goals ready before 
                  contacting us. This helps us provide more accurate estimates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}