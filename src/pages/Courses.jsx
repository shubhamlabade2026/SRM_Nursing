import React from 'react';
import { BookOpen, Calendar, Clock, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Courses = () => {
    return (
        <div className="page-wrapper animate-fade-in">
            <div className="page-header bg-light section">
                <div className="container text-center">
                    <h1 className="hero-title">Academic <span className="text-secondary">Programs</span></h1>
                    <p className="hero-description mx-auto">Explore our diverse nursing courses designed for modern healthcare demands.</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="grid grid-2">

                        <div className="card course-card">
                            <div className="course-badge">4 Years</div>
                            <h2 className="course-full">B.Sc Nursing</h2>
                            <p className="course-desc">A comprehensive undergraduate degree program preparing students for a broad scope of professional nursing practices.</p>
                            <ul className="placement-points mt-3 mb-4">
                                <li><GraduationCap size={18} /> Eligibility: 10+2 with PCB (Minimum 45%)</li>
                                <li><Calendar size={18} /> Duration: 4 Years + Internship</li>
                                <li><BookOpen size={18} /> Focus: Advanced Clinical Skills, Critical Care, Midwifery</li>
                            </ul>
                            <Link to="/admissions" className="btn btn-primary w-full text-center">Apply Now</Link>
                        </div>

                        <div className="card course-card">
                            <div className="course-badge">3 Years</div>
                            <h2 className="course-full">GNM (General Nursing & Midwifery)</h2>
                            <p className="course-desc">A diploma course designed to train students in the principles of nursing and midwifery for general healthcare.</p>
                            <ul className="placement-points mt-3 mb-4">
                                <li><GraduationCap size={18} /> Eligibility: 10+2 from any recognized board</li>
                                <li><Calendar size={18} /> Duration: 3 Years + 6 Months Internship</li>
                                <li><BookOpen size={18} /> Focus: Community Health, General Patient Care</li>
                            </ul>
                            <Link to="/admissions" className="btn btn-primary w-full text-center">Apply Now</Link>
                        </div>

                        <div className="card course-card">
                            <div className="course-badge">2 Years</div>
                            <h2 className="course-full">ANM (Auxiliary Nursing & Midwifery)</h2>
                            <p className="course-desc">A foundational medical course focusing on healthcare delivery at the grassroots level, primarily focusing on child and maternal health.</p>
                            <ul className="placement-points mt-3 mb-4">
                                <li><GraduationCap size={18} /> Eligibility: 10+2 preferably Arts/Science</li>
                                <li><Calendar size={18} /> Duration: 2 Years</li>
                                <li><BookOpen size={18} /> Focus: Primary Health Centers, Rural Health</li>
                            </ul>
                            <Link to="/admissions" className="btn btn-primary w-full text-center">Apply Now</Link>
                        </div>

                        <div className="card course-card">
                            <div className="course-badge">2 Years</div>
                            <h2 className="course-full">Post Basic B.Sc Nursing</h2>
                            <p className="course-desc">An advanced degree for registered nurses (GNM) wishing to upgrade their qualifications to a bachelor's degree.</p>
                            <ul className="placement-points mt-3 mb-4">
                                <li><GraduationCap size={18} /> Eligibility: Registered GNM Nurse</li>
                                <li><Calendar size={18} /> Duration: 2 Years</li>
                                <li><BookOpen size={18} /> Focus: Specialized Care, Nursing Management</li>
                            </ul>
                            <Link to="/admissions" className="btn btn-primary w-full text-center">Apply Now</Link>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Courses;
