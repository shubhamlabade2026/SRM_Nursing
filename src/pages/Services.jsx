import React from 'react';
import { Home, Activity, HeartPulse, Stethoscope, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div className="page-wrapper animate-fade-in">
            <div className="page-header bg-light section">
                <div className="container text-center">
                    <h1 className="hero-title">Our <span className="text-secondary">Services</span></h1>
                    <p className="hero-description mx-auto">Comprehensive medical, nursing, and caretaker services tailored to meet the exact requirements of patients and elderly individuals.</p>
                </div>
            </div>

            <section className="section">
                <div className="container">

                    {/* Service 1 */}
                    <div className="grid grid-2 items-center mb-5" style={{ gap: '3rem' }}>
                        <div className="card" style={{ background: 'var(--primary-light)', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
                            <Home size={100} color="var(--primary)" style={{ opacity: 0.5 }} />
                        </div>
                        <div>
                            <h2 className="mb-3">Home Nursing Care</h2>
                            <p className="text-muted mb-4">Our highly trained registered nurses provide clinical care directly in your home. This service is ideal for patients recovering from acute illness, managing chronic conditions, or requiring continuous medical monitoring.</p>
                            <ul className="placement-points mb-4">
                                <li><CheckCircle color="var(--primary)" /> Vitals monitoring and medication administration.</li>
                                <li><CheckCircle color="var(--primary)" /> Wound dressing and injection administration.</li>
                                <li><CheckCircle color="var(--primary)" /> IV therapy and catheterization.</li>
                                <li><CheckCircle color="var(--primary)" /> Ryle's tube feeding and management.</li>
                            </ul>
                            <Link to="/book" className="btn btn-primary">Book Nurse</Link>
                        </div>
                    </div>

                    <hr style={{ margin: '4rem 0', opacity: 0.2 }} />

                    {/* Service 2 */}
                    <div className="grid grid-2 items-center mb-5" style={{ gap: '3rem' }}>
                        <div style={{ order: 2 }} className="card">
                            <h2 className="mb-3">Hospital Caretaker Services</h2>
                            <p className="text-muted mb-4">When a family member is hospitalized, it isn't always possible for relatives to stay 24/7. Our hospital attendants stay by the patient's side, ensuring all their non-medical needs are met promptly and communicating with hospital staff.</p>
                            <ul className="placement-points mb-4">
                                <li><CheckCircle color="var(--primary)" /> Assistance with mobility and washroom needs.</li>
                                <li><CheckCircle color="var(--primary)" /> Sponge baths and strict hygiene maintenance.</li>
                                <li><CheckCircle color="var(--primary)" /> Feeding assistance.</li>
                                <li><CheckCircle color="var(--primary)" /> Constant companion to alert nurses during emergencies.</li>
                            </ul>
                            <Link to="/book" className="btn btn-primary">Hire Caretaker</Link>
                        </div>
                        <div style={{ order: 1 }} className="card" style={{ background: 'var(--secondary)', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
                            <Activity size={100} color="white" style={{ opacity: 0.8 }} />
                        </div>
                    </div>

                    <hr style={{ margin: '4rem 0', opacity: 0.2 }} />

                    {/* Service 3 */}
                    <div className="grid grid-2 items-center mb-5" style={{ gap: '3rem' }}>
                        <div className="card" style={{ background: 'var(--primary)', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
                            <HeartPulse size={100} color="white" style={{ opacity: 0.5 }} />
                        </div>
                        <div>
                            <h2 className="mb-3">Elderly Care & Babysitting</h2>
                            <p className="text-muted mb-4">We provide compassionate caregivers specially trained to handle the psychological and physical needs of senior citizens, ensuring they live with dignity and independence.</p>
                            <ul className="placement-points mb-4">
                                <li><CheckCircle color="var(--primary)" /> Timely medication reminders.</li>
                                <li><CheckCircle color="var(--primary)" /> Assistance with daily activities (ADL).</li>
                                <li><CheckCircle color="var(--primary)" /> Fall prevention and mobility support.</li>
                                <li><CheckCircle color="var(--primary)" /> Empathetic companionship and emotional support.</li>
                            </ul>
                            <Link to="/book" className="btn btn-primary">Book Elderly Care</Link>
                        </div>
                    </div>

                    <hr style={{ margin: '4rem 0', opacity: 0.2 }} />

                    {/* Service 4 */}
                    <div className="grid grid-2 items-center" style={{ gap: '3rem' }}>
                        <div style={{ order: 2 }} className="card">
                            <h2 className="mb-3">ICU Setup at Home</h2>
                            <p className="text-muted mb-4">For critically ill patients cleared for home care, bringing hospital-level care to the residence drastically reduces costs and infection risks. We provide specialized ICU-trained staff.</p>
                            <ul className="placement-points mb-4">
                                <li><CheckCircle color="var(--primary)" /> Tracheostomy and ventilator management.</li>
                                <li><CheckCircle color="var(--primary)" /> BiPAP / CPAP operation.</li>
                                <li><CheckCircle color="var(--primary)" /> Critical patient vitals tracking and doctor reporting.</li>
                                <li><CheckCircle color="var(--primary)" /> Advanced life support certified nurses.</li>
                            </ul>
                            <Link to="/book" className="btn btn-primary">Request ICU Care</Link>
                        </div>
                        <div style={{ order: 1 }} className="card" style={{ background: '#f8fafc', border: '1px solid #e2e8f0', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
                            <Stethoscope size={100} color="var(--text-dark)" style={{ opacity: 0.2 }} />
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

// Simple inline functional component to avoid import issues
const CheckCircle = ({ color }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
);

export default Services;
