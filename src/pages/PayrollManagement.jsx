import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Cpu, ShieldCheck, Clock, FileCheck, Database, Smartphone, DollarSign, Award, CheckCircle } from 'lucide-react';
import './PayrollManagement.css';

const PayrollManagement = () => {
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
              <span className="utility-label" style={{ marginBottom: '0.75rem', display: 'block' }}>SCN GLOBAL PAYROLL OUTSOURCING</span>
              <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.1 }}>
                TRUSTED PARTNER IN <span style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>payroll outsourcing</span> ACROSS INDIA
              </h1>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                SCN Global Pvt. Ltd. delivers 100% tech-enabled, software-powered payroll and staffing solutions. We take over complex statutory requirements so your leadership can focus on strategic growth.
              </p>
            </div>

            <div className="luxury-img-wrapper" style={{ borderRadius: '16px', height: '250px' }}>
              <img
                src="https://assets.zyrosite.com/YrDJ5VXJbXtRy9pq/staffing-and-third-party-payroll-solutions-500x500-AGBbPZ1er3H80114.jpg"
                alt="SCN Global Payroll Solutions"
                className="luxury-img"
              />
              <div className="luxury-hover-badge">PAYROLL</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section" style={{ padding: '5rem 0' }}>
        <div className="container">

          {/* Intro Narrative */}
          <div style={{ background: 'var(--color-secondary-bg)', border: '1px solid var(--color-border)', borderRadius: '24px', padding: '3.5rem 3rem', marginBottom: '5rem' }}>
            <span className="utility-label" style={{ marginBottom: '0.5rem', display: 'block' }}>AUTOMATED & SCALABLE</span>
            <h2 style={{ fontSize: '2.4rem', color: 'var(--color-text)', marginBottom: '1.25rem' }}>
              100% TECH-ENABLED END-TO-END PAYROLL ARCHITECTURE
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              SCN Global Pvt. Ltd. is recognised as one of India's leading payroll outsourcing service providers. With a strong national presence, a seasoned team of HR and statutory compliance professionals, and a state-of-the-art technology backbone, we empower companies of all sizes to streamline critical business functions.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.8 }}>
              From recruitment and onboarding to attendance tracking, statutory compliance (EPF, ESI, PT, LWF), and salary disbursement, every aspect of the employee lifecycle is handled with automated precision.
            </p>
          </div>

          {/* Key Benefits Grid */}
          <div style={{ marginBottom: '4rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <span className="utility-label">BUSINESS ADVANTAGE</span>
              <h2 style={{ fontSize: '2.8rem', marginTop: '0.5rem', color: 'var(--color-text)' }}>KEY OPERATIONAL BENEFITS</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              
              <div className="benefit-card">
                <div>
                  <div className="icon-wrapper"><Cpu size={28} /></div>
                  <h3 style={{ color: 'var(--color-text)', fontSize: '1.3rem', marginBottom: '0.75rem' }}>OPTIMISED TECHNOLOGY EXPENDITURE</h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.98rem', lineHeight: 1.6 }}>
                    Eliminate upfront software licensing, maintenance, and hardware expenses. SCN Global handles all software updates and server infrastructure.
                  </p>
                </div>
              </div>

              <div className="benefit-card">
                <div>
                  <div className="icon-wrapper"><Clock size={28} /></div>
                  <h3 style={{ color: 'var(--color-text)', fontSize: '1.3rem', marginBottom: '0.75rem' }}>STRATEGIC REFOCUS FOR GROWTH</h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.98rem', lineHeight: 1.6 }}>
                    Free your internal HR teams from routine administrative tasks, enabling leadership to focus on talent strategy and core performance goals.
                  </p>
                </div>
              </div>

              <div className="benefit-card">
                <div>
                  <div className="icon-wrapper"><CheckCircle size={28} /></div>
                  <h3 style={{ color: 'var(--color-text)', fontSize: '1.3rem', marginBottom: '0.75rem' }}>REDUCTION IN PROCESSING ERRORS</h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.98rem', lineHeight: 1.6 }}>
                    Automated data validation eliminates manual entry errors, ensuring 100% accurate tax withholding, overtime, and salary calculations.
                  </p>
                </div>
              </div>

              <div className="benefit-card">
                <div>
                  <div className="icon-wrapper"><ShieldCheck size={28} /></div>
                  <h3 style={{ color: 'var(--color-text)', fontSize: '1.3rem', marginBottom: '0.75rem' }}>ENHANCED DATA PROTECTION</h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.98rem', lineHeight: 1.6 }}>
                    Enterprise-grade security, encrypted cloud backups, and distributed server architecture protect sensitive salary and personal data.
                  </p>
                </div>
              </div>

              <div className="benefit-card">
                <div>
                  <div className="icon-wrapper"><FileCheck size={28} /></div>
                  <h3 style={{ color: 'var(--color-text)', fontSize: '1.3rem', marginBottom: '0.75rem' }}>REGULATORY COMPLIANCE ASSURANCE</h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.98rem', lineHeight: 1.6 }}>
                    Proactive monitoring of evolving central and state labour laws to prevent legal penalties, statutory delays, or regulatory fines.
                  </p>
                </div>
              </div>

              <div className="benefit-card">
                <div>
                  <div className="icon-wrapper"><Database size={28} /></div>
                  <h3 style={{ color: 'var(--color-text)', fontSize: '1.3rem', marginBottom: '0.75rem' }}>STREAMLINED DATA CONSOLIDATION</h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.98rem', lineHeight: 1.6 }}>
                    Seamless integration between attendance systems, leave management portals, and accounting ledgers for real-time reporting.
                  </p>
                </div>
              </div>

              <div className="benefit-card">
                <div>
                  <div className="icon-wrapper"><Smartphone size={28} /></div>
                  <h3 style={{ color: 'var(--color-text)', fontSize: '1.3rem', marginBottom: '0.75rem' }}>SELF-SERVICE EMPLOYEE PORTAL</h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.98rem', lineHeight: 1.6 }}>
                    Mobile and web self-service app enabling employees to view pay slips, download Form 16, track attendance, and log leave requests.
                  </p>
                </div>
              </div>

              <div className="benefit-card">
                <div>
                  <div className="icon-wrapper"><DollarSign size={28} /></div>
                  <h3 style={{ color: 'var(--color-text)', fontSize: '1.3rem', marginBottom: '0.75rem' }}>OPTIMISED OPERATIONAL OVERHEAD</h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.98rem', lineHeight: 1.6 }}>
                    Significantly lower administrative staffing costs with a scalable model that expands effortlessly as your headcount grows.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PayrollManagement;
