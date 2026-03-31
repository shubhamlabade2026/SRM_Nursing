import { Link } from 'react-router-dom';
import { HeartPulse, Home as HomeIcon, Activity, Stethoscope, ChevronRight, Check, Star, User } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import './Home.css';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const Home = () => {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "SMR Nursing Bureau",
        "image": "https://srmnursing.vercel.app/images/hero.png",
        "url": "https://srmnursing.vercel.app/",
        "telephone": "+917498059801",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Near Main City Hospital",
            "addressLocality": "Pune",
            "addressRegion": "Maharashtra",
            "postalCode": "411001",
            "addressCountry": "IN"
        },
        "areaServed": [
            { "@type": "State", "name": "Maharashtra" },
            { "@type": "City", "name": "Pune" },
            { "@type": "City", "name": "Pimpri-Chinchwad" },
            { "@type": "City", "name": "Mumbai" }
        ],
        "description": "SMR Nursing Bureau is a leading provider of highly trained nurses, reliable caretakers, elderly care, and complete ICU setups at home across Pune and Maharashtra."
    };

    return (
        <div className="home-page">
            <SEO 
                title="#1 Nursing Bureau in Pune & Maharashtra | SMR Care"
                description="Top-rated nursing bureau in Pune. SMR Nursing provides highly trained caretakers, home nurses, elderly care, and 24/7 ICU setups across Maharashtra."
                keywords="Nursing Bureau Pune, best nursing bureau in Maharashtra, hire caretaker Pune, home nurse Maharashtra, elderly care Pune, ICU setup at home, patient caretaker Mumbai, medical attendant"
                schema={localBusinessSchema}
            />

            {/* Premium Hero Section */}
            <section className="hero gradient-bg">
                <div className="mesh-blob blob-1"></div>
                <div className="mesh-blob blob-2"></div>
                
                <div className="container hero-container relative z-10">
                    <motion.div 
                        className="hero-content"
                        initial="hidden" animate="visible" variants={staggerContainer}
                    >
                        <motion.div variants={fadeIn} className="badge glass-panel">
                            ✨ 24/7 Professional Medical Support
                        </motion.div>
                        <motion.h1 variants={fadeIn} className="hero-title text-gradient">
                            Compassionate Care, <br/>Right at Home.
                        </motion.h1>
                        <motion.p variants={fadeIn} className="hero-description text-muted">
                            SMR Nursing Bureau provides highly trained nurses, experienced caretakers, and comprehensive medical support tailored to your loved ones' precise needs.
                        </motion.p>
                        <motion.div variants={fadeIn} className="hero-actions">
                            <Link to="/book" className="btn btn-primary">Book a Caretaker <ChevronRight size={20} /></Link>
                            <Link to="/contact" className="btn btn-outline" style={{ marginLeft: '1rem' }}>Contact Us</Link>
                        </motion.div>

                        <motion.div variants={fadeIn} className="trust-indicators glass-panel">
                            <div className="trust-item"><Check size={20} className="text-secondary" /> Verified Staff</div>
                            <div className="trust-item"><Check size={20} className="text-secondary" /> Trusted by 1000+ Families</div>
                            <div className="trust-item"><Check size={20} className="text-secondary" /> Rapid Response</div>
                        </motion.div>
                    </motion.div>
                    
                    <motion.div 
                        className="hero-image-wrapper"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        <div className="hero-mockup glass-panel">
                            <div className="mockup-card glass-card">
                                <div className="mockup-header">
                                    <div className="icon-glow"><HeartPulse size={24} className="text-primary" /></div>
                                    <h4>Emergency Care</h4>
                                </div>
                                <p>Our rapid response team is always ready for immediate deployment.</p>
                            </div>
                            <img src="/images/hero.png" alt="Professional Nursing Care" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }} onError={(e) => { e.target.style.display = 'none' }} />
                            {/* Abstract decorative element in mockup */}
                            <div className="abstract-shape"></div>
                        </div>
                    </motion.div>
                </div>

                {/* Decorative Wave Divider */}
                <div className="wave-divider">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,130.83,123.63,195,107.57,243.61,95.3,281.25,66.82,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
            </section>

            {/* SEO Content Section */}
            <section className="section bg-white mt-5">
                <motion.div 
                    className="container" 
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
                    style={{ textAlign: 'justify', lineHeight: '1.8' }}
                >
                    <motion.h2 variants={fadeIn} className="mb-4 text-center">About SRM Nursing Bureau Pune</motion.h2>
                    <div className="glass-panel p-4" style={{ borderRadius: '24px' }}>
                        <motion.p variants={fadeIn} className="mb-3">
                            Welcome to SRM Nursing Bureau Pune, your trusted partner for professional caretaker services, home nursing, and medical support. Organizing reliable and compassionate care for your loved ones can be a challenging task, but at SRM Nursing Bureau, we strive to make it as seamless as possible. We provide a comprehensive range of health care services, specializing in placing highly trained nurses, experienced caretakers, and skilled medical attendants right at your doorstep.
                        </motion.p>
                        <motion.p variants={fadeIn} className="mb-3">
                            Our primary mission is to ensure that patients receive the highest quality of care in the comfort and familiarity of their own homes. Whether you need daily assistance with elderly care, attentive post-surgical recovery, long-term chronic illness management, or setting up a complete ICU facility at home, our dedicated team is available 24/7 to meet your exact demands.
                        </motion.p>
                        <motion.p variants={fadeIn} className="mb-3">
                            At SRM Nursing Bureau, we believe we do not just provide a medical service; we build lasting trust with the families we serve. Every single staff member undergoes a rigorous background check and continuous medical training. Furthermore, our dedicated hospital caretakers are readily available to support patients during their hospital stay.
                        </motion.p>
                        <motion.p variants={fadeIn}>
                            Choosing the right care provider is a critical decision. Choose SRM Nursing Bureau in Pune for professional, empathetic, and highly reliable caretaker services that prioritize the safety, health, and well-being of you and your beloved family members above all else. Your peace of mind is our ultimate goal.
                        </motion.p>
                    </div>
                </motion.div>
            </section>

            {/* Interactive Services Overview */}
            <section className="section gradient-bg" style={{ padding: '6rem 0' }}>
                <div className="mesh-blob blob-3"></div>
                <div className="container relative z-10">
                    <motion.div 
                        className="section-header text-center"
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                    >
                        <h2 className="title">Our Premium Services</h2>
                        <p className="subtitle">Comprehensive medical support tailored exactly to patient requirements.</p>
                    </motion.div>

                    <motion.div 
                        className="grid grid-4 mt-5"
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
                    >
                        {[
                            { icon: HomeIcon, title: "Home Nursing", desc: "Professional nursing staff providing post-surgical health monitoring at home." },
                            { icon: Activity, title: "Hospital Care", desc: "Dedicated caretakers to assist admitted patients when family cannot be present.", active: true },
                            { icon: HeartPulse, title: "Elderly Care", desc: "Compassionate daily assistance, medication management, and companionship." },
                            { icon: Stethoscope, title: "ICU at Home", desc: "Specialized critical care nurses trained in ventilators and oxygen therapy." }
                        ].map((service, index) => (
                            <motion.div key={index} variants={fadeIn} className={`glass-card service-card ${service.active ? 'active-gradient' : ''}`}>
                                <div className="icon-wrapper glass-element">
                                    <service.icon size={32} className={service.active ? 'text-white' : 'text-primary'} />
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                                <Link to="/services" className={`text-btn fw-bold mt-2 ${service.active ? 'text-white' : 'text-primary'}`}>Explore <ChevronRight size={16} /></Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Quick About Section */}
            <section className="section bg-white overflow-hidden">
                <div className="container">
                    <div className="grid grid-2 align-center">
                        <motion.div 
                            className="about-image"
                            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                        >
                            <div className="experience-badge glass-panel text-primary">
                                <span className="years text-gradient">10+</span>
                                <span className="text fw-bold">Years of Trust</span>
                            </div>
                            <div className="decorative-image-container">
                                <div className="abstract-blob-bg"></div>
                                <img src="/images/hero.png" alt="Trust" className="rounded-img shadow-lg" onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.style.background = 'var(--primary-light)'; e.target.parentElement.style.opacity = '0.1'; }} />
                            </div>
                        </motion.div>
                        <motion.div 
                            className="about-content pl-4"
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                        >
                            <motion.h2 variants={fadeIn}>Why Choose <span className="text-gradient">SMR Nursing?</span></motion.h2>
                            <motion.p variants={fadeIn} className="mb-4 text-muted" style={{ fontSize: '1.1rem' }}>
                                Inviting someone into your home requires immense trust. Every professional at SMR undergoes rigorous background checks.
                            </motion.p>
                            <ul className="placement-points">
                                {[
                                    "Highly trained, certified, and empathetic staff.",
                                    "24/7 uninterrupted care and rapid replacement guarantees.",
                                    "Transparent pricing with no hidden charges.",
                                    "Personalized care plans developed with doctors."
                                ].map((point, i) => (
                                    <motion.li key={i} variants={fadeIn} className="glass-panel d-flex align-center gap-2 p-2 mb-2" style={{ borderRadius: '12px' }}>
                                        <div className="icon-circle-sm bg-secondary"><Check size={16} color="white" /></div> 
                                        <span className="fw-medium">{point}</span>
                                    </motion.li>
                                ))}
                            </ul>
                            <motion.div variants={fadeIn} className="mt-4">
                                <Link to="/about" className="btn btn-outline">Read Full Story</Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Owners Section */}
            <section className="section gradient-bg">
                <div className="container">
                    <motion.h2 
                        className="text-center mb-5"
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    >Meet Our Leadership</motion.h2>
                    <motion.div 
                        className="grid grid-3 text-center"
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
                    >
                        {['Shubham Labade', 'Moeen Pathan', 'Rudra Patil'].map((name, idx) => (
                            <motion.div key={idx} variants={fadeIn} className="glass-card hover-lift p-4" style={{ borderRadius: '24px' }}>
                                <div className="icon-wrapper mx-auto mb-3 glass-element avatar-wrapper">
                                    <User size={40} className="text-primary" />
                                </div>
                                <h3 className="mb-1">{name}</h3>
                                <p className="text-secondary fw-bold">Owner</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Final Premium CTA */}
            <section className="section text-center position-relative overflow-hidden" style={{ background: 'var(--text-dark)', color: 'white' }}>
                <div className="mesh-blob blob-1" style={{ background: 'rgba(0, 180, 216, 0.2)' }}></div>
                <div className="container position-relative z-10">
                    <motion.h2 
                        initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                        className="mb-3 text-white" style={{ fontSize: '3rem' }}
                    >Ready for peace of mind?</motion.h2>
                    <motion.p 
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} delay={0.2}
                        className="subtitle mx-auto mb-4" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '600px' }}
                    >
                        Contact our care coordinators today for a free consultation and personalized care plan.
                    </motion.p>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} delay={0.3}>
                        <Link to="/book" className="btn btn-primary btn-lg shine-effect" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>Hire a Caretaker Now</Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
