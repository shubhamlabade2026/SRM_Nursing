import React from 'react';
import { Star, Award, Shield } from 'lucide-react';

const Team = () => {

    const teamMembers = [
        { name: "Anjali Deshmukh", role: "Sr. Registered Nurse", exp: "8 Years Exp", desc: "Specialist in ICU and Trauma Care" },
        { name: "Priya Sharma", role: "Certified Caretaker", exp: "5 Years Exp", desc: "Expert in Elderly and Dementia care" },
        { name: "Rahul Patil", role: "Male Nurse / Wardboy", exp: "6 Years Exp", desc: "Post-surgery and mobility assistance" },
        { name: "Sunita Verma", role: "Pediatric Nurse", exp: "4 Years Exp", desc: "Specialized in newborn and baby care" },
    ];

    return (
        <div className="page-wrapper animate-fade-in">
            <div className="page-header bg-light section">
                <div className="container text-center">
                    <h1 className="hero-title">Our Dedicated <span className="text-secondary">Staff</span></h1>
                    <p className="hero-description mx-auto">Meet the faces of compassion. Our rigorous selection ensures only the most empathetic and skilled professionals join our bureau.</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="grid grid-4">
                        {teamMembers.map((member, i) => (
                            <div key={i} className="card text-center" style={{ padding: '2rem 1rem' }}>
                                <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary-light), var(--primary))', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                                    <span style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>{member.name.charAt(0)}</span>
                                </div>
                                <h3 className="mb-1">{member.name}</h3>
                                <p className="text-secondary font-bold mb-2">{member.role}</p>
                                <div style={{ display: 'inline-block', background: '#f1f5f9', padding: '0.25rem 0.75rem', borderRadius: '50px', fontSize: '0.85rem', marginBottom: '1rem', color: '#475569' }}>
                                    <Award size={14} style={{ display: 'inline', marginRight: '4px' }} /> {member.exp}
                                </div>
                                <p className="text-muted" style={{ fontSize: '0.9rem' }}>{member.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-5 text-center p-5 bg-primary text-white" style={{ borderRadius: '24px' }}>
                        <Shield size={48} className="mx-auto mb-3" style={{ opacity: 0.8 }} />
                        <h2 className="text-white mb-2">Want to join our noble team?</h2>
                        <p className="mb-4 text-white" style={{ opacity: 0.9 }}>We are always recruiting verified and experienced nursing professionals.</p>
                        <button className="btn" style={{ background: 'white', color: 'var(--primary)' }}>Apply for Job</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Team;
