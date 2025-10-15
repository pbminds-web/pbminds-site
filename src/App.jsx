import React, { useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Features from "./components/Features";
import CaseStudies from "./components/CaseStudies";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Career from "./components/Career";
import ScrollToTop from "./components/ScrollToTop";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Features />
      <CaseStudies />
      <Team />
      <Contact />
    </>
  );
}

function AboutPage() {
  return (
    <>
      <About />
      <Team />
      <Contact />
    </>
  );
}

function ServicesPage() {
  return (
    <>
      <Services />
      <Features />
      <Contact />
    </>
  );
}

function CaseStudiesPage() {
  return (
    <>
      <CaseStudies />
      <Contact />
    </>
  );
}

function ContactPage() {
  const contactRef = useRef(null);

  useEffect(() => {
    // Scroll to contact section after page loads
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <>
      <About />
      <Team />
      <div ref={contactRef}>
        <Contact />
      </div>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/features" element={<Features />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/team" element={<Team />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/careers" element={<Career />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
