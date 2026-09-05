import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

const ContactUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        enquiryType: 'Staffing Solution',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="page-wrapper" style={{ backgroundColor: 'var(--color-primary-bg)', color: 'var(--color-text)', minHeight: '100vh' }}>
            <Header />

            {/* Hero Section */}
            <section className="page-hero">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
                        <div>
                            <span className="utility-label" style={{ marginBottom: '1rem', display: 'block' }}>SCN GLOBAL CONTACTS</span>
                            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, marginBottom: '1.5rem', lineHeight: 0.9 }}>
                                GET IN TOUCH WITH <span style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>scn global</span>
                            </h1>
                            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.25rem', lineHeight: 1.6 }}>
                                Feel free to contact us with any questions or workforce concerns. Use the form below or email/call our team directly. We look forward to partnering with you.
                            </p>
                        </div>

                        <div className="luxury-img-wrapper" style={{ borderRadius: '24px', height: '360px' }}>
                            <img
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
                                alt="SCN Global Corporate Office"
                                className="luxury-img"
                            />
                            <div className="luxury-hover-badge">CONTACT US</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Details & Form */}
            <section className="section" style={{ padding: '5rem 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem' }}>

                        {/* Left Column: Office Locations & Contact Info */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div>
                                <h2 style={{ fontSize: '2rem', color: 'var(--color-text)', marginBottom: '1rem' }}>CONTACT INFORMATION</h2>
                                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6, fontSize: '1.05rem' }}>
                                    Backed by 21+ years of experience, SCN Global Pvt. Ltd. partners with organisations of all sizes to deliver impactful staffing and HR solutions.
                                </p>
                            </div>

                            <div style={{ background: 'var(--color-secondary-bg)', border: '1px solid var(--color-border)', borderRadius: '16px', padding: '2rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                                <div style={{ color: 'var(--color-accent)', marginTop: '0.2rem' }}><MapPin size={28} /></div>
                                <div>
                                    <h4 style={{ color: 'var(--color-text)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>HEAD OFFICE (DELHI)</h4>
                                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                                        Office No-111, 1st floor, Aggarwal City Square, Mangalam Place, Sector-3, Rohini, Delhi, 110085
                                    </p>
                                </div>
                            </div>

                            <div style={{ background: 'var(--color-secondary-bg)', border: '1px solid var(--color-border)', borderRadius: '16px', padding: '2rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                                <div style={{ color: 'var(--color-accent)', marginTop: '0.2rem' }}><MapPin size={28} /></div>
                                <div>
                                    <h4 style={{ color: 'var(--color-text)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>BRANCH OFFICE (NOIDA)</h4>
                                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                                        G 31, Sector 63 Noida, India Pin Code: 201301
                                    </p>
                                </div>
                            </div>

                            <div style={{ background: 'var(--color-secondary-bg)', border: '1px solid var(--color-border)', borderRadius: '16px', padding: '2rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                                <div style={{ color: 'var(--color-accent)', marginTop: '0.2rem' }}><MapPin size={28} /></div>
                                <div>
                                    <h4 style={{ color: 'var(--color-text)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>BRANCH OFFICE (EAST DELHI)</h4>
                                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                                        J-126, G/F Shop No. 1 Old Seemapuri NR Water Tank, Delhi-95
                                    </p>
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                                <div style={{ background: 'var(--color-secondary-bg)', border: '1px solid var(--color-border)', borderRadius: '16px', padding: '1.75rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <Mail size={24} color="var(--color-accent)" />
                                    <div>
                                        <div className="utility-label" style={{ fontSize: '8px' }}>EMAIL US</div>
                                        <a href="mailto:info@scnglobalpvtltd.com" style={{ color: 'var(--color-text)', fontWeight: 700, fontSize: '0.95rem' }}>info@scnglobalpvtltd.com</a>
                                    </div>
                                </div>

                                <div style={{ background: 'var(--color-secondary-bg)', border: '1px solid var(--color-border)', borderRadius: '16px', padding: '1.75rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <Phone size={24} color="var(--color-accent)" />
                                    <div>
                                        <div className="utility-label" style={{ fontSize: '8px' }}>CALL US</div>
                                        <a href="tel:+919891910542" style={{ color: 'var(--color-text)', fontWeight: 700, fontSize: '0.95rem' }}>+91 9891910542</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Interactive Form */}
                        <div style={{ background: 'var(--color-secondary-bg)', border: '1px solid var(--color-border)', borderRadius: '24px', padding: '3.5rem 3rem' }}>
                            {submitted ? (
                                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                                    <div style={{ color: 'var(--color-accent)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                                        <CheckCircle2 size={64} />
                                    </div>
                                    <h3 style={{ color: 'var(--color-text)', fontSize: '2rem', marginBottom: '0.75rem' }}>MESSAGE RECEIVED!</h3>
                                    <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
                                        Thank you for reaching out to SCN Global Pvt. Ltd. Our team will get back to you within 24 hours.
                                    </p>
                                    <button
                                        className="pill-cta"
                                        onClick={() => setSubmitted(false)}
                                        style={{ marginTop: '2.5rem' }}
                                    >
                                        SEND ANOTHER INQUIRY
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <h3 style={{ color: 'var(--color-text)', fontSize: '2rem', marginBottom: '0.5rem' }}>SEND US A MESSAGE</h3>
                                    <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', marginBottom: '2.5rem' }}>
                                        Complete the form below and an SCN Global advisor will contact you.
                                    </p>

                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '10px', fontWeight: 900, letterSpacing: '0.15em', color: 'var(--color-text)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>FIRST NAME *</label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                required
                                                style={{ width: '100%', padding: '1rem 1.25rem', background: 'var(--color-primary-bg)', border: '1px solid var(--color-border)', borderRadius: '10px', color: 'var(--color-text)', fontFamily: 'inherit', fontSize: '1rem' }}
                                                value={formData.firstName}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '10px', fontWeight: 900, letterSpacing: '0.15em', color: 'var(--color-text)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>LAST NAME *</label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                required
                                                style={{ width: '100%', padding: '1rem 1.25rem', background: 'var(--color-primary-bg)', border: '1px solid var(--color-border)', borderRadius: '10px', color: 'var(--color-text)', fontFamily: 'inherit', fontSize: '1rem' }}
                                                value={formData.lastName}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '10px', fontWeight: 900, letterSpacing: '0.15em', color: 'var(--color-text)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>EMAIL ADDRESS *</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                style={{ width: '100%', padding: '1rem 1.25rem', background: 'var(--color-primary-bg)', border: '1px solid var(--color-border)', borderRadius: '10px', color: 'var(--color-text)', fontFamily: 'inherit', fontSize: '1rem' }}
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '10px', fontWeight: 900, letterSpacing: '0.15em', color: 'var(--color-text)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>PHONE NUMBER</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                style={{ width: '100%', padding: '1rem 1.25rem', background: 'var(--color-primary-bg)', border: '1px solid var(--color-border)', borderRadius: '10px', color: 'var(--color-text)', fontFamily: 'inherit', fontSize: '1rem' }}
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div style={{ marginBottom: '1.5rem' }}>
                                        <label style={{ display: 'block', fontSize: '10px', fontWeight: 900, letterSpacing: '0.15em', color: 'var(--color-text)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>SERVICE OF INTEREST</label>
                                        <select
                                            name="enquiryType"
                                            style={{ width: '100%', padding: '1rem 1.25rem', background: 'var(--color-primary-bg)', border: '1px solid var(--color-border)', borderRadius: '10px', color: 'var(--color-text)', fontFamily: 'inherit', fontSize: '1rem' }}
                                            value={formData.enquiryType}
                                            onChange={handleChange}
                                        >
                                            <option value="Staffing Solution">Staffing Solution</option>
                                            <option value="Payroll Management">Payroll Management</option>
                                            <option value="Recruitment Solution">Recruitment Solution</option>
                                            <option value="Compliance Management">Compliance Management</option>
                                            <option value="Industrial Staffing">Industrial Staffing</option>
                                            <option value="Project Hiring">Project Hiring</option>
                                        </select>
                                    </div>

                                    <div style={{ marginBottom: '2rem' }}>
                                        <label style={{ display: 'block', fontSize: '10px', fontWeight: 900, letterSpacing: '0.15em', color: 'var(--color-text)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>YOUR MESSAGE *</label>
                                        <textarea
                                            name="message"
                                            required
                                            rows="4"
                                            style={{ width: '100%', padding: '1rem 1.25rem', background: 'var(--color-primary-bg)', border: '1px solid var(--color-border)', borderRadius: '10px', color: 'var(--color-text)', fontFamily: 'inherit', fontSize: '1rem' }}
                                            placeholder="Tell us about your organization's staffing, payroll, or compliance requirements..."
                                            value={formData.message}
                                            onChange={handleChange}
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="pill-cta" style={{ width: '100%' }}>
                                        SUBMIT MESSAGE
                                    </button>
                                </form>
                            )}
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ContactUs;
