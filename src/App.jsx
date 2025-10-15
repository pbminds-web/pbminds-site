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
  const aboutRef = useRef(null);

  useEffect(() => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <>
      <div ref={aboutRef}>
        <About />
      </div>
      <Team />
      <Contact />
    </>
  );
}

function ServicesPage() {
  const servicesRef = useRef(null);

  useEffect(() => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <>
      <div ref={servicesRef}>
        <Services />
      </div>
      <Features />
      <Contact />
    </>
  );
}

function CaseStudiesPage() {
  const caseStudiesRef = useRef(null);

  useEffect(() => {
    if (caseStudiesRef.current) {
      caseStudiesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <>
      <div ref={caseStudiesRef}>
        <CaseStudies />
      </div>
      <Services />
      <Contact />
    </>
  );
}

function TeamPage() {
  const teamRef = useRef(null);

  useEffect(() => {
    if (teamRef.current) {
      teamRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <>
      <div ref={teamRef}>
        <Team />
      </div>
      <About />
      <Contact />
    </>
  );
}

function FeaturesPage() {
  const featuresRef = useRef(null);

  useEffect(() => {
    if (featuresRef.current) {
      featuresRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <>
      <div ref={featuresRef}>
        <Features />
      </div>
      <Services />
      <Contact />
    </>
  );
}

function CareersPage() {
  const careersRef = useRef(null);

  useEffect(() => {
    if (careersRef.current) {
      careersRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <>
      <div ref={careersRef}>
        <Career />
      </div>
      <About />
      <Team />
      <Contact />
    </>
  );
}

function WhatWeDoPage() {
  const whatWeDoRef = useRef(null);

  useEffect(() => {
    if (whatWeDoRef.current) {
      whatWeDoRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <>
      <div ref={whatWeDoRef}>
        <Services />
      </div>
      <Features />
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
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/what-we-do" element={<WhatWeDoPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
