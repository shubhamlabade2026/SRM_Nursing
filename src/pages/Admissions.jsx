import React, { useState } from 'react';
import { AlertCircle, FileText, Banknote, Calendar } from 'lucide-react';

const Admissions = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");
        const formData = new FormData(event.target);

        formData.append("access_key", "1f156382-e9c0-4f0d-8d61-5419137549b4");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Application Submitted Successfully! We will contact you soon.");
                event.target.reset();
            } else {
                console.log("Error", data);
                setResult(data.message);
            }
        } catch (error) {
            console.error(error);
            setResult("An error occurred while submitting. Please try again.");
        }
    }

    return (
        <div className="page-wrapper animate-fade-in">
            <div className="page-header bg-light section">
                <div className="container text-center">
                    <h1 className="hero-title">Admissions <span className="text-secondary">2026</span></h1>
                    <p className="hero-description mx-auto">Start your journey towards a bright healthcare career with SMR Nursing Institute.</p>
                </div>
            </div>

            <section className="section pb-2">
                <div className="container">
                    <div className="grid grid-2">
                        <div>
                            <h2 className="mb-3">Admission Process</h2>
                            <p className="text-muted mb-4">Our admission process is transparent, merit-based, and designed to select students who exhibit a genuine passion for healthcare.</p>

                            <ul className="placement-points">
                                <li><AlertCircle color="var(--primary)" /> <strong>Step 1:</strong> Online Registration via our portal.</li>
                                <li><AlertCircle color="var(--primary)" /> <strong>Step 2:</strong> Submit academic records and ID proof.</li>
                                <li><AlertCircle color="var(--primary)" /> <strong>Step 3:</strong> Appear for SMR Entrance / State CET.</li>
                                <li><AlertCircle color="var(--primary)" /> <strong>Step 4:</strong> Personal Interview and Counseling.</li>
                                <li><AlertCircle color="var(--primary)" /> <strong>Step 5:</strong> Fee deposit to confirm the seat.</li>
                            </ul>
                        </div>

                        <div className="card highlight-card active">
                            <h3 className="mb-3">Apply Online</h3>
                            <form onSubmit={onSubmit}>
                                <div style={{ marginBottom: "1rem" }}>
                                    <label style={{ display: "block", marginBottom: "0.5rem" }}>Full Name</label>
                                    <input type="text" name="fullName" required placeholder="John Doe" style={{ width: "100%", padding: "0.75rem", borderRadius: "8px", border: "none", outline: "none", color: "#333" }} />
                                </div>
                                <div style={{ marginBottom: "1rem" }}>
                                    <label style={{ display: "block", marginBottom: "0.5rem" }}>Course of Interest</label>
                                    <select name="course" required style={{ width: "100%", padding: "0.75rem", borderRadius: "8px", border: "none", outline: "none", color: "#333", background: "white" }}>
                                        <option value="" disabled selected>Select a course</option>
                                        <option value="B.Sc Nursing">B.Sc Nursing</option>
                                        <option value="GNM">GNM</option>
                                        <option value="ANM">ANM</option>
                                        <option value="Post Basic B.Sc Nursing">Post Basic B.Sc Nursing</option>
                                    </select>
                                </div>
                                <div style={{ marginBottom: "1rem" }}>
                                    <label style={{ display: "block", marginBottom: "0.5rem" }}>Phone Number</label>
                                    <input type="tel" name="phone" required placeholder="+91 999999999" style={{ width: "100%", padding: "0.75rem", borderRadius: "8px", border: "none", outline: "none", color: "#333" }} />
                                </div>
                                <div style={{ marginBottom: "1rem" }}>
                                    <label style={{ display: "block", marginBottom: "0.5rem" }}>Email</label>
                                    <input type="email" name="email" required placeholder="john@example.com" style={{ width: "100%", padding: "0.75rem", borderRadius: "8px", border: "none", outline: "none", color: "#333" }} />
                                </div>
                                <button type="submit" className="btn btn-secondary w-full" style={{ background: "var(--secondary-light)", color: "var(--secondary)", marginTop: "1rem" }}>
                                    Submit Inquiry
                                </button>
                                <div style={{ marginTop: "1rem", textAlign: "center", fontSize: "0.9rem" }}>{result}</div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

            <section className="section bg-light">
                <div className="container">
                    <h2 className="text-center mb-5">Important Requirements</h2>

                    <div className="grid grid-3">
                        <div className="card text-center">
                            <div className="icon-wrapper"><FileText size={32} /></div>
                            <h3>Documents Required</h3>
                            <p>10th & 12th Marksheets, Transfer Certificate, Migration, Passport Size Photos, Aadhar Card, Medical Fitness Certificate.</p>
                        </div>
                        <div className="card text-center">
                            <div className="icon-wrapper"><Banknote size={32} /></div>
                            <h3>Fees & Scholarships</h3>
                            <p>We provide merit-based scholarships up to 50% on tuition fees for students securing above 85% in state board exams.</p>
                        </div>
                        <div className="card text-center">
                            <div className="icon-wrapper"><Calendar size={32} /></div>
                            <h3>Important Dates</h3>
                            <p>Applications Open: Jan 15, 2026<br />Entrance Exam: April 10, 2026<br />Last Date: May 15, 2026</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Admissions;
