'use client';

import { 
  FaLaptopCode,
  FaCloud,
  FaRobot,
  FaPalette,
  FaSyncAlt,
  FaRocket
} from 'react-icons/fa';

export default function SoftwareServices() {
  const softwareServices = [
    {
      category: 'Digital Products & SaaS',
      icon: <FaLaptopCode size={28} />,
      description: 'Complete software product development from concept to deployment',
      services: [
        'Web, mobile, and desktop builds',
        'SaaS multi-tenant architectures',
        'API ecosystems & marketplace integrations',
        'ERP, CRM, HRMS, KYC, accounting suites'
      ],
      color: '#111111'
    },
    {
      category: 'Cloud & DevSecOps',
      icon: <FaCloud size={28} />,
      description: 'Modern cloud infrastructure and secure development practices',
      services: [
        'Azure, AWS, Google Cloud deployments',
        'CI/CD automation, IaC, observability',
        'FinOps & performance optimization',
        'Containerization (Docker, Kubernetes)'
      ],
      color: '#222222'
    },
    {
      category: 'AI, Data & Security',
      icon: <FaRobot size={28} />,
      description: 'Intelligent systems and enterprise-grade security',
      services: [
        'Dashboards (Power BI, Looker, Grafana)',
        'Predictive ML models & automation agents',
        'VAPT, IAM, NDPR/GDPR compliance',
        'Backup & disaster recovery blueprints'
      ],
      color: '#333333'
    },
    {
      category: 'Product Design & Research',
      icon: <FaPalette size={28} />,
      description: 'User-centered design and research methodologies',
      services: [
        'UI/UX research, journeys, and testing',
        'Design systems in Figma & Adobe XD',
        'Interactive prototypes & storytelling',
        'Branding, content, and go-to-market UX'
      ],
      color: '#444444'
    },
    {
      category: 'Digital Transformation',
      icon: <FaSyncAlt size={28} />,
      description: 'Modernizing businesses for the digital age',
      services: [
        'Workflow automation & legacy modernization',
        'ERP/CRM integration & paperless ops',
        'Cloud-first operating models',
        'Process automation consulting'
      ],
      color: '#555555'
    },
    {
      category: 'Managed Support & Marketing',
      icon: <FaRocket size={28} />,
      description: 'Ongoing support and growth acceleration',
      services: [
        '24/7 support desks & SLA programs',
        'Server maintenance & performance tuning',
        'SEO, campaigns, automation add-ons',
        'Strategy + architecture advisory'
      ],
      color: '#666666'
    }
  ];


  return (
    <section id="software" className="section section-dark">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Software Division</div>
          <h2>A Clear Catalog for Every Stage of Your Digital Roadmap</h2>
          <p className="section-description">
            Mix and match squads for product launches, platform modernization, data initiatives, 
            and growth programs. Each stream ships with measurable KPIs and playbooks.
          </p>
        </div>
        
        <div className="software-grid">
          {softwareServices.map((service, index) => (
            <div key={index} className="software-card">
              <div className="software-card-header">
                <div 
                  className="software-icon"
                  style={{ backgroundColor: service.color }}
                >
                  <span className="icon">{service.icon}</span>
                </div>
                <div className="software-title-section">
                  <h3 className="software-category">{service.category}</h3>
                  <p className="software-description">{service.description}</p>
                </div>
              </div>
              
              <div className="software-services">
                <h4 className="services-title">Core Services:</h4>
                <ul className="services-list">
                  {service.services.map((item, idx) => (
                    <li key={idx} className="service-item">
                      <span className="service-bullet"></span>
                      <span className="service-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="software-card-footer">
                <div className="service-meta">
                  <span className="meta-item">📊 Measurable KPIs</span>
                  <span className="meta-item">📚 Detailed Playbooks</span>
                  <span className="meta-item">👥 Dedicated Squad</span>
                </div>
                <a href="#contact" className="software-link">
                  Discuss Your Needs →
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="software-cta">
          <div className="cta-content">
            <h3 className="cta-title">Flexible Engagement Models</h3>
            <p className="cta-description">
              Choose the engagement model that fits your needs: Dedicated Squads, 
              Project-Based Delivery, or Hybrid Teams. All backed by transparent pricing 
              and milestone-based delivery.
            </p>
            
            <div className="engagement-models">
              <div className="model">
                <div className="model-icon">👥</div>
                <div className="model-content">
                  <h4 className="model-title">Dedicated Squads</h4>
                  <p className="model-desc">Full-time team working exclusively on your project</p>
                </div>
              </div>
              
              <div className="model">
                <div className="model-icon">📋</div>
                <div className="model-content">
                  <h4 className="model-title">Project-Based</h4>
                  <p className="model-desc">Fixed scope, timeline, and budget delivery</p>
                </div>
              </div>
              
              <div className="model">
                <div className="model-icon">🔄</div>
                <div className="model-content">
                  <h4 className="model-title">Hybrid Teams</h4>
                  <p className="model-desc">Mix of dedicated and project resources</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="cta-actions">
            <button className="btn">Download Service Catalog</button>
            <button className="btn btn-secondary">Book Strategy Session</button>
          </div>
        </div>
      </div>
    </section>
  );
}