import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Users, Award, ShieldCheck, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import './StaffingSolution.css';

const StaffingSolution = () => {
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
              <span className="utility-label" style={{ marginBottom: '1rem', display: 'block' }}>SCN GLOBAL STAFFING SOLUTIONS</span>
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', fontWeight: 900, marginBottom: '1.5rem', lineHeight: 0.9 }}>
                STRATEGIC STAFFING FOR A <span style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>dynamic workforce</span>
              </h1>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.25rem', lineHeight: 1.6 }}>
                Delivering end-to-end staffing solutions tailored to the diverse needs of organisations across India. From temporary staffing and contract-based roles to permanent placements, we connect you with the right talent for every business requirement.
              </p>
            </div>
            
            <div className="luxury-img-wrapper" style={{ borderRadius: '24px', height: '380px' }}>
              <img
                src="https://assets.zyrosite.com/YrDJ5VXJbXtRy9pq/scn-global-pvt.-ltd.-project-hiring-AR03OREKnpIE0ykk.jpg"
                alt="SCN Global Staffing"
                className="luxury-img"
              />
              <div className="luxury-hover-badge">STAFFING</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section" style={{ padding: '5rem 0' }}>
        <div className="container">
          
          {/* Why Staffing Matters */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center', marginBottom: '5rem' }}>
            <div>
              <span className="utility-label" style={{ marginBottom: '0.5rem', display: 'block' }}>FOUNDATIONAL TO SUCCESS</span>
              <h2 style={{ fontSize: '2.4rem', marginBottom: '1.25rem', color: 'var(--color-text)' }}>WHY STAFFING MATTERS</h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                Effective staffing is foundational to organisational success. At SCN Global, we understand that placing the right individuals in the right roles not only improves productivity and workflow but also fosters higher job satisfaction and long-term employee engagement.
              </p>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.8 }}>
                We work closely with clients to anticipate workforce needs and bridge gaps between current capabilities and future goals. Through careful talent pool analysis and market demand forecasting, we help build an agile, competent, and aligned workforce.
              </p>
            </div>

            <div className="luxury-img-wrapper" style={{ borderRadius: '20px', height: '360px' }}>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                alt="Workforce Collaboration"
                className="luxury-img"
              />
              <div className="luxury-hover-badge">WORKFORCE</div>
            </div>
          </div>

          {/* Core Staffing Processes */}
          <div style={{ marginBottom: '5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <span className="utility-label">STRUCTURED FOUNDATION</span>
              <h2 style={{ fontSize: '2.8rem', marginTop: '0.5rem', color: 'var(--color-text)' }}>CORE STAFFING PROCESSES AT SCN GLOBAL</h2>
              <p style={{ color: 'var(--color-text-muted)', maxWidth: '650px', margin: '0.75rem auto 0', fontSize: '1.05rem' }}>
                Our 5 key activities ensure organisations attract, onboard, and retain best-fit talent.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              <div className="feature-card">
                <div className="card-step-num">01</div>
                <h3 style={{ color: 'var(--color-text)', fontSize: '1.4rem', marginBottom: '0.75rem' }}>RECRUITMENT</h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                  Proactively sourcing candidates through targeted outreach, candidate databases, and digital recruitment platforms.
                </p>
              </div>

              <div className="feature-card">
                <div className="card-step-num">02</div>
                <h3 style={{ color: 'var(--color-text)', fontSize: '1.4rem', marginBottom: '0.75rem' }}>SELECTION</h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                  Evaluating candidates through rigorous assessments, structured interviews, and role-based background screenings.
                </p>
              </div>

              <div className="feature-card">
                <div className="card-step-num">03</div>
                <h3 style={{ color: 'var(--color-text)', fontSize: '1.4rem', marginBottom: '0.75rem' }}>EMPLOYMENT & ONBOARDING</h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                  Seamless documentation, statutory registration, and structured onboarding to ensure smooth candidate transition.
                </p>
              </div>

              <div className="feature-card">
                <div className="card-step-num">04</div>
                <h3 style={{ color: 'var(--color-text)', fontSize: '1.4rem', marginBottom: '0.75rem' }}>TRAINING</h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                  Equipping employees with role-specific skills, quality guidelines, safety protocols, and soft skills development.
                </p>
              </div>

              <div className="feature-card" style={{ gridColumn: '1 / -1' }}>
                <div className="card-step-num">05</div>
                <h3 style={{ color: 'var(--color-text)', fontSize: '1.4rem', marginBottom: '0.75rem' }}>RETENTION & PERFORMANCE MANAGEMENT</h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                  Implementing engagement strategies, performance metrics tracking, and career growth plans to minimize attrition and maximize productivity.
                </p>
              </div>
            </div>
          </div>

          {/* Employee Training & Development */}
          <div style={{ background: 'var(--color-secondary-bg)', border: '1px solid var(--color-border)', borderRadius: '24px', padding: '3.5rem 3rem' }}>
            <span className="utility-label" style={{ marginBottom: '0.5rem', display: 'block' }}>SKILL ENHANCEMENT</span>
            <h2 style={{ fontSize: '2.4rem', color: 'var(--color-text)', marginBottom: '1rem' }}>EMPLOYEE TRAINING & DEVELOPMENT</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Training is a vital component of SCN Global's staffing strategy. We offer specialized training modules tailored to different business functions and seniority levels:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
              <div className="training-card">
                <h4 style={{ color: 'var(--color-text)', fontSize: '1.1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle size={18} color="var(--color-accent)" /> Technical Training
                </h4>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Familiarising team members with domain-specific tools, machinery, and software systems.
                </p>
              </div>

              <div className="training-card">
                <h4 style={{ color: 'var(--color-text)', fontSize: '1.1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle size={18} color="var(--color-accent)" /> Quality Training
                </h4>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Focused on error reduction, quality control compliance, and maintaining standard operating procedures.
                </p>
              </div>

              <div className="training-card">
                <h4 style={{ color: 'var(--color-text)', fontSize: '1.1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle size={18} color="var(--color-accent)" /> Skill Enhancement
                </h4>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Targeted refresher programs to update competencies and boost workplace productivity.
                </p>
              </div>

              <div className="training-card">
                <h4 style={{ color: 'var(--color-text)', fontSize: '1.1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle size={18} color="var(--color-accent)" /> Soft Skills
                </h4>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Communication, teamwork, problem-solving, and leadership training for holistic career growth.
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

export default StaffingSolution;
