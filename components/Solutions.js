'use client';
import ScrollAnimation from './ScrollAnimation';


export default function Solutions() {
  const solutions = [
    {
      title: 'AI-Powered Retail Analytics',
      category: 'Artificial Intelligence',
      description: 'Implemented machine learning models that increased sales forecasting accuracy by 40% for a major retail chain.',
      results: ['+40% Forecasting Accuracy', '+25% Sales Growth', 'Real-time Analytics'],
      color: '#000000'
    },
    {
      title: 'Blockchain Supply Chain',
      category: 'Blockchain',
      description: 'Developed a transparent supply chain solution reducing fraud by 95% and improving traceability.',
      results: ['-95% Fraud Cases', '100% Traceability', '30% Faster Transactions'],
      color: '#333333'
    },
    {
      title: 'Secure Government Cloud',
      category: 'Cloud & Security',
      description: 'Migrated critical government infrastructure to secure cloud with 99.99% uptime and military-grade encryption.',
      results: ['99.99% Uptime', 'Zero Security Breaches', '60% Cost Reduction'],
      color: '#666666'
    },
    {
      title: 'Financial Data Platform',
      category: 'Data Analytics',
      description: 'Built a real-time data analytics platform processing 1M+ transactions daily for a fintech startup.',
      results: ['1M+ Daily Transactions', '10ms Response Time', 'Scalable Infrastructure'],
      color: '#444444'
    },
    {
      title: 'Healthcare AI Diagnostics',
      category: 'Healthcare AI',
      description: 'Created AI diagnostic tools that improved early disease detection rates by 60% in clinical trials.',
      results: ['+60% Detection Rate', 'FDA Approved', '95% Accuracy'],
      color: '#222222'
    },
    {
      title: 'Smart City IoT Network',
      category: 'IoT & Smart Cities',
      description: 'Deployed city-wide IoT network reducing energy consumption by 35% and improving public services.',
      results: ['-35% Energy Use', 'Smart Traffic Management', 'Real-time Monitoring'],
      color: '#555555'
    }
  ];

  return (
    <section id="solutions" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Success Stories</div>
          <h2>Innovative Solutions</h2>
          <p className="section-description">
            Real-world implementations that demonstrate our technical expertise 
            and business impact across various industries.
          </p>
        </div>
        
        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <div key={index} className="solution-card">
              <div className="solution-header">
                <div className="solution-category">{solution.category}</div>
                <div 
                  className="solution-color" 
                  style={{ backgroundColor: solution.color }}
                ></div>
              </div>
              
              <h3 className="solution-title">{solution.title}</h3>
              <p className="solution-description">{solution.description}</p>
              
              <div className="solution-results">
                {solution.results.map((result, idx) => (
                  <div key={idx} className="result-item">
                    <div className="result-dot"></div>
                    <span className="result-text">{result}</span>
                  </div>
                ))}
              </div>
              
              <div className="solution-footer">
                <a href="#" className="solution-link">
                  View Case Study →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}