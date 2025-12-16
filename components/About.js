// components/About.js
'use client';

import { useState } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState('mission');

  const companyInfo = {
    mission: {
      title: 'Our Mission',
      content: 'To pair software studios with certified hardware engineers, delivering intelligent solutions that bridge the digital and physical worlds for enterprises worldwide.',
      stats: [
        { value: 'Lagos', label: 'Headquarters' },
        { value: 'Global', label: 'Delivery Centers' },
        { value: '24/7', label: 'Support' },
        { value: '120+', label: 'Platform Launches' }
      ]
    },
    vision: {
      title: 'Our Vision',
      content: 'To be the premier partner for intelligent technology solutions, creating seamless integration between software innovation and hardware excellence across all industries.',
      highlights: [
        'Global technology leadership',
        'Hardware-software integration',
        'Measurable business outcomes',
        'Enterprise-grade reliability'
      ]
    },
    values: {
      title: 'Our Values',
      content: 'Our core values guide every project, partnership, and technological innovation we undertake.',
      valuesList: [
        { name: 'Innovation', desc: 'Continuously pushing technological boundaries' },
        { name: 'Transparency', desc: 'Clear governance and measurable KPIs' },
        { name: 'Excellence', desc: 'Uncompromising quality in every solution' },
        { name: 'Partnership', desc: 'Collaborating for mutual success' }
      ]
    }
  };

  const companyDescription = `Founded in Lagos with global delivery centers, Intelliverse Technologies builds intelligent products, orchestrates AI programs, and runs hardware operations for enterprises across finance, energy, public sector, and fast-scaling startups.

From idea sprints to cloud migrations and field deployments, every engagement is backed by measurable KPIs, transparent governance, and 24/7 support.`;

  const capabilities = [
    { title: '120+ Platform Launches', description: 'Successfully delivered and deployed' },
    { title: 'Dedicated Product Squads', description: 'Cross-functional agile teams' },
    { title: 'Hardware & IoT Expertise', description: 'Certified engineers & developers' },
    { title: '24/7 Managed Support', description: 'Round-the-clock operations' }
  ];

  const team = [
    {
      name: 'IFEANYI AYODEJI',
      role: 'CEO & Founder',
      expertise: 'AI Research, Business Strategy',
      experience: '15+ years in tech leadership',
      fact: 'Published 20+ AI research papers',
      color: '#111111'
    },
    {
      name: 'UKOMADU KEHINDE ',
      role: 'Operations Director',
      expertise: 'Enterprise Deployment, KPI Management',
      experience: '10 years operations management',
      fact: 'Scaled support for 50+ enterprises',
      color: '#666666'
    },
    {
      name: 'ADEBAYO DAMILARE',
      role: 'Lead Backend Engineer',
      expertise: 'Distributed Systems, API Architecture, Database Optimization',
      experience: '8 years building scalable microservices',
      fact: 'Architected a payment system processing 10,000 transactions/sec',
      color: '#333333'
    },
    {
      name: 'JOSEPH PRAISE',
      role: 'Senior Frontend Engineer',
      expertise: 'React, TypeScript, Performance Optimization, State Management',
      experience: 'Built consumer-facing applications for 7+ years',
      fact: 'Led migration of a core product to React 18, improving performance by 40%',
      color: '#444444'
    },
    {
      name: 'OLOJA KINGSLEY',
      role: 'Product Design Lead',
      expertise: 'User Research, Interaction Design, Design Systems, UX Strategy',
      experience: 'MFA in Design, 7+ years in SaaS and mobile',
      fact: 'Designed a unified design system adopted by 5 product teams, reducing dev time by 25%',
      color: '#555555'
    },
    
  ];

  return (
    <section id="about" className="section section-dark">
      <div className="container">
        {/* Company Overview */}
        <div className="company-overview">
          <div className="section-header">
            <div className="section-badge">Who We Are</div>
            <h2>Intelligent Solutions, Engineered for Impact</h2>
            <div className="company-description">
              <p className="section-description">
                We pair software studios with certified hardware engineers.
              </p>
              <p className="section-description">
                {companyDescription.split('\n')[0]}
              </p>
              <p className="section-description">
                {companyDescription.split('\n')[1]}
              </p>
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="capabilities-grid">
            {capabilities.map((capability, index) => (
              <div key={index} className="capability-card">
                <h3 className="capability-title">{capability.title}</h3>
                <p className="capability-description">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Company Info Section with Tabs */}
        <div className="about-company">
          <div className="section-header">
            <h2>Our Guiding Principles</h2>
            <p className="section-description">
              The foundation of everything we build and deliver for our clients.
            </p>
          </div>
          
          {/* Tabs Navigation */}
          <div className="tabs">
            <button 
              className={`tab ${activeTab === 'mission' ? 'active' : ''}`}
              onClick={() => setActiveTab('mission')}
            >
              Our Mission
            </button>
            <button 
              className={`tab ${activeTab === 'vision' ? 'active' : ''}`}
              onClick={() => setActiveTab('vision')}
            >
              Our Vision
            </button>
            <button 
              className={`tab ${activeTab === 'values' ? 'active' : ''}`}
              onClick={() => setActiveTab('values')}
            >
              Our Values
            </button>
          </div>
          
          {/* Tab Content */}
          <div className="tab-content">
            <div className="tab-pane active">
              <h3>{companyInfo[activeTab].title}</h3>
              <p className="tab-description">{companyInfo[activeTab].content}</p>
              
              {activeTab === 'mission' && (
                <div className="mission-stats">
                  {companyInfo.mission.stats.map((stat, index) => (
                    <div key={index} className="stat-box">
                      <div className="stat-value">{stat.value}</div>
                      <div className="stat-label">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}
              
              {activeTab === 'vision' && (
                <div className="vision-highlights">
                  {companyInfo.vision.highlights.map((highlight, index) => (
                    <div key={index} className="highlight-item">
                      <div className="highlight-dot"></div>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              )}
              
              {activeTab === 'values' && (
                <div className="values-grid">
                  {companyInfo.values.valuesList.map((value, index) => (
                    <div key={index} className="value-card">
                      <h4 className="value-name">{value.name}</h4>
                      <p className="value-desc">{value.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Team Section */}
        <div className="team-section">
          <div className="section-header">
            <div className="section-badge">Our Experts</div>
            <h2>Leadership & Technical Excellence</h2>
            <p className="section-description">
              Seasoned professionals with diverse expertise driving innovation 
              and delivering exceptional results across software and hardware domains.
            </p>
          </div>
          
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-card-header">
                  <div 
                    className="member-avatar"
                    style={{ backgroundColor: member.color }}
                  >
                    <span className="avatar-initials">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="member-info">
                    <h3 className="member-name">{member.name}</h3>
                    <div className="member-role">{member.role}</div>
                  </div>
                </div>
                
                <div className="member-details">
                  <div className="detail-item">
                    <span className="detail-label">Expertise:</span>
                    <span className="detail-value">{member.expertise}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Experience:</span>
                    <span className="detail-value">{member.experience}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Key Fact:</span>
                    <span className="detail-value">{member.fact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="team-cta">
            <p className="cta-text">Join our team of innovators bridging software and hardware</p>
          </div>
        </div>
      </div>
    </section>
  );
}