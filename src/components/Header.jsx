import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Navigation } from 'lucide-react';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const closeMenu = () => setIsMenuOpen(false);

    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <header className="header">
            {/* Top Bar for Contact Info */}
            <div className="top-bar">
                <div className="container top-bar-content">
                    <div className="contact-info">
                        <a href="tel:+917498059801" className="info-item"><Phone size={14} /> Moeen Pathan: +91 7498059801</a>
                        <a href="mailto:moeensr9101@gmail.com" className="info-item"><Mail size={14} /> moeensr9101@gmail.com</a>
                    </div>
                    <div className="emergency-badge">
                        24/7 Home & Hospital Care
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="main-nav container">
                <Link to="/" className="logo" onClick={closeMenu}>
                    <img src="/images/logo.png" alt="SMR Nursing Bureau Logo" />
                    <div className="logo-text">
                        <h1>SMR <span>Nursing Bureau</span></h1>
                    </div>
                </Link>

                {/* Desktop Menu & Enhanced Mobile Drawer */}
                <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                    <Link to="/" className={`nav-link ${isActive('/')}`} onClick={closeMenu}>Home</Link>
                    <Link to="/about" className={`nav-link ${isActive('/about')}`} onClick={closeMenu}>About Us</Link>
                    <Link to="/services" className={`nav-link ${isActive('/services')}`} onClick={closeMenu}>Services</Link>
                    <Link to="/team" className={`nav-link ${isActive('/team')}`} onClick={closeMenu}>Our Team</Link>
                    <Link to="/faq" className={`nav-link ${isActive('/faq')}`} onClick={closeMenu}>FAQ</Link>
                    <Link to="/contact" className={`nav-link ${isActive('/contact')}`} onClick={closeMenu}>Contact</Link>
                    <Link to="/book" className="btn btn-primary ml-4" onClick={closeMenu}>Hire Caretaker</Link>
                    
                    {/* Extra Actionable Features available on Mobile Menu */}
                    <div className="mobile-extras">
                        <hr className="mobile-divider" />
                        <div className="emergency-badge" style={{ textAlign: 'center', marginBottom: '1.5rem', width: '100%' }}>
                            🚨 Emergency Support 24/7
                        </div>
                        <a href="tel:+917498059801" className="btn btn-outline" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
                            <Phone size={18} /> Call Us Now
                        </a>
                        <a href="mailto:moeensr9101@gmail.com" className="btn btn-outline" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                            <Mail size={18} /> Send Email
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>
        </header>
    );
};

export default Header;
