import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Target, Search, CheckSquare, Zap, Clock, Users, Building, GraduationCap } from 'lucide-react';
import './RecruitmentSolution.css';

const RecruitmentSolution = () => {
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
              <span className="utility-label" style={{ marginBottom: '0.75rem', display: 'block' }}>SCN GLOBAL RECRUITMENT SOLUTIONS</span>
              <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.1 }}>
                PRECISION & SPEED IN <span style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>talent acquisition</span>
              </h1>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                SCN Global Pvt. Ltd. offers a specialized, industry-aligned search methodology tailored to meet your unique hiring goals. From IT specialists to executive leadership, we deliver top-tier professionals PAN India.
              </p>
            </div>

            <div className="luxury-img-wrapper" style={{ borderRadius: '16px', height: '250px' }}>
              <img
                src="https://assets.zyrosite.com/YrDJ5VXJbXtRy9pq/resume-genius-72d3z_lfrqa-unsplash-Y4LvBqKOpKfxkaZ8.jpg"
                alt="Recruitment Solutions"
                className="luxury-img"
              />
              <div className="luxury-hover-badge">RECRUITMENT</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section" style={{ padding: '3.5rem 0' }}>
        <div className="container">

          {/* Intro Overview */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', alignItems: 'center', marginBottom: '3.5rem' }}>
            <div>
              <span className="utility-label" style={{ marginBottom: '0.5rem', display: 'block' }}>EXECUTIVE & IT SEARCH</span>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--color-text)', marginBottom: '1rem' }}>
                INDUSTRY-ALIGNED SEARCH METHODOLOGY
              </h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                We evaluate candidates not only for their immediate technical skills and experience, but also for their knowledge depth, adaptability, cultural fit, and long-term leadership potential.
              </p>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: 1.7 }}>
                Leveraging decades of cumulative recruitment expertise, internal candidate databases, advanced research tools, and extensive professional networks, SCN Global brings speed and precision to every hiring assignment.
              </p>
            </div>

            <div className="luxury-img-wrapper" style={{ borderRadius: '16px', height: '240px' }}>
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                alt="Executive Search Vetting"
                className="luxury-img"
              />
              <div className="luxury-hover-badge">EXECUTIVE</div>
            </div>
          </div>

          {/* IT Staffing & Recruitment Pillars */}
          <div style={{ marginBottom: '5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <span className="utility-label">SPECIALIZED CAPABILITIES</span>
              <h2 style={{ fontSize: '2.8rem', marginTop: '0.5rem', color: 'var(--color-text)' }}>CORE RECRUITMENT PILLARS</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              
              <div style={{ background: 'var(--color-secondary-bg)', border: '1px solid var(--color-border)', borderRadius: '16px', padding: '2.25rem' }}>
                <div style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}><Zap size={28} /></div>
                <h3 style={{ color: 'var(--color-text)', fontSize: '1.3rem', marginBottom: '0.75rem' }}>STREAMLINED HIRING PROCESS</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.98rem', lineHeight: 1.6 }}>
                  Fast-track talent identification without bottlenecks. We streamline sourcing, screening, scheduling, and offer release.
                </p>
              </div>

              <div style={{ background: 'var(--color-secondary-bg)', border: '1px solid var(--color-border)', borderRadius: '16px', padding: '2.25rem' }}>
                <div style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}><CheckSquare size={28} /></div>
                <h3 style={{ color: 'var(--color-text)', fontSize: '1.3rem', marginBottom: '0.75rem' }}>RIGOROUS CANDIDATE SCREENING</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.98rem', lineHeight: 1.6 }}>
                  Multi-tier evaluation process including technical tests, background checks, and soft skills assessment to eliminate mis-hires.
                </p>
              </div>

              <div style={{ background: 'var(--color-secondary-bg)', border: '1px solid var(--color-border)', borderRadius: '16px', padding: '2.25rem' }}>
                <div style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}><Target size={28} /></div>
                <h3 style={{ color: 'var(--color-text)', fontSize: '1.3rem', marginBottom: '0.75rem' }}>SPECIALISED IT RECRUITMENT</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.98rem', lineHeight: 1.6 }}>
                  Deep domain expertise across software engineering, cloud architecture, cybersecurity, data science, and DevOps.
                </p>
              </div>

              <div style={{ background: 'var(--color-secondary-bg)', border: '1px solid var(--color-border)', borderRadius: '16px', padding: '2.25rem' }}>
                <div style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}><Clock size={28} /></div>
                <h3 style={{ color: 'var(--color-text)', fontSize: '1.3rem', marginBottom: '0.75rem' }}>TIME AND COST EFFICIENCY</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.98rem', lineHeight: 1.6 }}>
                  Minimize vacancy costs and shorten time-to-fill with pre-screened candidate pipelines across major Indian tech hubs.
                </p>
              </div>

              <div style={{ background: 'var(--color-secondary-bg)', border: '1px solid var(--color-border)', borderRadius: '16px', padding: '2.25rem' }}>
                <div style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}><Building size={28} /></div>
                <h3 style={{ color: 'var(--color-text)', fontSize: '1.3rem', marginBottom: '0.75rem' }}>INDUSTRY VERTICAL INSIGHTS</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.98rem', lineHeight: 1.6 }}>
                  Tailored staffing strategies aligned to banking, fintech, healthcare, e-commerce, manufacturing, and retail verticals.
                </p>
              </div>

              <div style={{ background: 'var(--color-secondary-bg)', border: '1px solid var(--color-border)', borderRadius: '16px', padding: '2.25rem' }}>
                <div style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}><Users size={28} /></div>
                <h3 style={{ color: 'var(--color-text)', fontSize: '1.3rem', marginBottom: '0.75rem' }}>LONG-TERM PARTNERSHIPS</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.98rem', lineHeight: 1.6 }}>
                  We prioritize long-term client relationships, delivering scalable hiring solutions that grow as your enterprise expands.
                </p>
              </div>

            </div>
          </div>

          {/* Fresher & Mass Campus Drives */}
          <div style={{ background: 'var(--color-secondary-bg)', border: '1px solid var(--color-border)', borderRadius: '24px', padding: '3.5rem 3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ background: 'var(--color-accent)', padding: '0.75rem', borderRadius: '12px', color: 'var(--color-text)' }}>
                <GraduationCap size={32} />
              </div>
              <div>
                <span className="utility-label" style={{ fontSize: '9px' }}>NEXT-GEN PIPELINE</span>
                <h3 style={{ color: 'var(--color-text)', fontSize: '2rem', margin: 0 }}>FRESHER HIRING & MASS CAMPUS RECRUITMENT</h3>
              </div>
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              If your goal is to bring in high-energy technical talent, SCN Global offers comprehensive campus placement drives across top educational institutions in India.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              <div style={{ background: 'var(--color-primary-bg)', padding: '1.75rem', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
                <h4 style={{ color: 'var(--color-text)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Fresher Hiring Services</h4>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Identify and recruit promising engineering and graduate candidates with high growth potential and solid technology fundamentals.
                </p>
              </div>
              <div style={{ background: 'var(--color-primary-bg)', padding: '1.75rem', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
                <h4 style={{ color: 'var(--color-text)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Mass Campus Drive Execution</h4>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  End-to-end management of large-scale hiring drives (Rojgar Melas & Campus Drives), handling online assessments, interviews, and instant onboarding.
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

export default RecruitmentSolution;
