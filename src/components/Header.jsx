import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ExternalLink } from 'lucide-react';
import './Header.css';

const navItems = [
    { label: 'HOME', route: '/' },
    { label: 'COMPANY PROFILE', route: '/company-profile' },
    { label: 'SERVICES', route: '/services' },
    { label: 'PROJECTS', route: '/projects' },
    { label: 'APPLY FOR JOBS', route: 'https://scnjobs.com/', external: true },
    { label: 'CONTACT US', route: '/contact-us' }
];

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileMenuOpen]);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (item) => {
        setMobileMenuOpen(false);
        if (typeof item === 'string') {
            navigate(item);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (item.external) {
            window.open(item.route, '_blank', 'noopener,noreferrer');
        } else {
            navigate(item.route);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <header className={`header-container ${scrolled ? 'scrolled' : ''}`}>
            <div className="container main-bar-container">
                {/* Brand Logo Left */}
                <button
                    className="logo-container"
                    onClick={() => handleNavClick('/')}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                >
                    <img
                        src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=crop,f=png/YrDJ5VXJbXtRy9pq/logo-AQEZanpz7ytR95Bw.png"
                        alt="SCN Global"
                        style={{ height: '42px', width: '42px', borderRadius: '50%', objectFit: 'cover' }}
                    />
                    <span className="logo-text">SCN GLOBAL</span>
                </button>

                {/* Center Navigation */}
                <nav className="primary-nav">
                    {navItems.map(item => (
                        <button
                            key={item.label}
                            className={`nav-item-btn ${!item.external && location.pathname === item.route ? 'nav-item-active' : ''}`}
                            onClick={() => handleNavClick(item)}
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                        >
                            {item.label}
                            {item.external && <ExternalLink size={12} style={{ opacity: 0.8 }} />}
                        </button>
                    ))}
                </nav>

                {/* Far Right: Pill-shaped CTA button */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <button className="pill-cta" onClick={() => handleNavClick('/contact-us')}>
                        CONTACT US
                    </button>

                    <div className="mobile-menu-toggle">
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu" style={{ color: 'var(--color-text)' }}>
                            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}>
                <ul className="mobile-nav-list">
                    {navItems.map(item => (
                        <li key={item.label}>
                            <button
                                className={`mobile-nav-btn ${!item.external && location.pathname === item.route ? 'active' : ''}`}
                                onClick={() => handleNavClick(item)}
                                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                            >
                                {item.label}
                                {item.external && <ExternalLink size={16} />}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Header;
