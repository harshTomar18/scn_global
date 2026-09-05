import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Award, Users, Globe, Building, CheckCircle, Sparkles } from 'lucide-react';
import './CompanyProfile.css';

const CompanyProfile = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-wrapper" style={{ backgroundColor: 'var(--color-primary-bg)', color: 'var(--color-text)', minHeight: '100vh' }}>
      <Header />

      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-grid" style={{ minHeight: 'auto', paddingTop: '1rem' }}>
            <div>
              <span className="utility-label" style={{ marginBottom: '0.75rem', display: 'block' }}>SCN GLOBAL PVT. LTD. PROFILE</span>
              <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.1 }}>
                21+ YEARS OF <span style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>excellence & innovation</span>
              </h1>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                "At SCN Global, we’ve spent years developing a unique methodology that empowers individuals and organisations with the most critical skill for success." Redefining how organisations communicate, lead, recruit, and thrive across global markets.
              </p>
            </div>

            <div className="luxury-img-wrapper" style={{ borderRadius: '16px', height: '250px' }}>
              <img
                src="https://images.unsplash.com/photo-1580785692841-9a2e08e6880e?ixlib=rb-4.1.0&w=1366&q=70&auto=format"
                alt="SCN Global Profile"
                className="luxury-img"
              />
              <div className="luxury-hover-badge">OUR STORY</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ background: 'var(--color-secondary-bg)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', padding: '3.5rem 0' }}>
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card luxury-card-hover" style={{ background: 'var(--color-primary-bg)', border: '1px solid var(--color-border)' }}>
              <div className="stat-number">21+</div>
              <div style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', fontWeight: 700, textTransform: 'uppercase' }}>Years of Industry Experience</div>
            </div>
            <div className="stat-card luxury-card-hover" style={{ background: 'var(--color-primary-bg)', border: '1px solid var(--color-border)' }}>
              <div className="stat-number">+1500</div>
              <div style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', fontWeight: 700, textTransform: 'uppercase' }}>Satisfied Corporate Clients</div>
            </div>
            <div className="stat-card luxury-card-hover" style={{ background: 'var(--color-primary-bg)', border: '1px solid var(--color-border)' }}>
              <div className="stat-number">+2M</div>
              <div style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', fontWeight: 700, textTransform: 'uppercase' }}>Followers & Candidate Network</div>
            </div>
            <div className="stat-card luxury-card-hover" style={{ background: 'var(--color-primary-bg)', border: '1px solid var(--color-border)' }}>
              <div className="stat-number">PAN India</div>
              <div style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', fontWeight: 700, textTransform: 'uppercase' }}>Presence & Branch Offices</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Narrative & Timeline */}
      <section className="section" style={{ padding: '5rem 0' }}>
        <div className="container">

          <div style={{ marginBottom: '4rem' }}>
            <span className="utility-label" style={{ marginBottom: '0.5rem', display: 'block' }}>OUR EVOLUTION</span>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-text)', marginBottom: '1.25rem' }}>
              OUR STORY & JOURNEY
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.8 }}>
              SCN Global Pvt. Ltd. is a forward-thinking professional services firm dedicated to transforming workforce management, executive search, and statutory compliance. Founded with a clear vision to bridge the gap between human potential and business performance, we deliver expert-led staffing, payroll, and organizational development programs.
            </p>
          </div>

          {/* Timeline */}
          <div className="timeline-section">
            
            <div className="timeline-item">
              <span className="timeline-year">2004 - 2020</span>
              <h3 style={{ color: 'var(--color-text)', fontSize: '1.5rem', marginBottom: '0.75rem' }}>FOUNDATION & CORE EXPANSION</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: 1.7 }}>
                Established with core principles of integrity and client connection. SCN Global expanded its footprints across North India, building strong foundations in recruitment, contract staffing, and industrial labour management.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-year">2022</span>
              <h3 style={{ color: 'var(--color-text)', fontSize: '1.5rem', marginBottom: '0.75rem' }}>TECH-ENABLED PAYROLL & CORPORATE SOLUTIONS</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: 1.7 }}>
                Pioneered end-to-end cloud-based payroll automation and compliance tracking systems. Introduced custom executive training, soft-skills development, and strategic communication solutions for corporate clients.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-year">2023</span>
              <h3 style={{ color: 'var(--color-text)', fontSize: '1.5rem', marginBottom: '0.75rem' }}>STATE-LEVEL CAMPUS ROJGAR MELA MILESTONE</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: 1.7 }}>
                Successfully conducted a landmark Mega Campus Recruitment / Rojgar Mela on August 26th, 2023, graced by Govind Singh Rajput, Revenue Minister of Madhya Pradesh. Placed thousands of youth and received high commendation for recruitment excellence.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-year">2024 - 2025</span>
              <h3 style={{ color: 'var(--color-text)', fontSize: '1.5rem', marginBottom: '0.75rem' }}>GLOBAL & MULTI-INDUSTRY LEADERSHIP</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: 1.7 }}>
                Today, SCN Global serves a growing network of clients from emerging start-ups to Fortune 5000 leaders across IT, manufacturing, healthcare, logistics, and retail. Our commitment to long-term partnerships continues to define our brand.
              </p>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CompanyProfile;
