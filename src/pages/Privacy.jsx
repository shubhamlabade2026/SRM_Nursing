import React from 'react';
import SEO from '../components/SEO';
import { Shield, FileText } from 'lucide-react';

const Privacy = () => {
    return (
        <div className="page-wrapper animate-fade-in">
            <SEO 
                title="Privacy Policy | SMR Nursing Bureau"
                description="Privacy policy and data protection guidelines for SMR Nursing Bureau."
            />
            
            <div className="page-header bg-light section">
                <div className="container text-center">
                    <div className="icon-wrapper mx-auto mb-3 glass-element avatar-wrapper" style={{ marginTop: '2rem' }}>
                        <Shield size={40} className="text-secondary" />
                    </div>
                    <h1 className="hero-title">Privacy <span className="text-secondary">Policy</span></h1>
                    <p className="hero-description mx-auto">Learn how we handle your data and protect your privacy.</p>
                </div>
            </div>

            <section className="section bg-white">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="glass-panel p-5" style={{ borderRadius: '24px' }}>
                        <h3 className="mb-3 text-primary">1. Information We Collect</h3>
                        <p className="text-muted mb-4">
                            We collect personal information that you provide securely to us when you register on our website, express an interest in obtaining information about us or our services, or otherwise contact us. This may include your name, phone number, email address, and home address for the purpose of scheduling caretaker services.
                        </p>

                        <h3 className="mb-3 text-primary">2. How We Use Your Information</h3>
                        <p className="text-muted mb-4">
                            We use personal information collected via our website for a variety of business purposes, primarily to facilitate the booking of healthcare professionals, to communicate with you regarding your service requests, and to improve our website and service offerings. We will never sell your personal information to third parties.
                        </p>

                        <h3 className="mb-3 text-primary">3. Data Security</h3>
                        <p className="text-muted mb-4">
                            We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
                        </p>

                        <h3 className="mb-3 text-primary">4. Patient Confidentiality</h3>
                        <p className="text-muted mb-4">
                            SMR Nursing Bureau strictly complies with patient confidentiality guidelines. All medical records, patient history, and sensitive healthcare data are kept strictly confidential and shared only with the assigned medical staff to ensure proper care. All our staff members have signed non-disclosure agreements.
                        </p>

                        <h3 className="mb-3 text-primary">5. Contact Us</h3>
                        <p className="text-muted mb-4">
                            If you have questions or comments about this privacy policy, you may email us at moeensr9101@gmail.com or by post to our office address in Pune, Maharashtra.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Privacy;
