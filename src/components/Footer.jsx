import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Linkedin, Twitter, Instagram, Youtube, ChevronUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavClick = (e, path) => {
    e.preventDefault();
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-12col">
          
          {/* Left 5 Columns: Brand Logo & Mission Statement */}
          <div className="footer-col-left">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
              <img
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=crop,f=png/YrDJ5VXJbXtRy9pq/logo-AQEZanpz7ytR95Bw.png"
                alt="SCN Global"
                style={{ height: '48px', width: '48px', borderRadius: '50%', objectFit: 'cover' }}
              />
              <span style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--color-text)', letterSpacing: '-0.02em' }}>
                SCN GLOBAL
              </span>
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: 1.6, maxWidth: '420px', marginBottom: '2rem' }}>
              Backed by 21+ years of experience, SCN Global Pvt. Ltd. partners with organisations of all sizes—from emerging start-ups to Fortune 5000 leaders—to deliver impactful staffing, payroll, and compliance solutions across India.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" aria-label="LinkedIn" style={{ color: 'var(--color-text)' }}><Linkedin size={20} /></a>
              <a href="#" aria-label="Twitter" style={{ color: 'var(--color-text)' }}><Twitter size={20} /></a>
              <a href="#" aria-label="Instagram" style={{ color: 'var(--color-text)' }}><Instagram size={20} /></a>
              <a href="#" aria-label="YouTube" style={{ color: 'var(--color-text)' }}><Youtube size={20} /></a>
            </div>
          </div>

          {/* Right 7 Columns: 3 Sub-columns for Navigation, Social & Locations */}
          <div className="footer-col-right">
            
            {/* Sub-column 1: Navigation */}
            <div>
              <span className="footer-header">NAVIGATION</span>
              <ul className="footer-nav-list">
                <li><a href="#" onClick={(e) => handleNavClick(e, '/')}>Home</a></li>
                <li><a href="#" onClick={(e) => handleNavClick(e, '/company-profile')}>Company Profile</a></li>
                <li><a href="#" onClick={(e) => handleNavClick(e, '/services')}>Services Overview</a></li>
                <li><a href="https://scnjobs.com/" target="_blank" rel="noreferrer">Apply for Jobs (SCN Jobs) ↗</a></li>
                <li><a href="#" onClick={(e) => handleNavClick(e, '/contact-us')}>Contact Us</a></li>
              </ul>
            </div>

            {/* Sub-column 2: Services */}
            <div>
              <span className="footer-header">CORE SERVICES</span>
              <ul className="footer-nav-list">
                <li><a href="#" onClick={(e) => handleNavClick(e, '/staffing-solution')}>Staffing Solution</a></li>
                <li><a href="#" onClick={(e) => handleNavClick(e, '/payroll-management')}>Payroll Management</a></li>
                <li><a href="#" onClick={(e) => handleNavClick(e, '/recruitment-solution')}>Recruitment Solution</a></li>
                <li><a href="#" onClick={(e) => handleNavClick(e, '/compliance-management')}>Compliance Management</a></li>
                <li><a href="#" onClick={(e) => handleNavClick(e, '/industrial-staffing')}>Industrial Staffing</a></li>
                <li><a href="#" onClick={(e) => handleNavClick(e, '/project-hiring')}>Project Hiring</a></li>
              </ul>
            </div>

            {/* Sub-column 3: Locations & Contact */}
            <div>
              <span className="footer-header">OUR LOCATIONS</span>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', display: 'flex', flexDirection: 'column', gap: '1rem', lineHeight: 1.5 }}>
                <div>
                  <strong style={{ color: 'var(--color-text)' }}>Head Office (Delhi):</strong><br />
                  No-111, 1st floor, Aggarwal City Square, Mangalam Place, Sector-3, Rohini, Delhi, 110085
                </div>
                <div>
                  <strong style={{ color: 'var(--color-text)' }}>Noida Branch:</strong><br />
                  G 31, Sector 63 Noida, PIN 201301
                </div>
                <div>
                  <strong style={{ color: 'var(--color-text)' }}>Phone:</strong> +91 9891910542<br />
                  <strong style={{ color: 'var(--color-text)' }}>Email:</strong> info@scnglobalpvtltd.com
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>
            © 2025-26 ALL RIGHTS RESERVED SCN GLOBAL PVT. LTD. | DESIGN & DEVELOPED BY <u><a href="https://github.com/congrade-vishal" target="_blank" rel="noreferrer">ER. VISHAL</a></u>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <a href="#" onClick={(e) => handleNavClick(e, '/compliance-management')}>STATUTORY PRIVACY</a>
            <a href="#" onClick={(e) => handleNavClick(e, '/contact-us')}>LEGAL TERMS</a>
            <button onClick={scrollToTop} style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', color: 'var(--color-text)', fontStyle: 'inherit' }}>
              TOP <ChevronUp size={14} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
