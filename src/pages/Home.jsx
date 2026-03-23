import { Link } from 'react-router-dom';
import { HeartPulse, Home as HomeIcon, Activity, Stethoscope, ChevronRight, Check, Star } from 'lucide-react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page animate-fade-in">
            {/* Hero Section */}
            <section className="hero">
                <div className="container hero-container">
                    <div className="hero-content">
                        <div className="badge animate-slide-up">24/7 Professional Medical Support</div>
                        <h1 className="hero-title animate-slide-up" style={{ animationDelay: '0.1s' }}>
                            Compassionate Care at Your <span className="text-secondary">Doorstep</span>
                        </h1>
                        <p className="hero-description animate-slide-up" style={{ animationDelay: '0.2s' }}>
                            SMR Nursing Bureau is dedicated to providing highly trained nurses, experienced caretakers, and comprehensive medical support for your loved ones, exactly when you need it most.
                        </p>
                        <div className="hero-actions animate-slide-up" style={{ animationDelay: '0.3s' }}>
                            <Link to="/book" className="btn btn-primary">Book a Caretaker <ChevronRight size={20} /></Link>
                            <Link to="/contact" className="btn btn-outline" style={{ marginLeft: '1rem' }}>Contact Us</Link>
                        </div>

                        <div className="trust-indicators animate-slide-up" style={{ animationDelay: '0.4s' }}>
                            <div className="trust-item"><Check size={20} className="text-secondary" /> Verified Staff</div>
                            <div className="trust-item"><Check size={20} className="text-secondary" /> Trusted by 1000+ Families</div>
                            <div className="trust-item"><Check size={20} className="text-secondary" /> Rapid Response</div>
                        </div>
                    </div>
                    <div className="hero-image-wrapper animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        {/* Using a sleek placeholder styling since we don't have custom photography yet */}
                        <div className="hero-mockup">
                            <div className="mockup-card glass-effect">
                                <div className="mockup-header">
                                    <HeartPulse size={32} className="text-secondary" />
                                    <h4>Emergency Care</h4>
                                </div>
                                <p>Our rapid response team is always ready for immediate deployment to hospitals or residences.</p>
                            </div>
                            <img src="/images/hero.png" alt="Nursing Care" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '24px' }} onError={(e) => { e.target.style.display = 'none' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="section bg-light">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="title">Our Key Services</h2>
                        <p className="subtitle">Comprehensive medical and non-medical support tailored exactly to patient requirements.</p>
                    </div>

                    <div className="grid grid-4 mt-5">
                        <div className="card service-card">
                            <div className="icon-wrapper"><HomeIcon size={32} /></div>
                            <h3>Home Nursing Care</h3>
                            <p>Professional nursing staff providing post-surgical, chronic illness, and general health monitoring in the comfort of your home.</p>
                            <Link to="/services" className="text-btn">Explore <ChevronRight size={16} /></Link>
                        </div>

                        <div className="card service-card active">
                            <div className="icon-wrapper"><Activity size={32} /></div>
                            <h3>Hospital Caretaker</h3>
                            <p>Dedicated caretakers to assist patients admitted in hospitals with daily needs, hygiene, and monitoring when family cannot be present.</p>
                            <Link to="/services" className="text-btn">Explore <ChevronRight size={16} /></Link>
                        </div>

                        <div className="card service-card">
                            <div className="icon-wrapper"><HeartPulse size={32} /></div>
                            <h3>Elderly Care</h3>
                            <p>Compassionate daily assistance, medication management, and companionship for senior citizens.</p>
                            <Link to="/services" className="text-btn">Explore <ChevronRight size={16} /></Link>
                        </div>

                        <div className="card service-card">
                            <div className="icon-wrapper"><Stethoscope size={32} /></div>
                            <h3>ICU Care at Home</h3>
                            <p>Specialized critical care nurses trained in handling ventilators, BiPAP, oxygen therapy, and critical patient monitoring.</p>
                            <Link to="/services" className="text-btn">Explore <ChevronRight size={16} /></Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick About Section */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-2 items-center">
                        <div className="about-image">
                            <div className="experience-badge">
                                <span className="years">10+</span>
                                <span className="text">Years of Trust</span>
                            </div>
                            {/* Fallback image styling */}
                            <div style={{ background: 'var(--primary-light)', height: '400px', borderRadius: '24px', opacity: 0.2 }}></div>
                        </div>
                        <div className="about-content">
                            <h2>Why Choose SMR Nursing Bureau?</h2>
                            <p className="mb-4">
                                We understand that inviting someone into your home or having them care for a vulnerable loved one requires immense trust. That's why every single professional at SMR Nursing Bureau undergoes rigorous background checks and continuous medical training.
                            </p>
                            <ul className="placement-points">
                                <li><Check color="var(--primary)" /> Highly trained, certified, and empathetic staff.</li>
                                <li><Check color="var(--primary)" /> 24/7 uninterrupted care and rapid replacement guarantees.</li>
                                <li><Check color="var(--primary)" /> Transparent pricing with no hidden charges.</li>
                                <li><Check color="var(--primary)" /> Personalized care plans developed with doctors' recommendations.</li>
                            </ul>
                            <Link to="/about" className="btn btn-outline mt-4">Read Full Story</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Snippet */}
            <section className="section bg-primary text-white">
                <div className="container text-center">
                    <h2 className="mb-5 text-white">What Families Say</h2>
                    <div className="grid grid-3">
                        <div className="card" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white' }}>
                            <div className="flex" style={{ color: '#fbbf24', marginBottom: '1rem' }}><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /></div>
                            <p>"The caretaker provided for my grandfather was incredibly patient and skilled. We felt completely safe leaving him in their hands."</p>
                            <h4 className="mt-4" style={{ color: 'var(--secondary)' }}>- R. Sharma</h4>
                        </div>
                        <div className="card" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white' }}>
                            <div className="flex" style={{ color: '#fbbf24', marginBottom: '1rem' }}><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /></div>
                            <p>"SMR Nursing Bureau arranged an ICU nurse within 4 hours of our discharge. Impeccable professional service during a critical time."</p>
                            <h4 className="mt-4" style={{ color: 'var(--secondary)' }}>- Amit Joshi</h4>
                        </div>
                        <div className="card" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white' }}>
                            <div className="flex" style={{ color: '#fbbf24', marginBottom: '1rem' }}><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /></div>
                            <p>"Very disciplined and punctual staff. The 24/7 support line actually works and they are extremely responsive to changing needs."</p>
                            <h4 className="mt-4" style={{ color: 'var(--secondary)' }}>- Sneha P.</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section text-center">
                <div className="container">
                    <h2>Ready to arrange care for your loved one?</h2>
                    <p className="subtitle mx-auto mb-4 text-muted">Contact our care coordinators today for a free consultation and personalized care plan.</p>
                    <Link to="/book" className="btn btn-primary btn-lg">Hire a Caretaker Now</Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
