import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ShieldCheck, Scale, FileText, CheckCircle2, AlertTriangle, Building2, BookOpen } from 'lucide-react';
import './ComplianceManagement.css';

const statutoryActs = [
  {
    id: 1,
    title: "Shops and Establishments Act (State-Specific)",
    objective: "Regulates working conditions, employment terms, and operational standards in commercial establishments, shops, restaurants, and IT parks.",
    provisions: "Working hours, weekly holidays, leave entitlements, opening/closing hours, overtime computation, and employment register maintenance."
  },
  {
    id: 2,
    title: "Employees’ Provident Funds & Misc. Provisions Act, 1952 (EPF)",
    objective: "Ensures post-retirement financial security and social safety nets for employees.",
    provisions: "Mandatory contributions by employer and employee towards EPF, Pension Scheme (EPS), and Insurance Scheme (EDLI)."
  },
  {
    id: 3,
    title: "Employees’ State Insurance Act, 1948 (ESI Act)",
    objective: "Provides comprehensive medical, maternity, disability, and dependent healthcare benefits to employees.",
    provisions: "Applicable to establishments with 10+ employees earning ₹21,000 or less per month (₹25,000 for persons with disabilities)."
  },
  {
    id: 4,
    title: "Professional Tax Act (State-Specific)",
    objective: "Levy and timely collection of statutory professional tax on employments and callings.",
    provisions: "Monthly deduction of professional tax from employee salaries based on slab rates notified by respective state governments."
  },
  {
    id: 5,
    title: "Labour Welfare Fund Act (LWF - State-Specific)",
    objective: "Finances social welfare facilities like housing, education grants, and healthcare for industrial workers.",
    provisions: "Periodic statutory contributions by employer and employee managed through state Labour Welfare Boards."
  },
  {
    id: 6,
    title: "Contract Labour (Regulation and Abolition) Act, 1970",
    objective: "Regulates the engagement of contract workers and safeguards their working conditions and welfare.",
    provisions: "Principal employer registration and contractor licensing for engaging 20 or more contract workers."
  },
  {
    id: 7,
    title: "Child & Adolescent Labour (Prohibition & Regulation) Act, 1986",
    objective: "Prohibits child labour below 14 years and strictly regulates working conditions for adolescents (14–18 years).",
    provisions: "Strict penalties and legal prosecution for any workplace employing underage workers."
  },
  {
    id: 8,
    title: "Minimum Wages Act, 1948",
    objective: "Guarantees that workers receive at least statutory minimum wage rates fixed by state authorities.",
    provisions: "Varies by state, industry type, skill level (unskilled, semi-skilled, skilled, highly-skilled), and cost of living index."
  },
  {
    id: 9,
    title: "Payment of Wages Act, 1936",
    objective: "Regulates timely disbursement of wages without unauthorized deductions or delayed payouts.",
    provisions: "Mandates wage payout within 7 days (10 days if workforce exceeds 1,000) of the wage period completion."
  },
  {
    id: 10,
    title: "Payment of Bonus Act, 1965",
    objective: "Ensures eligible employees receive an annual statutory bonus based on profits or operational productivity.",
    provisions: "Applicable to employees earning up to ₹21,000/month who have completed at least 30 working days in a financial year."
  },
  {
    id: 11,
    title: "Maternity Benefit Act, 1961 (Amended 2017)",
    objective: "Provides paid maternity leave and comprehensive healthcare protection for women employees.",
    provisions: "26 weeks of paid maternity leave, crèche facility mandates for 50+ staff, and job protection during pregnancy."
  },
  {
    id: 12,
    title: "Payment of Gratuity Act, 1972",
    objective: "Provides statutory monetary rewards/terminal benefits for long-term service upon retirement or resignation.",
    provisions: "Applicable after 5 years of continuous service. Formula: (15/26) × Last drawn salary × Completed years of service."
  },
  {
    id: 13,
    title: "Equal Remuneration Act, 1976 / Code on Wages, 2019",
    objective: "Enforces equal remuneration to men and women for similar work and eliminates gender discrimination.",
    provisions: "Mandates equal pay structures and non-discriminatory hiring and promotion policies across all departments."
  },
  {
    id: 14,
    title: "Sexual Harassment of Women at Workplace (POSH) Act, 2013",
    objective: "Prevents and addresses sexual harassment to ensure a safe, respectful working environment for women.",
    provisions: "Mandatory establishment of Internal Complaints Committee (ICC) in organisations with 10+ employees and annual reporting."
  },
  {
    id: 15,
    title: "Employees' Compensation Act, 1923",
    objective: "Provides monetary compensation to workers or dependents in cases of occupational injuries, disability, or fatal incidents.",
    provisions: "Applies to workers not covered under ESI Act, mandating employer liability insurance and compensation schedules."
  },
  {
    id: 16,
    title: "Industrial Employment (Standing Orders) Act, 1946",
    objective: "Requires employers to formally define employment rules, misconduct guidelines, and disciplinary procedures.",
    provisions: "Applicable to industrial establishments with 100+ workers, requiring certified standing orders."
  },
  {
    id: 17,
    title: "Industrial Disputes Act, 1947",
    objective: "Provides machinery for investigation, conciliation, and settlement of industrial disputes.",
    provisions: "Regulates retrenchment, lay-offs, closure notices, strikes, lockouts, and tribunal dispute resolutions."
  },
  {
    id: 18,
    title: "Apprentices Act, 1961",
    objective: "Promotes structured practical training for apprentices across designated trades and industries.",
    provisions: "Defines employer quotas for engaging apprentices, monthly stipend standards, and health/safety norms."
  },
  {
    id: 19,
    title: "Inter-State Migrant Workmen Act, 1979",
    objective: "Protects migrant workers' rights, wage structures, and living conditions when employed outside home states.",
    provisions: "Contractor registration, displacement allowances, medical facilities, and residential accommodation standards."
  },
  {
    id: 20,
    title: "Factories Act, 1948",
    objective: "Ensures health, safety, welfare, working hours, and leave with wages for workers in manufacturing plants.",
    provisions: "Mandatory factory registration, ventilation, machine guarding, safety officers, and annual leave logs."
  },
  {
    id: 21,
    title: "Trade Unions Act, 1926",
    objective: "Governs the registration, rights, and immunity of registered trade unions.",
    provisions: "Protects collective bargaining rights, legal union representation, and structured dispute negotiations."
  }
];

