import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content grid grid-4">
                {/* About Column */}
                <div className="footer-col about-col">
                    <div className="footer-logo">
                        <h2>SMR <span>Nursing Bureau</span></h2>
                    </div>
                    <p className="footer-desc">
                        Compassionate care at your doorstep. Providing highly trained nurses, caretakers, and hospital staff to ensure your loved ones receive the best medical attention and support 24/7.
                    </p>
                    <div className="social-links">
                        <a href="#" className="social-icon"><Facebook size={20} /></a>
                        <a href="#" className="social-icon"><Twitter size={20} /></a>
                        <a href="#" className="social-icon"><Instagram size={20} /></a>
                        <a href="#" className="social-icon"><Linkedin size={20} /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="footer-col links-col">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/about"><ArrowRight size={16} /> About Us</Link></li>
                        <li><Link to="/services"><ArrowRight size={16} /> Our Services</Link></li>
                        <li><Link to="/team"><ArrowRight size={16} /> Verified Staff</Link></li>
                        <li><Link to="/faq"><ArrowRight size={16} /> FAQs</Link></li>
                        <li><Link to="/contact"><ArrowRight size={16} /> Contact Us</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div className="footer-col links-col">
                    <h3>Our Services</h3>
                    <ul>
                        <li><Link to="/services"><ArrowRight size={16} /> Home Nursing</Link></li>
                        <li><Link to="/services"><ArrowRight size={16} /> Hospital Caretakers</Link></li>
                        <li><Link to="/services"><ArrowRight size={16} /> Elderly Care</Link></li>
                        <li><Link to="/services"><ArrowRight size={16} /> Post-Surgery Care</Link></li>
                        <li><Link to="/services"><ArrowRight size={16} /> ICU Home Setup</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="footer-col contact-col">
                    <h3>Get in Touch</h3>
                    <ul className="contact-details">
                        <li>
                            <MapPin size={20} className="icon" />
                            <span>SMR Nursing Bureau, Main Hospital Road, Pune, 411001, Maharashtra, India</span>
                        </li>
                        <li>
                            <Phone size={20} className="icon" />
                            <span>Moeen Pathan<br />+91 7498059801</span>
                        </li>
                        <li>
                            <Mail size={20} className="icon" />
                            <span>contact@smrnursingbureau.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} SMR Nursing Bureau. All rights reserved.</p>
                    <div className="bottom-links">
                        <Link to="/terms">Terms of Service</Link>
                        <Link to="/privacy">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
