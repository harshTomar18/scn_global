import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Users, FileCheck, Search, ShieldCheck, Factory, Calendar, ArrowRight } from 'lucide-react';

const allServices = [
  {
    id: 'staffing-solution',
    title: 'Staffing Solution',
    route: '/staffing-solution',
    icon: Users,
    badge: 'Core Workforce',
    image: 'https://assets.zyrosite.com/YrDJ5VXJbXtRy9pq/scn-global-pvt.-ltd.-project-hiring-AR03OREKnpIE0ykk.jpg',
    description: 'Strategic staffing solutions designed to cater to the dynamic and diverse needs of organisations across India. Temporary staffing, contract-based roles, and permanent placements.'
  },
  {
    id: 'payroll-management',
    title: 'Payroll Management',
    route: '/payroll-management',
    icon: FileCheck,
    badge: '100% Tech-Enabled',
    image: 'https://assets.zyrosite.com/YrDJ5VXJbXtRy9pq/staffing-and-third-party-payroll-solutions-500x500-AGBbPZ1er3H80114.jpg',
    description: 'Recognised as one of India’s leading payroll outsourcing providers. Software-driven attendance, statutory compliance (EPF, ESI, PT, LWF), and salary calculations.'
  },
  {
    id: 'recruitment-solution',
    title: 'Recruitment Solution',
    route: '/recruitment-solution',
    icon: Search,
    badge: 'Executive & IT Search',
    image: 'https://assets.zyrosite.com/YrDJ5VXJbXtRy9pq/resume-genius-72d3z_lfrqa-unsplash-Y4LvBqKOpKfxkaZ8.jpg',
    description: 'Industry-aligned search methodology, IT staffing solutions, fresher hiring services, and large-scale campus recruitment drives PAN India.'
  },
  {
    id: 'compliance-management',
    title: 'Compliance Management',
    route: '/compliance-management',
    icon: ShieldCheck,
    badge: 'Statutory Protection',
    image: 'https://assets.zyrosite.com/YrDJ5VXJbXtRy9pq/3.3-YanyQJ9e7ptyL0Dk.png',
    description: 'Comprehensive HR statutory compliance covering 21+ central and state labour acts, POSH compliance, minimum wages, and statutory register maintenance.'
  },
  {
    id: 'industrial-staffing',
    title: 'Industrial Staffing',
    route: '/industrial-staffing',
    icon: Factory,
    badge: 'Plant & Logistics',
    image: 'https://assets.zyrosite.com/YrDJ5VXJbXtRy9pq/claudio-schwarz-b5uxl-qegoe-unsplash-A0xjZEq7kvHpyyVb.jpg',
    description: 'Specialised recruitment for manufacturing, logistics, automotive, and engineering plants. OSHA safety-trained operators, mechanics, and line staff.'
  },
  {
    id: 'project-hiring',
    title: 'Project Hiring',
    route: '/project-hiring',
    icon: Calendar,
    badge: 'Long & Short Term',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
    description: 'Flexible project-based hiring solutions for short-term deployments or multi-year project management and technical assignments.'
  }
];

const Services = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-wrapper" style={{ backgroundColor: 'var(--color-primary-bg)', color: 'var(--color-text)', minHeight: '100vh' }}>
      <Header />

      {/* Hero Section */}
      <section className="page-hero">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="utility-label" style={{ marginBottom: '0.75rem', display: 'inline-block' }}>SCN GLOBAL SERVICES</span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.1 }}>
            BEST SERVICES <span style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>scn global</span> OFFERS
          </h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', maxWidth: '750px', margin: '0 auto', lineHeight: 1.6 }}>
            Backed by 21+ years of experience, SCN Global Pvt. Ltd. partners with organisations of all sizes—from emerging start-ups to Fortune 5000 leaders—to deliver impactful workforce solutions.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section" style={{ padding: '3.5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {allServices.map(s => {
              const IconComponent = s.icon;
              return (
                <div
                  key={s.id}
                  className="luxury-card-hover"
                  onClick={() => navigate(s.route)}
                  style={{
                    backgroundColor: 'var(--color-secondary-bg)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '16px',
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    {/* Compact Image Wrapper */}
                    <div className="luxury-img-wrapper" style={{ height: '140px', marginBottom: '1.25rem' }}>
                      <img src={s.image} alt={s.title} className="luxury-img" />
                      <div className="luxury-hover-badge">EXPLORE</div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        background: 'rgba(228, 164, 189, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-text)'
                      }}>
                        <IconComponent size={20} />
                      </div>
                      <span className="utility-label" style={{ fontSize: '8px', background: 'var(--color-primary-bg)', padding: '3px 10px', borderRadius: '9999px', border: '1px solid var(--color-border)' }}>
                        {s.badge}
                      </span>
                    </div>

                    <h3 style={{ color: 'var(--color-text)', fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 700 }}>{s.title}</h3>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                      {s.description}
                    </p>
                  </div>

                  <div style={{ color: 'var(--color-text)', fontWeight: 900, fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.5rem', borderTop: '1px solid var(--color-border)', paddingTop: '1rem' }}>
                    EXPLORE SERVICE DETAILS <ArrowRight size={14} color="var(--color-accent)" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;

