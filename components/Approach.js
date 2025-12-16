
import { 
  FaLaptopCode, 
  FaCloud, 
  FaRobot, 
  FaTools, 
  FaSyncAlt,
  FaRocket 
} from 'react-icons/fa';

export default function Approach() {
  const approaches = [
    {
      icon: <FaLaptopCode size={28} />,
      title: 'Custom Software Engineering',
      description: 'Design and ship cloud-native web, mobile, and desktop products aligned to your KPIs with API-first architectures.',
      features: ['Cloud-Native Development', 'API-First Architecture', 'Mobile & Web Apps', 'KPI-Driven Delivery']
    },
    {
      icon: <FaCloud size={28} />,
      title: 'Cloud & DevOps Automation',
      description: 'Modernize infrastructure with Azure, AWS, and Google Cloud deployments, CI/CD, observability, and FinOps governance.',
      features: ['Multi-Cloud Strategy', 'CI/CD Pipelines', 'Infrastructure as Code', 'FinOps Optimization']
    },
    {
      icon: <FaRobot size={28} />,
      title: 'AI, Data & Security',
      description: 'Build predictive analytics, chatbots, and secure data platforms with end-to-end governance and compliance.',
      features: ['Predictive Analytics', 'AI/ML Solutions', 'Data Governance', 'Security Compliance']
    },
    {
      icon: <FaTools size={28} />,
      title: 'Hardware & Field Services',
      description: 'Procure, deploy, and maintain enterprise hardware, data centers, edge devices, and IoT automation in one program.',
      features: ['Hardware Procurement', 'Data Center Operations', 'IoT Deployment', '24/7 Maintenance']
    }
  ];

  return (
    <section id="approach" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Our Integrated Approach</div>
          <h2>Software Intelligence Plus Hardware Reliability</h2>
          <p className="section-description">
            Intelliverse embeds cross-functional squads that co-create strategy, design resilient software, 
            and manage hardware fleets that keep mission-critical operations online.
          </p>
        </div>
        
        <div className="approach-grid">
          {approaches.map((approach, index) => (
            <div key={index} className="approach-card">
              <div className="approach-card-header">
                <div className="approach-icon">{approach.icon}</div>
                <div className="approach-badge">0{index + 1}</div>
              </div>
              
              <h3 className="approach-title">{approach.title}</h3>
              <p className="approach-description">{approach.description}</p>
              
              <div className="approach-features">
                {approach.features.map((feature, idx) => (
                  <span key={idx} className="feature-tag">{feature}</span>
                ))}
              </div>
              

            </div>
          ))}
        </div>
        
        <div className="approach-cta">
          <div className="cta-content">
            <h3 className="cta-title">Ready to Deploy Cross-Functional Squads?</h3>
            <p className="cta-description">
              Our integrated teams combine software engineering, cloud expertise, AI capabilities, 
              and hardware operations to deliver complete solutions.
            </p>
          </div>
          <button className="btn">Schedule Technical Consultation</button>
        </div>
      </div>
    </section>
  );
}