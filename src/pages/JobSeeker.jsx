import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { UserCheck, Upload, Send, CheckCircle2, Briefcase, Award, GraduationCap } from 'lucide-react';
import './JobSeeker.css';

const JobSeeker = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '0-2 years',
    preferredSector: 'IT & Software',
    resumeLink: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page-wrapper" style={{ backgroundColor: 'var(--color-primary-bg)', color: 'var(--color-text)', minHeight: '100vh' }}>
      <Header />

      {/* Hero Section with Side-by-Side Image */}
      <section className="page-hero">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <span className="utility-label" style={{ marginBottom: '1rem', display: 'block' }}>SCN GLOBAL CANDIDATE PORTAL</span>
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', fontWeight: 900, marginBottom: '1.5rem', lineHeight: 0.9 }}>
                CONNECT WITH YOUR <span style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>next career step</span>
              </h1>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.25rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                "If you have any questions or would like more information about our services, feel free to contact us. We are here to help you communicate better." Submit your resume for top IT, manufacturing, banking, and corporate opportunities across India.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, fontSize: '0.9rem' }}>
                  <CheckCircle2 size={18} color="var(--color-accent)" /> 100% Free Candidate Services
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, fontSize: '0.9rem' }}>
                  <CheckCircle2 size={18} color="var(--color-accent)" /> Pan India Employer Drives
                </div>
              </div>
              <a href="https://scnjobs.com/" target="_blank" rel="noreferrer" className="pill-cta">
                APPLY FOR JOBS ON SCNJOBS.COM ↗
              </a>
            </div>

            <div className="luxury-img-wrapper" style={{ borderRadius: '24px', height: '380px' }}>
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                alt="Candidate Registration"
                className="luxury-img"
              />
              <div className="luxury-hover-badge">CAREERS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Registration Form */}
      <section className="section" style={{ padding: '5rem 0' }}>
        <div className="container">
          
          <div className="seeker-form-card">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{ color: 'var(--color-accent)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                  <CheckCircle2 size={64} />
                </div>
                <h2 style={{ color: 'var(--color-text)', fontSize: '2.4rem', marginBottom: '0.75rem', fontWeight: 900 }}>
                  APPLICATION SUBMITTED!
                </h2>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto 2rem' }}>
                  Thank you for registering with SCN Global Pvt. Ltd. Our recruitment team will evaluate your profile and contact you shortly for matching opportunities.
                </p>
                <button
                  className="pill-cta"
                  onClick={() => setSubmitted(false)}
                >
                  SUBMIT ANOTHER PROFILE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                  <span className="utility-label" style={{ marginBottom: '0.5rem', display: 'block' }}>REGISTRATION FORM</span>
                  <h2 style={{ color: 'var(--color-text)', fontSize: '2.4rem', marginBottom: '0.5rem', fontWeight: 900 }}>
                    CANDIDATE REGISTRATION FORM
                  </h2>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem' }}>
                    Fill out your details below to get matched with active hiring drives across India.
                  </p>
                </div>

                <div className="form-group">
                  <label>FULL NAME *</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="e.g. Rahul Sharma"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>

                <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <div className="form-group" style={{ margin: 0 }}>
                    <label>EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      required
                      className="form-control"
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group" style={{ margin: 0 }}>
                    <label>CONTACT NUMBER *</label>
                    <input
                      type="tel"
                      required
                      className="form-control"
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <div className="form-group" style={{ margin: 0 }}>
                    <label>YEARS OF EXPERIENCE</label>
                    <select
                      className="form-control"
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    >
                      <option value="Fresher / 0 years">Fresher / 0 years</option>
                      <option value="0-2 years">0 - 2 years</option>
                      <option value="3-5 years">3 - 5 years</option>
                      <option value="5-10 years">5 - 10 years</option>
                      <option value="10+ years">10+ years</option>
                    </select>
                  </div>

                  <div className="form-group" style={{ margin: 0 }}>
                    <label>PREFERRED FUNCTIONAL AREA</label>
                    <select
                      className="form-control"
                      value={formData.preferredSector}
                      onChange={(e) => setFormData({ ...formData, preferredSector: e.target.value })}
                    >
                      <option value="IT & Software Development">IT & Software Development</option>
                      <option value="Manufacturing & Industrial">Manufacturing & Industrial</option>
                      <option value="Payroll & HR">Payroll & HR Services</option>
                      <option value="Warehouse & Logistics">Warehouse & Logistics</option>
                      <option value="Corporate & Sales">Corporate & Sales</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>RESUME DRIVE / PORTFOLIO LINK</label>
                  <input
                    type="url"
                    className="form-control"
                    placeholder="https://drive.google.com/... or LinkedIn Profile"
                    value={formData.resumeLink}
                    onChange={(e) => setFormData({ ...formData, resumeLink: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>COVER NOTE / BRIEF INTRO</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Tell us about your key skills, availability, and preferred job locations..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="pill-cta" style={{ width: '100%', marginTop: '1rem' }}>
                  SUBMIT CANDIDATE APPLICATION
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JobSeeker;

