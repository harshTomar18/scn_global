import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Factory, ShieldAlert, Cpu, Wrench, Layers, HardHat, CheckCircle2 } from 'lucide-react';
import './IndustrialStaffing.css';

const commonRoles = [
  "CNC Operators",
  "Forklift Drivers & Operators",
  "Assemblers & Line Packers",
  "Quality Control Inspectors",
  "Maintenance Mechanics",
  "Warehouse Operations Executives",
  "Production Line Supervisors",
  "General Helpers & Technical Staff"
];

const IndustrialStaffing = () => {
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
              <span className="utility-label" style={{ marginBottom: '0.75rem', display: 'block' }}>SCN GLOBAL INDUSTRIAL STAFFING</span>
              <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.1 }}>
                SPECIALISED INDUSTRIAL & <span style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>manufacturing staffing</span>
              </h1>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                Dependable, safety-trained, and skilled personnel for manufacturing, assembly, logistics, automotive, pharmaceuticals, and heavy engineering plants across India.
              </p>
            </div>

            <div className="luxury-img-wrapper" style={{ borderRadius: '16px', height: '250px' }}>
              <img
                src="https://assets.zyrosite.com/YrDJ5VXJbXtRy9pq/claudio-schwarz-b5uxl-qegoe-unsplash-A0xjZEq7kvHpyyVb.jpg"
                alt="Industrial Staffing"
                className="luxury-img"
              />
              <div className="luxury-hover-badge">INDUSTRIAL</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section" style={{ padding: '5rem 0' }}>
        <div className="container">

          {/* Section 1: Overview */}
          <div style={{ marginBottom: '5rem' }}>
            <span className="utility-label" style={{ marginBottom: '0.5rem', display: 'block' }}>PLANT & LOGISTICS OPERATIONS</span>
            <h2 style={{ fontSize: '2.4rem', color: 'var(--color-text)', marginBottom: '1.25rem' }}>
              WHY CHOOSE SCN GLOBAL FOR INDUSTRIAL STAFFING?
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.8 }}>
              The industrial sector demands a workforce that is not only technically competent but also safety-conscious and reliable. SCN Global Pvt. Ltd. maintains a thoroughly vetted talent pool capable of supporting daily production targets and shift quotas.
            </p>
          </div>

          {/* 4 Core Pillars Grid */}
          <div style={{ marginBottom: '5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              
              <div style={{ background: 'var(--color-secondary-bg)', border: '1px solid var(--color-border)', borderRadius: '16px', padding: '2.25rem' }}>
                <div style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}><Factory size={32} /></div>
                <h3 style={{ color: 'var(--color-text)', fontSize: '1.3rem', marginBottom: '0.75rem' }}>INDUSTRY-SPECIFIC EXPERTISE</h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                  Deep staffing experience in manufacturing, cold chain, automotive assembly, warehousing, FMCG, and pharmaceuticals.
                </p>
              </div>

              <div style={{ background: 'var(--color-secondary-bg)', border: '1px solid var(--color-border)', borderRadius: '16px', padding: '2.25rem' }}>
                <div style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}><Layers size={32} /></div>
                <h3 style={{ color: 'var(--color-text)', fontSize: '1.3rem', marginBottom: '0.75rem' }}>SCALABLE STAFFING MODELS</h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                  Flexible hiring solutions to scale up or down during peak seasonal demand without administrative overhead.
                </p>
              </div>

              <div style={{ background: 'var(--color-secondary-bg)', border: '1px solid var(--color-border)', borderRadius: '16px', padding: '2.25rem' }}>
                <div style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}><HardHat size={32} /></div>
                <h3 style={{ color: 'var(--color-text)', fontSize: '1.3rem', marginBottom: '0.75rem' }}>SAFETY-FIRST APPROACH</h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                  Workers briefed on OSHA compliance, PPE protocols, machine safety, and emergency response procedures.
                </p>
              </div>

              <div style={{ background: 'var(--color-secondary-bg)', border: '1px solid var(--color-border)', borderRadius: '16px', padding: '2.25rem' }}>
                <div style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}><Wrench size={32} /></div>
                <h3 style={{ color: 'var(--color-text)', fontSize: '1.3rem', marginBottom: '0.75rem' }}>WORKFORCE MANAGEMENT</h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                  We handle shift scheduling, attendance logs, statutory payroll compliance, and replacement management.
                </p>
              </div>

            </div>
          </div>

          {/* Commonly Filled Roles */}
          <div style={{ background: 'var(--color-secondary-bg)', border: '1px solid var(--color-border)', borderRadius: '24px', padding: '3.5rem 3rem' }}>
            <span className="utility-label" style={{ marginBottom: '0.5rem', display: 'block' }}>ROLES WE COMMONLY FILL</span>
            <h2 style={{ fontSize: '2.4rem', color: 'var(--color-text)', marginBottom: '1rem' }}>INDUSTRIAL TALENT POOL</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              We connect your plant with verified professionals across key industrial functions:
            </p>

            <div className="roles-grid">
              {commonRoles.map((role, idx) => (
                <div className="role-pill" key={idx} style={{ background: 'var(--color-primary-bg)', border: '1px solid var(--color-border)', color: 'var(--color-text)' }}>
                  <CheckCircle2 size={20} color="var(--color-accent)" />
                  <span>{role}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndustrialStaffing;