const ComplianceManagement = () => {
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
              <span className="utility-label" style={{ marginBottom: '0.75rem', display: 'block' }}>SCN GLOBAL COMPLIANCE ADVISORY</span>
              <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.1 }}>
                HR STATUTORY <span style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>compliance management</span>
              </h1>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                Operating within the framework of employment laws is essential for responsible business. SCN Global protects your organization from financial penalties, litigation, and operational risks across all 28 states of India.
              </p>
            </div>

            <div className="luxury-img-wrapper" style={{ borderRadius: '16px', height: '250px' }}>
              <img
                src="https://assets.zyrosite.com/YrDJ5VXJbXtRy9pq/3.3-YanyQJ9e7ptyL0Dk.png"
                alt="Compliance Management"
                className="luxury-img"
              />
              <div className="luxury-hover-badge">COMPLIANCE</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Compliance Matters Section */}
      <section className="section" style={{ padding: '5rem 0' }}>
        <div className="container">

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
            <div className="luxury-card-hover" style={{ background: 'var(--color-secondary-bg)', padding: '2.25rem', borderRadius: '16px', border: '1px solid var(--color-border)' }}>
              <div style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}><Scale size={36} /></div>
              <h3 style={{ color: 'var(--color-text)', fontSize: '1.3rem', marginBottom: '0.75rem' }}>MANDATORY LEGAL REQUIREMENT</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.98rem', lineHeight: 1.6 }}>
                Compliance is non-negotiable. Non-compliance can trigger severe fines, operational shutdowns, and personal liability for company directors.
              </p>
            </div>

            <div className="luxury-card-hover" style={{ background: 'var(--color-secondary-bg)', padding: '2.25rem', borderRadius: '16px', border: '1px solid var(--color-border)' }}>
              <div style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}><ShieldCheck size={36} /></div>
              <h3 style={{ color: 'var(--color-text)', fontSize: '1.3rem', marginBottom: '0.75rem' }}>SAFEGUARDING RIGHTS & VALUES</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.98rem', lineHeight: 1.6 }}>
                Protecting employee wages, workplace safety, maternity rights, and anti-harassment standards builds trust and boosts staff retention.
              </p>
            </div>

            <div className="luxury-card-hover" style={{ background: 'var(--color-secondary-bg)', padding: '2.25rem', borderRadius: '16px', border: '1px solid var(--color-border)' }}>
              <div style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}><Building2 size={36} /></div>
              <h3 style={{ color: 'var(--color-text)', fontSize: '1.3rem', marginBottom: '0.75rem' }}>BUSINESS STABILITY & REPUTATION</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.98rem', lineHeight: 1.6 }}>
                A compliant audit trail enhances investor confidence, client credibility, and public brand value during procurement and tenders.
              </p>
            </div>
          </div>

          {/* Statutory Compliance Checklist */}
          <div>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <span className="utility-label">COMPREHENSIVE REGULATORY COVERAGE</span>
              <h2 style={{ fontSize: '2.8rem', marginTop: '0.5rem', color: 'var(--color-text)' }}>STATUTORY COMPLIANCE CHECKLIST (INDIA)</h2>
              <p style={{ color: 'var(--color-text-muted)', maxWidth: '700px', margin: '0.75rem auto 0', fontSize: '1.05rem' }}>
                Key central and state labour acts managed end-to-end by SCN Global Pvt. Ltd.
              </p>
            </div>

            <div className="compliance-grid">
              {statutoryActs.map(act => (
                <div className="act-card luxury-card-hover" key={act.id}>
                  <div>
                    <span className="act-number">Act #{act.id}</span>
                    <h3 style={{ color: 'var(--color-text)', fontSize: '1.2rem', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                      {act.title}
                    </h3>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                      <strong style={{ color: 'var(--color-text)' }}>Objective:</strong> {act.objective}
                    </p>
                  </div>
                  <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '0.85rem' }}>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                      <strong style={{ color: 'var(--color-accent)' }}>Key Provisions:</strong> {act.provisions}
                    </p>
                  </div>
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

export default ComplianceManagement;
