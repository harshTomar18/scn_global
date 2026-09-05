import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle2, Calendar, MapPin, Award } from 'lucide-react';
import './Projects.css';

const projectsList = [
  {
    id: 1,
    category: 'GOVERNMENT & CAMPUS RECRUITMENT',
    title: 'Madhya Pradesh Mega Rojgar Mela Milestone',
    client: 'Government of Madhya Pradesh & Regional Partners',
    date: '26th August 2023',
    location: 'Madhya Pradesh, India',
    image: 'https://assets.zyrosite.com/YrDJ5VXJbXtRy9pq/resume-genius-72d3z_lfrqa-unsplash-Y4LvBqKOpKfxkaZ8.jpg',
    description: 'Conducted under the distinguished presence of Govind Singh Rajput, Revenue Minister of M.P. Thousands of youth interviewed, evaluated, and placed across key industrial and corporate sectors with high commendation.',
    route: '/company-profile'
  },
  {
    id: 2,
    category: 'IT & SOFTWARE RECRUITMENT',
    title: 'Pan-India Enterprise IT Sourcing Drive',
    client: 'Fortune 5000 Tech Leaders & Startups',
    date: 'Ongoing 2024 - 2025',
    location: 'Bangalore, Noida, Hyderabad, Pune',
    image: 'https://assets.zyrosite.com/YrDJ5VXJbXtRy9pq/scn-global-pvt.-ltd.-project-hiring-AR03OREKnpIE0ykk.jpg',
    description: 'End-to-end recruitment of 1,500+ pre-vetted full-stack developers, cloud architects, cybersecurity engineers, and DevOps leads with fast-track onboarding.',
    route: '/recruitment-solution'
  },
  {
    id: 3,
    category: 'PAYROLL & STATUTORY AUTOMATION',
    title: '100% Tech-Enabled Payroll Architecture',
    client: 'Multi-National Enterprises & SME Sector',
    date: '2022 - Present',
    location: 'PAN India Coverage',
    image: 'https://assets.zyrosite.com/YrDJ5VXJbXtRy9pq/staffing-and-third-party-payroll-solutions-500x500-AGBbPZ1er3H80114.jpg',
    description: 'Automated payroll processing for 50+ corporate clients, ensuring 100% compliance with EPF, ESI, Professional Tax, and Labour Welfare Funds with zero audit penalties.',
    route: '/payroll-management'
  },
  {
    id: 4,
    category: 'INDUSTRIAL & PLANT HIRING',
    title: 'OSHA Certified Manufacturing Workforce',
    client: 'Automotive, FMCG & Heavy Machinery Plants',
    date: '2023 - 2025',
    location: 'Industrial Hubs Across India',
    image: 'https://assets.zyrosite.com/YrDJ5VXJbXtRy9pq/claudio-schwarz-b5uxl-qegoe-unsplash-A0xjZEq7kvHpyyVb.jpg',
    description: 'Deployment of safety-first, OSHA-briefed CNC operators, forklift drivers, assembly line workers, and quality control inspectors for multi-shift plant operations.',
    route: '/industrial-staffing'
  },
  {
    id: 5,
    category: 'COMPLIANCE AUDIT & POSH MANDATES',
    title: '21 Statutory Labour Acts Compliance Program',
    client: 'Corporate Offices & Industrial Establishments',
    date: 'Annual Recurring Program',
    location: '28 Indian States & UTs',
    image: 'https://assets.zyrosite.com/YrDJ5VXJbXtRy9pq/3.3-YanyQJ9e7ptyL0Dk.png',
    description: 'Comprehensive statutory compliance audits covering Shops & Establishments, Minimum Wages, Gratuity, Contract Labour, and POSH Internal Complaints Committee (ICC) setup.',
    route: '/compliance-management'
  }
];

