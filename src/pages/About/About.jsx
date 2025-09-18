import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  const navigate = useNavigate();
  return (
    <section className='about'>
      <button
  style={{
    margin: '2rem 0 1.5rem 3rem', // Increased left margin from 0 to 3rem
    padding: '1rem 2rem', // Increased padding for bigger size
    background: '#4a5568', // Professional dark gray
    color: '#ffffff', // Clean white text
    border: 'none',
    borderRadius: '8px', // Slightly larger border radius
    fontWeight: 600,
    fontSize: '1.1rem', // Slightly larger font
    cursor: 'pointer',
    boxShadow: '0 3px 12px rgba(0,0,0,0.15)', // Enhanced shadow for depth
    transition: 'all 0.2s ease', // Smooth hover transition
    '&:hover': {
      background: '#2d3748', // Darker gray on hover
      transform: 'translateY(-1px)',
      boxShadow: '0 4px 16px rgba(0,0,0,0.2)'
    }
  }}
  onClick={() => navigate('/book')}
>
  ← Home
</button>
      <div className='container'>
        <div className='section-title'>
          <h2>About BookHub</h2>
          <p className='section-subtitle'>Empowering Knowledge Through Digital Innovation</p>
        </div>
        
        {/* Top Section: Image Left, Main Info Right */}
        <div className='about-main-content'>
          <div className='about-image-container'>
            <img src={aboutImg} alt="BookHub Platform" />
          </div>
          
          <div className='about-main-info'>
            <h2 className='main-title'>Leading Digital Library Platform</h2>
            <p className='main-description'>
              BookHub is a comprehensive digital library solution designed for modern readers and institutions. 
              We provide seamless access to extensive book collections, advanced search capabilities, and 
              data-driven insights to enhance the reading experience.
            </p>
            
            <div className='key-metrics'>
              <div className='metric-item'>
                <span className='metric-number'>2.5M+</span>
                <span className='metric-label'>Books Catalog</span>
              </div>
              <div className='metric-item'>
                <span className='metric-number'>180+</span>
                <span className='metric-label'>Countries Served</span>
              </div>
              <div className='metric-item'>
                <span className='metric-number'>99.9%</span>
                <span className='metric-label'>Uptime Guarantee</span>
              </div>
            </div>
            
            <div className='main-features'>
              <div className='feature-highlight'>
                <h4>Enterprise-Grade Infrastructure</h4>
                <p>Built on scalable cloud architecture ensuring reliable performance and security.</p>
              </div>
              <div className='feature-highlight'>
                <h4>Advanced Analytics</h4>
                <p>Comprehensive reporting and insights to track reading patterns and preferences.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Full Width Sections Below */}
        <div className='about-full-sections'>
          
          {/* Services Section */}
          <div className='services-section'>
            <h3 className='section-heading'>Our Core Services</h3>
            <div className='services-grid'>
              <div className='service-card'>
                <div className='service-icon'>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                    <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h4>Intelligent Search Engine</h4>
                <p>AI-powered search with natural language processing, semantic matching, and personalized recommendations.</p>
              </div>
              
              <div className='service-card'>
                <div className='service-icon'>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" stroke="currentColor" strokeWidth="2"/>
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h4>Excellence Output</h4>
                <p>Maintaining the highest standards in code quality, user experience, and customer support.</p>
              </div>
              
              <div className='service-card'>
                <div className='service-icon'>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3" stroke="currentColor" strokeWidth="2"/>
                    <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 3c0 1-1 3-3 3s-3-2-3-3 1-3 3-3 3 2 3 3" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 21c0-1 1-3 3-3s3 2 3 3-1 3-3 3-3-2-3-3" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h4>API Integration</h4>
                <p>RESTful APIs and SDKs for seamless integration with existing library management systems and third-party applications.</p>
              </div>
            </div>
          </div>
          
          {/* Company Values */}
          <div className='values-section'>
            <h3 className='section-heading'>Our Commitment</h3>
            <div className='values-grid'>
              <div className='value-item'>
                <h4>Innovation</h4>
                <p>Continuously evolving our platform with cutting-edge technology to meet the changing needs of digital libraries.</p>
              </div>
              <div className='value-item'>
                <h4>Reliability</h4>
                <p>Ensuring 99.9% uptime and robust security measures to protect user data and maintain service continuity.</p>
              </div>
              <div className='value-item'>
                <h4>Accessibility</h4>
                <p>Making knowledge accessible to everyone through intuitive design and comprehensive accessibility features.</p>
              </div>
            </div>
          </div>
          
          {/* About Creator */}
          <div className='creator-section'>
            <h3 className='section-heading'>Leadership</h3>
            <div className='creator-profile'>
              <div className='creator-avatar'>
                <span>RS</span>
              </div>
              <div className='creator-info'>
                <h4>Rohan Singh</h4>
                <p className='creator-role'>Software Developer</p>
                <p className='creator-bio'>
                  With years of experience in software engineering and digital product development, Rohan drives BookHub's technical vision and strategic growth, having worked with leading technology companies to build scalable web applications and data systems.
                </p>
                <div className='creator-credentials'>
                  <span>B.E. Computer Science</span>
                  <span>Software Developer</span>
                  <span>Open-Source Contributer</span>
                </div>
                <a 
                  href="https://github.com/Rohs21" 
                  className="grey-btn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Visit Rohan's GitHub
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default About