import React from 'react';
import { Home, Desktop, Beaker, LibraryBig, Bus, Stethoscope } from 'lucide-react';

const Facilities = () => {
    return (
        <div className="page-wrapper animate-fade-in">
            <div className="page-header bg-light section">
                <div className="container text-center">
                    <h1 className="hero-title">World-Class <span className="text-secondary">Facilities</span></h1>
                    <p className="hero-description mx-auto">SMR Nursing Institute offers a vibrant campus life with modern infrastructure built for learning, research, and comfort.</p>
                </div>
            </div>

            <section className="section bg-light">
                <div className="container">
                    <div className="grid grid-2">

                        <div className="card highlight-card">
                            <div className="icon-wrapper"><Beaker size={32} /></div>
                            <h3>Advanced Nursing Labs</h3>
                            <p>Our simulation labs replicate actual hospital environments, equipped with smart mannequins and modern medical instruments for realistic practice before clinical postings.</p>
                        </div>

                        <div className="card highlight-card">
                            <div className="icon-wrapper"><LibraryBig size={32} /></div>
                            <h3>Digital Library</h3>
                            <p>A vast repository of medical journals, e-books, research papers, and reference books. The reading room provides a quiet environment for focused study.</p>
                        </div>

                        <div className="card highlight-card">
                            <div className="icon-wrapper"><Stethoscope size={32} /></div>
                            <h3>Parent Hospital Tie-ups</h3>
                            <p>Direct partnerships with multi-specialty hospitals allowing our students hands-on clinical exposure under the guidance of expert doctors and senior nurses.</p>
                        </div>

                        <div className="card highlight-card">
                            <div className="icon-wrapper"><Home size={32} /></div>
                            <h3>Secure Hostels</h3>
                            <p>Separate hostels for boys and girls within the secure campus premises. Well-furnished rooms, Wi-Fi, 24/7 security, and hygienic dining mess facilities are guaranteed.</p>
                        </div>

                        <div className="card highlight-card">
                            <div className="icon-wrapper"><Desktop size={32} /></div>
                            <h3>Smart Classrooms</h3>
                            <p>Air-conditioned classrooms equipped with audio-visual aids, smart boards, and an internet connection to facilitate interactive learning and presentations.</p>
                        </div>

                        <div className="card highlight-card">
                            <div className="icon-wrapper"><Bus size={32} /></div>
                            <h3>Transportation</h3>
                            <p>A fleet of modern buses provides safe commuting for students attending practical clinical training at partner hospitals or daily commutes from nearby city nodes.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Facilities;
