import React from 'react';
import SEO from '../components/SEO';
import { FileText, CheckCircle } from 'lucide-react';

const Terms = () => {
    return (
        <div className="page-wrapper animate-fade-in">
            <SEO 
                title="Terms of Service | SMR Nursing Bureau"
                description="Terms and conditions for using SMR Nursing Bureau services."
            />
            
            <div className="page-header bg-light section">
                <div className="container text-center">
                    <div className="icon-wrapper mx-auto mb-3 glass-element avatar-wrapper" style={{ marginTop: '2rem' }}>
                        <FileText size={40} className="text-primary" />
                    </div>
                    <h1 className="hero-title">Terms of <span className="text-primary">Service</span></h1>
                    <p className="hero-description mx-auto">Please read these terms carefully before using our services.</p>
                </div>
            </div>

            <section className="section bg-white">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="glass-panel p-5" style={{ borderRadius: '24px' }}>
                        <p className="text-muted mb-5">
                            By accessing or using the services provided by SMR Nursing Bureau, you agree to be bound by these terms. If you disagree with any part of the terms, then you may not access the service.
                        </p>

                        <h3 className="mb-3">1. Service Agreement</h3>
                        <ul className="placement-points mb-4 text-muted">
                            <li className="d-flex align-items-start mb-2"><span className="text-primary mr-2">✓</span> We provide skilled nursing, caretaker, and babysitting personnel according to the requirements shared by the client.</li>
                            <li className="d-flex align-items-start mb-2"><span className="text-primary mr-2">✓</span> The assignment of personnel is subject to availability and the specific medical or care needs of the patient.</li>
                            <li className="d-flex align-items-start mb-2"><span className="text-primary mr-2">✓</span> A formal physical or digital assessment might be required before specialized ICU setups or post-surgical care.</li>
                        </ul>

                        <h3 className="mb-3">2. Payments and Billing</h3>
                        <ul className="placement-points mb-4 text-muted">
                            <li className="d-flex align-items-start mb-2"><span className="text-primary mr-2">✓</span> Advance payment or deposit may be required before the commencement of continuous services (like 24/7 care).</li>
                            <li className="d-flex align-items-start mb-2"><span className="text-primary mr-2">✓</span> Payments must be made directly to SMR Nursing Bureau accounts only. Do not hand over cash to the caretaker directly unless explicitly authorized by the management.</li>
                            <li className="d-flex align-items-start mb-2"><span className="text-primary mr-2">✓</span> Any extra hours worked by the staff beyond the agreed shift will be billed accordingly at standard overtime rates.</li>
                        </ul>

                        <h3 className="mb-3">3. Replacement Policy</h3>
                        <ul className="placement-points mb-4 text-muted">
                            <li className="d-flex align-items-start mb-2"><span className="text-primary mr-2">✓</span> If the client is unsatisfied with the assigned staff member, SMR Nursing Bureau will provide a suitable replacement within 24-48 hours.</li>
                            <li className="d-flex align-items-start mb-2"><span className="text-primary mr-2">✓</span> Sudden leaves or absentees will be substituted by an alternative caretaker as swiftly as possible to ensure uninterrupted care.</li>
                        </ul>

                        <h3 className="mb-3">4. Disclaimer</h3>
                        <p className="text-muted mb-4">
                            While our staff is trained to follow medical protocols strictly, SMR Nursing Bureau acts as an agency providing professional caregivers. Any critical medical decisions should be taken by the patient's primary consulting physician or doctor. SMR Nursing Bureau cannot be held legally liable for unforeseen medical complications.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Terms;
