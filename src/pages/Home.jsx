import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Users, FileCheck, Search, ShieldCheck, Factory, Calendar, ArrowRight, Award, CheckCircle, Sparkles } from 'lucide-react';
import './Home.css';

const servicesData = [
  {
    id: 'staffing-solution',
    title: 'STAFFING SOLUTION',
    route: '/staffing-solution',
    icon: Users,
    image: 'https://assets.zyrosite.com/YrDJ5VXJbXtRy9pq/scn-global-pvt.-ltd.-project-hiring-AR03OREKnpIE0ykk.jpg',
    description: 'Strategic temporary, contract, and permanent staffing designed to build agile, competent, and high-performing teams across India.'
  },
  {
    id: 'payroll-management',
    title: 'PAYROLL MANAGEMENT',
    route: '/payroll-management',
    icon: FileCheck,
    image: 'https://assets.zyrosite.com/YrDJ5VXJbXtRy9pq/staffing-and-third-party-payroll-solutions-500x500-AGBbPZ1er3H80114.jpg',
    description: '100% tech-enabled, software-powered payroll outsourcing with automated statutory compliance for EPF, ESI, PT, and LWF.'
  },
  {
    id: 'recruitment-solution',
    title: 'RECRUITMENT SOLUTION',
    route: '/recruitment-solution',
    icon: Search,
    image: 'https://assets.zyrosite.com/YrDJ5VXJbXtRy9pq/resume-genius-72d3z_lfrqa-unsplash-Y4LvBqKOpKfxkaZ8.jpg',
    description: 'Industry-aligned executive search, IT staffing solutions, fresher hiring services, and large-scale campus Rojgar Melas.'
  },
  {
    id: 'compliance-management',
    title: 'COMPLIANCE MANAGEMENT',
    route: '/compliance-management',
    icon: ShieldCheck,
    image: 'https://assets.zyrosite.com/YrDJ5VXJbXtRy9pq/3.3-YanyQJ9e7ptyL0Dk.png',
    description: 'HR statutory compliance management covering 21+ Indian central & state labour acts, POSH compliance, and legal audits.'
  },
  {
    id: 'industrial-staffing',
    title: 'INDUSTRIAL STAFFING',
    route: '/industrial-staffing',
    icon: Factory,
    image: 'https://assets.zyrosite.com/YrDJ5VXJbXtRy9pq/claudio-schwarz-b5uxl-qegoe-unsplash-A0xjZEq7kvHpyyVb.jpg',
    description: 'OSHA safety-trained workforce for manufacturing, assembly lines, warehouse operations, QA inspectors, and maintenance mechanics.'
  },
  {
    id: 'project-hiring',
    title: 'PROJECT HIRING',
    route: '/project-hiring',
    icon: Calendar,
    image: 'https://assets.zyrosite.com/YrDJ5VXJbXtRy9pq/scn-global-pvt.-ltd.-project-hiring-AR03OREKnpIE0ykk.jpg',
    description: 'Flexible short-term and long-term project-based talent acquisition for specialized assignments and time-bound project targets.'
  }
];