const Projects = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-wrapper" style={{ backgroundColor: 'var(--color-primary-bg)', color: 'var(--color-text)', minHeight: '100vh' }}>
      <Header />

      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <span className="utility-label" style={{ marginBottom: '1.5rem', display: 'inline-block' }}>
            SCN GLOBAL PVT. LTD. PORTFOLIO
          </span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.8rem)', fontWeight: 900, marginBottom: '1.5rem', lineHeight: 0.9 }}>
            PROJECTS & <span style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>case studies</span>
          </h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.25rem', maxWidth: '850px', lineHeight: 1.6 }}>
            Explore landmark recruitment drives, large-scale industrial staffing deployments, 100% tech-enabled payroll architectures, and statutory compliance engagements delivered by SCN Global Pvt. Ltd.
          </p>
        </div>
      </section>

      {/* Staggered Projects Showcase Grid */}
      <section className="section" style={{ padding: '5rem 0' }}>
        <div className="container">
          
          <div className="projects-staggered-grid">
            {projectsList.map((project, idx) => (
              <div
                key={project.id}
                className={`reveal-up ${idx % 2 === 1 ? 'project-card-even' : ''}`}
                onClick={() => navigate(project.route)}
              >
                {/* 3:4 Aspect Ratio Image with Grayscale-to-Color Hover & Centered Badge */}
                <div className="project-img-box luxury-img-wrapper">
                  <img src={project.image} alt={project.title} className="luxury-img" />
                  <div className="project-hover-badge">
                    VIEW CASE
                  </div>
                </div>

                {/* Metadata & Title */}
                <div style={{ marginTop: '1.75rem' }}>
                  <span className="utility-label" style={{ display: 'block', marginBottom: '0.5rem' }}>
                    {project.category}
                  </span>
                  <h2 style={{ fontSize: '2rem', fontWeight: 800, lineHeight: 1, marginBottom: '0.85rem' }}>
                    {project.title}
                  </h2>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {project.description}
                  </p>
                  
                  <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <MapPin size={14} color="var(--color-accent)" /> {project.location}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Calendar size={14} color="var(--color-accent)" /> {project.date}
                    </span>
                  </div>

                  <div style={{ marginTop: '1.25rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '10px', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-text)' }}>
                    EXPLORE CASE DETAILS <ArrowRight size={14} color="var(--color-accent)" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Project Summary Banner */}
          <div className="project-detail-box">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
              <div>
                <span className="utility-label" style={{ marginBottom: '0.75rem', display: 'block' }}>
                  NEED PROJECT HIRING OR STAFFING DEPLOYMENT?
                </span>
                <h3 style={{ fontSize: '2.2rem', fontWeight: 900, lineHeight: 0.95, marginBottom: '1rem' }}>
                  LET'S BUILD YOUR NEXT SUCCESSFUL PROJECT.
                </h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: 1.65, marginBottom: '2rem' }}>
                  Whether you require short-term technical contractors or long-term plant managers, SCN Global Pvt. Ltd. brings speed, precision, and compliance to your projects.
                </p>
                <button className="pill-cta" onClick={() => navigate('/contact-us')}>
                  REQUEST PROJECT PROPOSAL
                </button>
              </div>

              <div style={{ background: 'var(--color-primary-bg)', padding: '2.5rem', borderRadius: '16px', border: '1px solid var(--color-border)' }}>
                <div className="utility-label" style={{ marginBottom: '1rem' }}>PROJECT PERFORMANCE METRICS</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 700, fontSize: '0.95rem' }}>
                    <CheckCircle2 size={20} color="var(--color-accent)" /> 1,500+ Placements in Single Hiring Drives
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 700, fontSize: '0.95rem' }}>
                    <CheckCircle2 size={20} color="var(--color-accent)" /> State-Level Campus Recruitment Excellence
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 700, fontSize: '0.95rem' }}>
                    <CheckCircle2 size={20} color="var(--color-accent)" /> Zero Penalty Statutory Compliance Track Record
                  </div>
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

export default Projects;
