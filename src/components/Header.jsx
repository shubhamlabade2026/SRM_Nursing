import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Courses', path: '/courses' },
        { name: 'Facilities', path: '/facilities' },
        { name: 'Admissions', path: '/admissions' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact Us', path: '/contact' },
    ];

    return (
        <header className="header">
            <div className="top-bar">
                <div className="container top-bar-inner">
                    <div className="contact-info">
                        <a href="tel:+1234567890"><Phone size={14} /> +1 (234) 567-890</a>
                        <a href="mailto:info@smrnursing.edu"><Mail size={14} /> info@smrnursing.edu</a>
                    </div>
                    <div className="apply-now-top">
                        <Link to="/admissions" className="top-apply-btn">Apply Now 2026</Link>
                    </div>
                </div>
            </div>

            <div className="main-nav-container">
                <div className="container main-nav">
                    <Link to="/" className="logo">
                        <img src="/images/logo.png" alt="SMR Nursing Institute Logo" />
                        <div className="logo-text">
                            <h1>SMR</h1>
                            <span>Nursing Institute</span>
                        </div>
                    </Link>

                    <button className="mobile-menu-btn" onClick={toggleMenu}>
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>

                    <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={location.pathname === link.path ? 'active' : ''}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/contact" className="btn btn-primary nav-btn" onClick={() => setIsMenuOpen(false)}>
                            Contact Us
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
