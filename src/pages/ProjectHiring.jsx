import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Calendar, Clock, Sliders, FileText, UserCheck, Activity } from 'lucide-react';
import './ProjectHiring.css';

const ProjectHiring = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-wrapper" style={{ backgroundColor: 'var(--color-primary-bg)', color: 'var(--color-text)', minHeight: '100vh' }}>
      <Header />

      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-grid" style={{ minHeight: 'auto', paddingTop: '2rem' }}>
            <div>
              <span className="utility-label" style={{ marginBottom: '1rem', display: 'block' }}>SCN GLOBAL PROJECT HIRING</span>
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', fontWeight: 900, marginBottom: '1.5rem', lineHeight: 0.9 }}>
                LONG-TERM & SHORT-TERM <span style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>project hiring</span>
              </h1>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.25rem', lineHeight: 1.6 }}>
                Flexible workforce solutions designed to meet project-based demands. We assemble specialized project teams to ensure timely execution and successful delivery.
              </p>
            </div>

            <div className="luxury-img-wrapper" style={{ borderRadius: '24px', height: '380px' }}>
              <img
                src="https://assets.zyrosite.com/YrDJ5VXJbXtRy9pq/scn-global-pvt.-ltd.-project-hiring-AR03OREKnpIE0ykk.jpg"
                alt="Project Hiring"
                className="luxury-img"
              />
              <div className="luxury-hover-badge">PROJECTS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section" style={{ padding: '5rem 0' }}>
        <div className="container">

          {/* Long-Term vs Short-Term Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', marginBottom: '5rem' }}>
            
            <div style={{ background: 'var(--color-secondary-bg)', border: '1px solid var(--color-border)', borderRadius: '24px', padding: '3rem' }}>
              <div style={{ color: 'var(--color-accent)', marginBottom: '1.25rem' }}><Calendar size={40} /></div>
              <h2 style={{ color: 'var(--color-text)', fontSize: '2rem', marginBottom: '1rem' }}>LONG-TERM PROJECT HIRING</h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Engaging professionals for assignments spanning several months to multiple years. Ideal for project managers, senior technical specialists, enterprise architects, and site directors who remain essential throughout the project lifecycle.
              </p>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Emphasizes deep technical capability, adaptability, leadership, and sustained long-term commitment.
              </p>
            </div>

            <div style={{ background: 'var(--color-secondary-bg)', border: '1px solid var(--color-border)', borderRadius: '24px', padding: '3rem' }}>
              <div style={{ color: 'var(--color-accent)', marginBottom: '1.25rem' }}><Clock size={40} /></div>
              <h2 style={{ color: 'var(--color-text)', fontSize: '2rem', marginBottom: '1rem' }}>SHORT-TERM PROJECT HIRING</h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Onboarding specialists for engagements with a defined scope ranging from a few days to several months. Solves urgent skill gaps, seasonal peaks, audit requirements, or specialized technical deployments.
              </p>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Prioritizes rapid integration, specialized domain skills, and immediate deadline execution.
              </p>
            </div>

          </div>

          {/* Key Considerations */}
          <div style={{ background: 'var(--color-secondary-bg)', border: '1px solid var(--color-border)', borderRadius: '24px', padding: '3.5rem 3rem' }}>
            <span className="utility-label" style={{ marginBottom: '0.5rem', display: 'block' }}>STRATEGIC EXECUTION</span>
            <h2 style={{ fontSize: '2.4rem', color: 'var(--color-text)', marginBottom: '0.75rem' }}>KEY CONSIDERATIONS FOR PROJECT HIRING</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', marginBottom: '2.5rem' }}>
              SCN Global structures project hiring around 6 critical operational vectors:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem' }}>
              
              <div style={{ background: 'var(--color-primary-bg)', border: '1px solid var(--color-border)', padding: '1.75rem', borderRadius: '12px' }}>
                <h4 style={{ color: 'var(--color-text)', fontSize: '1.1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Calendar size={20} color="var(--color-accent)" /> Project Overview & Timeline
                </h4>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Defining milestone dates, deliverables, and duration to select short-term vs long-term strategies.
                </p>
              </div>

              <div style={{ background: 'var(--color-primary-bg)', border: '1px solid var(--color-border)', padding: '1.75rem', borderRadius: '12px' }}>
                <h4 style={{ color: 'var(--color-text)', fontSize: '1.1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Sliders size={20} color="var(--color-accent)" /> Required Skills & Expertise
                </h4>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Mapping technical qualifications and certifications required for flawless project execution.
                </p>
              </div>

              <div style={{ background: 'var(--color-primary-bg)', border: '1px solid var(--color-border)', padding: '1.75rem', borderRadius: '12px' }}>
                <h4 style={{ color: 'var(--color-text)', fontSize: '1.1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Clock size={20} color="var(--color-accent)" /> Adaptive Hiring Approach
                </h4>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Flexible scaling models that adapt to shifting resource availability and project scope changes.
                </p>
              </div>

              <div style={{ background: 'var(--color-primary-bg)', border: '1px solid var(--color-border)', padding: '1.75rem', borderRadius: '12px' }}>
                <h4 style={{ color: 'var(--color-text)', fontSize: '1.1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FileText size={20} color="var(--color-accent)" /> Employment Structure
                </h4>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Fixed-term contracts, statement-of-work (SOW) models, or freelance consulting agreements.
                </p>
              </div>

              <div style={{ background: 'var(--color-primary-bg)', border: '1px solid var(--color-border)', padding: '1.75rem', borderRadius: '12px' }}>
                <h4 style={{ color: 'var(--color-text)', fontSize: '1.1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <UserCheck size={20} color="var(--color-accent)" /> Seamless Onboarding
                </h4>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Providing necessary tools, hardware access, orientation, and team integration from Day 1.
                </p>
              </div>

              <div style={{ background: 'var(--color-primary-bg)', border: '1px solid var(--color-border)', padding: '1.75rem', borderRadius: '12px' }}>
                <h4 style={{ color: 'var(--color-text)', fontSize: '1.1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Activity size={20} color="var(--color-accent)" /> Performance Tracking
                </h4>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Regular milestone evaluations, feedback loops, and productivity monitoring throughout the project life cycle.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectHiring;
