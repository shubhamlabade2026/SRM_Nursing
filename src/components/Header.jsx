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
                        <a href="mailto:info@smrnursingbureau.com" className="info-item"><Mail size={14} /> info@smrnursingbureau.com</a>
                    </div>
                    <div className="emergency-badge">
                        24/7 Home & Hospital Care
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="main-nav container">
                <Link to="/" className="brand-logo" onClick={closeMenu}>
                    <div className="logo-icon"><Navigation fill="var(--secondary)" size={28} /></div>
                    <div className="brand-text">
                        SMR <span>Nursing Bureau</span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
                    <Link to="/" className={`nav-link ${isActive('/')}`} onClick={closeMenu}>Home</Link>
                    <Link to="/about" className={`nav-link ${isActive('/about')}`} onClick={closeMenu}>About Us</Link>
                    <Link to="/services" className={`nav-link ${isActive('/services')}`} onClick={closeMenu}>Services</Link>
                    <Link to="/team" className={`nav-link ${isActive('/team')}`} onClick={closeMenu}>Our Team</Link>
                    <Link to="/faq" className={`nav-link ${isActive('/faq')}`} onClick={closeMenu}>FAQ</Link>
                    <Link to="/contact" className={`nav-link ${isActive('/contact')}`} onClick={closeMenu}>Contact</Link>
                    <Link to="/book" className="btn btn-primary ml-4" onClick={closeMenu}>Hire Caretaker</Link>
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
