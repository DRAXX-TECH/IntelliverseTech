// components/HardwareServices.js
import {
  FaShoppingCart,
  FaTools,
  FaShieldAlt,
  FaServer,
  FaHdd,
  FaBolt,
  FaSatelliteDish,
  FaStore,
  FaChalkboardTeacher
} from 'react-icons/fa';

export default function HardwareServices() {
  const hardwareServices = [
    {
      category: 'Sales & Procurement',
      icon: <FaShoppingCart size={28} />,
      services: [
        'Laptops, desktops, workstations, servers',
        'Routers, switches, UPS, peripherals',
        'Corporate bulk sourcing & vendor mgmt',
        'Global supply chain coordination'
      ],
      color: '#111111'
    },
    {
      category: 'Diagnostics & Repairs',
      icon: <FaTools size={28} />,
      services: [
        'No-power, boot, overheating fixes',
        'Screen, keyboard, charging & battery swaps',
        'SSD/HDD upgrades and motherboard repair',
        'Component-level troubleshooting'
      ],
      color: '#222222'
    },
    {
      category: 'Preventive Maintenance',
      icon: <FaShieldAlt size={28} />,
      services: [
        'Dust removal, thermal paste, fans',
        'Monthly / annual AMC contracts',
        'Performance health and lifecycle audits',
        'Predictive failure analysis'
      ],
      color: '#333333'
    },
    {
      category: 'Servers & Networking',
      icon: <FaServer size={28} />,
      services: [
        'Dell, HP, Lenovo rack deployments',
        'RAID, backup, clustering setups',
        'LAN/WAN, WiFi, SD-WAN, firewalls',
        'Network optimization & security'
      ],
      color: '#444444'
    },
    {
      category: 'Data Recovery & Security',
      icon: <FaHdd size={28} />,
      services: [
        'Deleted, damaged HDD/SSD recovery',
        'Server & RAID restoration labs',
        'Firewalls, CCTV, biometric access, NAS',
        'Encrypted storage solutions'
      ],
      color: '#555555'
    },
    {
      category: 'Power & Infrastructure',
      icon: <FaBolt size={28} />,
      services: [
        'UPS, inverter integration, surge control',
        'Data center power design & redundancy',
        'Cloud-ready virtualization hardware',
        'Energy efficiency optimization'
      ],
      color: '#666666'
    },
    {
      category: 'IoT & Automation Hardware',
      icon: <FaSatelliteDish size={28} />,
      services: [
        'Sensors, PLCs, RFID, industrial monitors',
        'Remote logging & telemetry devices',
        'Factory & logistics automation projects',
        'Edge computing deployments'
      ],
      color: '#777777'
    },
    {
      category: 'Workplace & Retail',
      icon: <FaStore size={28} />,
      services: [
        'Home office bundles & smart setups',
        'POS machines, scanners, receipt printers',
        'Short-term rentals & pop-up deployments',
        'Digital signage & kiosk systems'
      ],
      color: '#888888'
    },
    {
      category: 'Support & Training',
      icon: <FaChalkboardTeacher size={28} />,
      services: [
        'SLA-based remote/on-site support',
        'TeamViewer/AnyDesk assistance',
        'Hardware & networking training sessions',
        '24/7 operations center'
      ],
      color: '#999999'
    }
  ];

  return (
    <section id="hardware" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Hardware Division</div>
          <h2>Enterprise-Grade Hardware Solutions</h2>
          <p className="section-description">
            From diagnostics to data centers, Intelliverse is your single partner for procurement, 
            installation, support, and lifecycle management of all hardware infrastructure.
          </p>
        </div>
        
        <div className="hardware-grid">
          {hardwareServices.map((service, index) => (
            <div key={index} className="hardware-card">
              <div className="hardware-card-header">
                <div 
                  className="hardware-icon"
                  style={{ backgroundColor: service.color }}
                >
                  <span className="icon">{service.icon}</span>
                </div>
                <h3 className="hardware-category">{service.category}</h3>
              </div>
              
              <ul className="hardware-services-list">
                {service.services.map((item, idx) => (
                  <li key={idx} className="service-item">
                    <span className="service-bullet"></span>
                    <span className="service-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="hardware-cta">
          <div className="cta-content">
            <h3 className="cta-title">End-to-End Hardware Lifecycle Management</h3>
            <p className="cta-description">
              From initial procurement to disposal and replacement, we manage your entire hardware 
              ecosystem with certified engineers, SLA-backed support, and transparent pricing.
            </p>
            
            <div className="cta-features">
              <div className="feature">
                <div className="feature-icon">✅</div>
                <span className="feature-text">Certified Hardware Engineers</span>
              </div>
              <div className="feature">
                <div className="feature-icon">✅</div>
                <span className="feature-text">SLA-Backed Service Agreements</span>
              </div>
              <div className="feature">
                <div className="feature-icon">✅</div>
                <span className="feature-text">24/7 On-site & Remote Support</span>
              </div>
            </div>
          </div>
    
        </div>
      </div>
    </section>
  );
}