import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content grid grid-4">
                <div className="footer-col brand-col">
                    <Link to="/" className="footer-logo">
                        <img src="/images/logo.png" alt="SMR Logo" />
                        <div className="footer-logo-text">
                            <h2>SMR</h2>
                            <span>Nursing Institute</span>
                        </div>
                    </Link>
                    <p className="mt-2">Empowering the next generation of healthcare professionals with world-class education and hands-on clinical training.</p>
                    <div className="social-links mt-3">
                        <a href="#"><Facebook size={20} /></a>
                        <a href="#"><Twitter size={20} /></a>
                        <a href="#"><Instagram size={20} /></a>
                        <a href="#"><Linkedin size={20} /></a>
                    </div>
                </div>

                <div className="footer-col links-col">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/about"><ArrowRight size={16} /> About Us</Link></li>
                        <li><Link to="/courses"><ArrowRight size={16} /> Our Courses</Link></li>
                        <li><Link to="/admissions"><ArrowRight size={16} /> Admissions 2026</Link></li>
                        <li><Link to="/facilities"><ArrowRight size={16} /> Facilities</Link></li>
                        <li><Link to="/gallery"><ArrowRight size={16} /> Gallery</Link></li>
                    </ul>
                </div>

                <div className="footer-col courses-col">
                    <h3>Top Courses</h3>
                    <ul>
                        <li><Link to="/courses"><ArrowRight size={16} /> B.Sc Nursing</Link></li>
                        <li><Link to="/courses"><ArrowRight size={16} /> GNM (General Nursing)</Link></li>
                        <li><Link to="/courses"><ArrowRight size={16} /> ANM (Auxiliary Nursing)</Link></li>
                        <li><Link to="/courses"><ArrowRight size={16} /> Post Basic B.Sc Nursing</Link></li>
                    </ul>
                </div>

                <div className="footer-col contact-col">
                    <h3>Contact Us</h3>
                    <ul>
                        <li><MapPin size={20} className="icon" /> <span>123 Health City Road, Medical Campus, Metropolis, 400001</span></li>
                        <li><Phone size={20} className="icon" /> <span>+1 (234) 567-890<br />+1 (234) 567-891</span></li>
                        <li><Mail size={20} className="icon" /> <span>info@smrnursing.edu<br />admissions@smrnursing.edu</span></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} SMR Nursing Institute. All Rights Reserved.</p>
                    <div className="footer-bottom-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