const portfolioItems = [
  {
    id: 1,
    category: 'STAFFING SOLUTION',
    title: 'Strategic Staffing Solutions for a Dynamic Workforce',
    metadata: 'PAN-India Workforce • Contract & Permanent Placements',
    image: 'https://assets.zyrosite.com/YrDJ5VXJbXtRy9pq/scn-global-pvt.-ltd.-project-hiring-AR03OREKnpIE0ykk.jpg',
    route: '/staffing-solution'
  },
  {
    id: 2,
    category: 'PAYROLL OUTSOURCING',
    title: '100% Tech-Enabled Payroll Architecture Across India',
    metadata: 'EPF • ESI • Professional Tax • Labour Welfare Fund',
    image: 'https://assets.zyrosite.com/YrDJ5VXJbXtRy9pq/staffing-and-third-party-payroll-solutions-500x500-AGBbPZ1er3H80114.jpg',
    route: '/payroll-management'
  },
  {
    id: 3,
    category: 'CAMPUS RECRUITMENT',
    title: 'Madhya Pradesh Mega Rojgar Mela Milestone (2023)',
    metadata: '26th August 2023 • MP Revenue Minister Govind Singh Rajput',
    image: 'https://assets.zyrosite.com/YrDJ5VXJbXtRy9pq/resume-genius-72d3z_lfrqa-unsplash-Y4LvBqKOpKfxkaZ8.jpg',
    route: '/company-profile'
  },
  {
    id: 4,
    category: 'INDUSTRIAL & PLANT HIRING',
    title: 'Specialised Industrial Staffing & Safety Operations',
    metadata: 'OSHA Certified Staff • CNC • Forklift & Line Packers',
    image: 'https://assets.zyrosite.com/YrDJ5VXJbXtRy9pq/claudio-schwarz-b5uxl-qegoe-unsplash-A0xjZEq7kvHpyyVb.jpg',
    route: '/industrial-staffing'
  }
];

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-wrapper" style={{ backgroundColor: 'var(--color-primary-bg)', color: 'var(--color-text)', minHeight: '100vh' }}>
      <Header />

      {/* ============================================
         SUPER TRAVEL HERO SECTION SPEC (SCN Global Authentic Content)
         ============================================ */}
      <section className="hero-container">
        <div className="container">
          <div className="hero-grid">
            
            {/* Left Side: Massive Headline at 12-15vw with lowercase italic accent word */}
            <div className="reveal-up">
              <span className="utility-label" style={{ marginBottom: '1.5rem', display: 'inline-block' }}>
                SCN GLOBAL PVT. LTD. — BACKED BY 21+ YEARS EXPERIENCE
              </span>

              <h1 className="hero-headline">
                providing best <span className="accent-italic">staffing</span> solution.
              </h1>

              <p className="hero-body-text">
                Backed by 21+ years of experience, SCN Global Pvt. Ltd. partners with organisations of all sizes—from emerging start-ups to Fortune 5000 leaders—to deliver impactful staffing and HR solutions.
              </p>

              <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', marginTop: '2rem' }}>
                <a
                  href="#"
                  className="arrow-cta"
                  onClick={(e) => { e.preventDefault(); navigate('/services'); }}
                >
                  EXPLORE SERVICES <ArrowRight size={18} />
                </a>

                <a
                  href="#"
                  className="arrow-cta"
                  style={{ borderBottomColor: 'var(--color-text)' }}
                  onClick={(e) => { e.preventDefault(); navigate('/company-profile'); }}
                >
                  COMPANY PROFILE
                </a>
              </div>
            </div>

            {/* Right Side: Large Card with 24px border-radius, SCN Global image hover & Floating Badge */}
            <div className="hero-card-right reveal-up">
              <div className="hero-card-img-box luxury-img-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1580785692841-9a2e08e6880e?ixlib=rb-4.1.0&w=1366&q=70&auto=format"
                  alt="SCN Global Pvt. Ltd."
                  className="luxury-img"
                />
                <div className="luxury-hover-badge">SCN GLOBAL</div>
              </div>

              {/* Floating Circular Badge (160px diameter) in #e4a4bd with '01' italic text */}
              <div className="floating-badge hero-badge-pos">
                <div className="badge-number">01</div>
                <div className="badge-text">21+ YEARS<br />EXPERIENCE</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================
         SERVICES GRID SPEC (Background #f5f0eb, 8xl Headline, 3-column grid)
         ============================================ */}
      <section className="services-section">
        <div className="container">
          <div className="reveal-up">
            <span className="utility-label" style={{ marginBottom: '1rem', display: 'block' }}>
              SETTING THE BENCHMARK IN THE INDUSTRY
            </span>
            <h2 className="services-headline">
              SERVICES AT A GLANCE.
            </h2>
          </div>

          <div className="services-3col-grid reveal-up">
            {servicesData.map((s) => {
              const IconComp = s.icon;
              return (
                <div
                  key={s.id}
                  className="luxury-service-card"
                  onClick={() => navigate(s.route)}
                >
                  <div>
                    <div className="service-icon">
                      <IconComp size={48} />
                    </div>
                    <h3>{s.title}</h3>
                    <p>{s.description}</p>
                  </div>
                  <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 900, fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                    READ MORE <ArrowRight size={14} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================
         PORTFOLIO STAGGERED GRID SPEC
         (2-column layout where even items are offset by 100px)
         ============================================ */}
      <section className="staggered-section">
        <div className="container">
          <div className="reveal-up" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span className="utility-label">SCN GLOBAL CAPABILITIES & PORTFOLIO</span>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 900, marginTop: '0.5rem', lineHeight: 0.9 }}>
              SETTING THE BENCHMARK.
            </h2>
          </div>

          <div className="staggered-2col">
            {portfolioItems.map((item, idx) => (
              <div
                key={item.id}
                className={`reveal-up ${idx % 2 === 1 ? 'staggered-item-even' : ''}`}
                onClick={() => navigate(item.route)}
              >
                {/* 3:4 Aspect-Ratio Grayscale Image with 16px Border-Radius */}
                <div className="portfolio-img-box luxury-img-wrapper">
                  <img src={item.image} alt={item.title} className="luxury-img" />
                  <div className="portfolio-hover-circle">
                    VIEW CASE
                  </div>
                </div>

                {/* Below Images Metadata */}
                <div style={{ marginTop: '1.5rem' }}>
                  <div className="utility-label" style={{ marginBottom: '0.5rem' }}>
                    {item.category}
                  </div>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                    {item.title}
                  </h3>
                  <div style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', fontWeight: 600 }}>
                    {item.metadata}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SCN Global Corporate Summary Banner */}
      <section style={{ backgroundColor: 'var(--color-secondary-bg)', padding: '6rem 0', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span className="utility-label" style={{ marginBottom: '1rem', display: 'block' }}>
                BUSINESS WITH US — SCN GLOBAL PVT. LTD.
              </span>
              <h2 style={{ fontSize: '2.8rem', fontWeight: 900, lineHeight: 0.95, marginBottom: '1.5rem' }}>
                BUILD HIGH-PERFORMING TEAMS.
              </h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                Multi-level work company offers a diverse range of services designed to meet the unique needs of our clients across different industries. Whether you’re looking for IT specialists, full-time employees, contract workers, or statutory compliance management, we have the expertise and resources to support your requirements.
              </p>
              <button className="pill-cta" onClick={() => navigate('/contact-us')}>
                CONTACT US TODAY
              </button>
            </div>

            <div style={{ background: 'var(--color-primary-bg)', border: '1px solid var(--color-border)', borderRadius: '24px', padding: '3rem', textAlign: 'center' }}>
              <div className="utility-label" style={{ marginBottom: '1rem' }}>CLIENT NETWORK & PROOF</div>
              <div style={{ fontSize: '4.5rem', fontWeight: 900, color: 'var(--color-accent)', lineHeight: 1 }}>+1500</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '2rem', textTransform: 'uppercase' }}>Satisfied Corporate Clients</div>
              <div style={{ fontSize: '3.5rem', fontWeight: 900, color: 'var(--color-text)', lineHeight: 1 }}>+2M</div>
              <div style={{ fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>Followers on Social Media</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
