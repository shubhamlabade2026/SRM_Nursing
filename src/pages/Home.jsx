import { Link } from 'react-router-dom';
import { Award, BookOpen, Users, Brain, HeartPulse, Stethoscope, ChevronRight, CheckCircle2 } from 'lucide-react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page animate-fade-in">
            {/* Hero Section */}
            <section className="hero">
                <div className="container hero-container">
                    <div className="hero-content">
                        <span className="badge">Admissions Open 2026</span>
                        <h1 className="hero-title">Caring Hands, <span className="text-secondary">Bright Future</span></h1>
                        <p className="hero-description">
                            SMR Nursing Institute empowers compassionate individuals with world-class medical education, state-of-the-art clinical training, and holistic skill development.
                        </p>
                        <div className="hero-btns">
                            <Link to="/admissions" className="btn btn-primary btn-lg">Apply Now <ChevronRight size={20} /></Link>
                            <Link to="/contact" className="btn btn-outline btn-lg">Contact Us</Link>
                        </div>

                        <div className="hero-stats mt-5">
                            <div className="stat">
                                <h3>98%</h3>
                                <p>Placement Rate</p>
                            </div>
                            <div className="stat">
                                <h3>15+</h3>
                                <p>Expert Faculty</p>
                            </div>
                            <div className="stat">
                                <h3>500+</h3>
                                <p>Alumni</p>
                            </div>
                        </div>
                    </div>
                    <div className="hero-image-wrapper">
                        <img src="/images/hero.png" alt="Nursing professionals" className="hero-image" />
                        <div className="floating-card">
                            <div className="floating-card-icon"><HeartPulse color="var(--primary)" /></div>
                            <div>
                                <strong>Top Ranked</strong>
                                <p>Nursing Institute</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Highlights Section */}
            <section className="section bg-light highlights">
                <div className="container">
                    <div className="section-title">
                        <h2>Why Choose SMR Institute?</h2>
                        <p>We blend rigorous academic study with extensive hands-on clinical practice to prepare our students for rewarding careers in healthcare.</p>
                    </div>

                    <div className="grid grid-3">
                        <div className="card text-center highlight-card">
                            <div className="icon-wrapper"><BookOpen size={32} /></div>
                            <h3>Modern Curriculum</h3>
                            <p>Our syllabus is regularly updated alongside industry leaders to match modern healthcare demands and global nursing standards.</p>
                        </div>
                        <div className="card text-center highlight-card active">
                            <div className="icon-wrapper"><Stethoscope size={32} /></div>
                            <h3>Clinical Experience</h3>
                            <p>Gain real-world experience through our partnerships with leading multi-specialty hospitals and healthcare centers.</p>
                        </div>
                        <div className="card text-center highlight-card">
                            <div className="icon-wrapper"><Award size={32} /></div>
                            <h3>Recognized Degree</h3>
                            <p>All our courses are fully approved by INC and state nursing councils, ensuring your degree opens doors worldwide.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Placement Section */}
            <section className="section placement-section">
                <div className="container placement-grid">
                    <div className="placement-image-container">
                        <img src="/images/about.png" alt="Students studying" className="placement-image" />
                    </div>
                    <div className="placement-content">
                        <h2>Exceptional Placement Opportunities</h2>
                        <p className="mb-3">SMR Nursing Institute has a dedicated placement cell bridging the gap between our talented graduates and top healthcare recruiters globally.</p>

                        <ul className="placement-points">
                            <li><CheckCircle2 color="var(--secondary)" /> 100% Placement assistance for all courses</li>
                            <li><CheckCircle2 color="var(--secondary)" /> Special tie-ups with Apollo, Fortis, and Max Healthcare</li>
                            <li><CheckCircle2 color="var(--secondary)" /> Overseas placement guidance for UK, Canada, and USA</li>
                            <li><CheckCircle2 color="var(--secondary)" /> Soft skills and interview preparation workshops</li>
                        </ul>

                        <Link to="/about" className="btn btn-secondary mt-4">Learn More About Us</Link>
                    </div>
                </div>
            </section>

            {/* Programs Overview */}
            <section className="section programs-overview">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Programs</h2>
                        <p>Comprehensive nursing courses designed for every stage of your healthcare career.</p>
                    </div>

                    <div className="grid grid-3">
                        <div className="card course-card">
                            <div className="course-badge">3 Years</div>
                            <h3>GNM</h3>
                            <p className="course-full">General Nursing and Midwifery</p>
                            <p className="course-desc">A comprehensive diploma program focusing on general health care, nursing, and midwifery skills.</p>
                            <Link to="/courses" className="course-link">View Details <ChevronRight size={16} /></Link>
                        </div>

                        <div className="card course-card featured">
                            <div className="course-badge">4 Years</div>
                            <h3>B.Sc Nursing</h3>
                            <p className="course-full">Bachelor of Science in Nursing</p>
                            <p className="course-desc">An undergraduate degree equipping students with advanced clinical skills and critical thinking for professional nursing.</p>
                            <Link to="/courses" className="course-link">View Details <ChevronRight size={16} /></Link>
                        </div>

                        <div className="card course-card">
                            <div className="course-badge">2 Years</div>
                            <h3>ANM</h3>
                            <p className="course-full">Auxiliary Nursing Midwifery</p>
                            <p className="course-desc">A foundational medical course preparing students for community health nursing and basic care.</p>
                            <Link to="/courses" className="course-link">View Details <ChevronRight size={16} /></Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section testimonials-section bg-light">
                <div className="container">
                    <div className="section-title">
                        <h2>Student Success Stories</h2>
                        <p>Hear from our proud alumni making a difference in the healthcare sector.</p>
                    </div>

                    <div className="grid grid-2">
                        <div className="card testimonial-card">
                            <div className="stars">★★★★★</div>
                            <p className="quote">"The clinical exposure at SMR helped me secure a job before I even graduated. The faculty is incredibly supportive and the simulation labs are top-notch."</p>
                            <div className="author">
                                <div className="author-avatar">A</div>
                                <div className="author-info">
                                    <h4>Anjali Sharma</h4>
                                    <span>B.Sc Nursing, Batch of 2024</span>
                                </div>
                            </div>
                        </div>

                        <div className="card testimonial-card">
                            <div className="stars">★★★★★</div>
                            <p className="quote">"SMR didn't just teach me how to be a nurse; they taught me how to be a compassionate caregiver. The placement cell guided me extensively."</p>
                            <div className="author">
                                <div className="author-avatar">M</div>
                                <div className="author-info">
                                    <h4>Mohammed Rafi</h4>
                                    <span>GNM, Batch of 2023</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section faq-section">
                <div className="container">
                    <div className="section-title">
                        <h2>Frequently Asked Questions</h2>
                    </div>
                    <div className="faq-grid">
                        <div className="faq-item">
                            <h4>Is SMR Nursing Institute recognized?</h4>
                            <p>Yes, all our courses are approved by the State Nursing Council and Indian Nursing Council (INC).</p>
                        </div>
                        <div className="faq-item">
                            <h4>Do you provide hostel facilities?</h4>
                            <p>Yes, we have separate, secure, and fully equipped hostels for boys and girls within the campus with mess facilities.</p>
                        </div>
                        <div className="faq-item">
                            <h4>What is the admission process?</h4>
                            <p>Admissions are granted based on merit and entrance exams depending on the specific course. Apply online through our portal and our counselors will guide you.</p>
                        </div>
                        <div className="faq-item">
                            <h4>Are scholarships available?</h4>
                            <p>We offer merit-based scholarships and assist students in applying for various state and central government scholarship schemes.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
