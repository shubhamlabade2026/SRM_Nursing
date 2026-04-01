import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import ScrollToTop from './components/ScrollToTop';
import LeadPopup from './components/LeadPopup';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Booking from './pages/Booking';
import Team from './pages/Team';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

function App() {
  return (
    <div className="app-container">
      <ScrollToTop />
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/book" element={<Booking />} />
          <Route path="/team" element={<Team />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </main>
      <Footer />
      {/* Global WhatsApp Lead Generator */}
      <motion.a 
          href="https://wa.me/917498059801" target="_blank" rel="noopener noreferrer" 
          className="whatsapp-float pulse-animation glass-panel"
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1, type: "spring" }}
      >
          <MessageCircle size={32} color="#25D366" />
      </motion.a>
      {/* Automated Lead Generation Engine */}
      <LeadPopup />
    </div>
  );
}

export default App;
