import React, { useState } from 'react';
import { Calendar, Stethoscope, User, MapPin } from 'lucide-react';

const Booking = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending request...");
        const formData = new FormData(event.target);

        // Retaining the user's previously provided Web3Forms API Key
        formData.append("access_key", "1f156382-e9c0-4f0d-8d61-5419137549b4");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Booking Request Received! Our coordinator will call you within 15 minutes to confirm the caretaker details.");
                event.target.reset();
            } else {
                console.error("Error", data);
                setResult(data.message);
            }
        } catch (error) {
            console.error(error);
            setResult("An error occurred. Please try calling us directly on our helpline.");
        }
    };

    return (
        <div className="page-wrapper animate-fade-in">
            <div className="page-header bg-light section">
                <div className="container text-center">
                    <h1 className="hero-title">Hire a <span className="text-secondary">Professional Caretaker</span></h1>
                    <p className="hero-description mx-auto">Fill out the quick request form below. Our coordination team will instantly match you with the perfect medical professional for your needs.</p>
                </div>
            </div>

            <section className="section pb-2">
                <div className="container">
                    <div className="grid grid-2">
                        <div>
                            <h2 className="mb-3">Booking Process</h2>
                            <p className="text-muted mb-4">We maintain a strict and highly optimized protocol to ensure seamless service delivery during emergencies or planned discharges.</p>

                            <ul className="placement-points">
                                <li><Calendar color="var(--primary)" /> <strong>Step 1: Patient Assessment:</strong> Tell us the medical history and requirements.</li>
                                <li><Stethoscope color="var(--primary)" /> <strong>Step 2: Staff Matching:</strong> We assign the most qualified nurse/caretaker.</li>
                                <li><User color="var(--primary)" /> <strong>Step 3: Deployment:</strong> The caretaker arrives at the scheduled location (Home or Hospital).</li>
                                <li><MapPin color="var(--primary)" /> <strong>Step 4: Supervision:</strong> We monitor the staff daily to ensure quality care.</li>
                            </ul>
                        </div>

                        <div className="card highlight-card active">
                            <h3 className="mb-3">Request Staff</h3>
                            <form onSubmit={onSubmit}>
                                <div style={{ marginBottom: "1rem" }}>
                                    <label style={{ display: "block", marginBottom: "0.5rem" }}>Patient/Client Name</label>
                                    <input type="text" name="patientName" required placeholder="John Doe" style={{ width: "100%", padding: "0.75rem", borderRadius: "8px", border: "none", outline: "none", color: "#333" }} />
                                </div>
                                <div style={{ marginBottom: "1rem" }}>
                                    <label style={{ display: "block", marginBottom: "0.5rem" }}>Service Required</label>
                                    <select name="serviceType" required style={{ width: "100%", padding: "0.75rem", borderRadius: "8px", border: "none", outline: "none", color: "#333", background: "white" }}>
                                        <option value="" disabled selected>Select service type</option>
                                        <option value="Home Nursing">Home Nursing Care</option>
                                        <option value="Hospital Caretaker">Hospital Caretaker</option>
                                        <option value="Elderly Care">Elderly Care / Babysitting</option>
                                        <option value="ICU Setup at Home">ICU Setup at Home</option>
                                        <option value="Post-Surgery Care">Post-Surgery Care</option>
                                    </select>
                                </div>
                                <div className="grid grid-2" style={{ gap: '1rem', marginBottom: '1rem' }}>
                                    <div>
                                        <label style={{ display: "block", marginBottom: "0.5rem" }}>Phone Number</label>
                                        <input type="tel" name="phone" required placeholder="+91 999999999" style={{ width: "100%", padding: "0.75rem", borderRadius: "8px", border: "none", outline: "none", color: "#333" }} />
                                    </div>
                                    <div>
                                        <label style={{ display: "block", marginBottom: "0.5rem" }}>Start Date</label>
                                        <input type="date" name="date" required style={{ width: "100%", padding: "0.75rem", borderRadius: "8px", border: "none", outline: "none", color: "#333" }} />
                                    </div>
                                </div>
                                <div style={{ marginBottom: "1rem" }}>
                                    <label style={{ display: "block", marginBottom: "0.5rem" }}>Hospital/Home Location Address</label>
                                    <textarea name="location" rows="3" required placeholder="Enter full address" style={{ width: "100%", padding: "0.75rem", borderRadius: "8px", border: "none", outline: "none", color: "#333", resize: "vertical" }}></textarea>
                                </div>

                                <button type="submit" className="btn btn-secondary w-full" style={{ background: "var(--secondary-light)", color: "var(--secondary)", marginTop: "1rem" }}>
                                    Submit Request
                                </button>
                                <div style={{ marginTop: "1rem", textAlign: "center", fontSize: "0.9rem", fontWeight: "bold" }}>{result}</div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Booking;
