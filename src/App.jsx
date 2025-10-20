import React, { useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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

// Breadcrumb Schema Component
function BreadcrumbSchema({ items }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://pbmindstech.com${item.url}`
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

function Home() {
  return (
    <>
      <Helmet>
        <title>PBMinds - Custom Software Development, Cloud Solutions & AI Services</title>
        <meta name="description" content="PBMinds provides expert software development, cloud infrastructure, DevOps, AI/ML solutions, and cybersecurity services. Transform your business with cutting-edge technology." />
        <link rel="canonical" href="https://pbmindstech.com/" />
      </Helmet>
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" }
      ]} />
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
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (aboutRef.current) {
        aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>About Us - PBMinds Technology Solutions</title>
        <meta name="description" content="Learn about PBMinds - a leading software development company delivering innovative solutions in cloud computing, AI/ML, and digital transformation since 2020." />
        <link rel="canonical" href="https://pbmindstech.com/about" />
      </Helmet>
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "About Us", url: "/about" }
      ]} />
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
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (servicesRef.current) {
        servicesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Our Services - Software Development & Cloud Solutions | PBMinds</title>
        <meta name="description" content="Explore PBMinds services: Custom Software Development, Web & Mobile Apps, Cloud Infrastructure (AWS, Azure, GCP), DevOps, AI/ML, and Cybersecurity solutions." />
        <link rel="canonical" href="https://pbmindstech.com/services" />
      </Helmet>
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" }
      ]} />
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
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (caseStudiesRef.current) {
        caseStudiesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Case Studies - Success Stories | PBMinds</title>
        <meta name="description" content="Discover how PBMinds helped businesses transform with innovative software solutions, cloud migration, AI implementation, and digital transformation projects." />
        <link rel="canonical" href="https://pbmindstech.com/case-studies" />
      </Helmet>
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Case Studies", url: "/case-studies" }
      ]} />
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
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (teamRef.current) {
        teamRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Our Team - Meet the PBMinds Experts</title>
        <meta name="description" content="Meet the talented team behind PBMinds - experienced developers, cloud architects, and technology leaders driving innovation and delivering excellence." />
        <link rel="canonical" href="https://pbmindstech.com/team" />
      </Helmet>
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Our Team", url: "/team" }
      ]} />
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
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (featuresRef.current) {
        featuresRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Features & Capabilities - PBMinds Technology Solutions</title>
        <meta name="description" content="Explore PBMinds' key features: agile development, 24/7 support, scalable architecture, security-first approach, and cutting-edge technology stack." />
        <link rel="canonical" href="https://pbmindstech.com/features" />
      </Helmet>
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Features", url: "/features" }
      ]} />
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
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (careersRef.current) {
        careersRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Careers - Join the PBMinds Team</title>
        <meta name="description" content="Join PBMinds and work on exciting projects with cutting-edge technologies. We're hiring talented developers, cloud engineers, and tech innovators." />
        <link rel="canonical" href="https://pbmindstech.com/careers" />
      </Helmet>
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Careers", url: "/careers" }
      ]} />
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
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (whatWeDoRef.current) {
        whatWeDoRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>What We Do - Comprehensive Technology Solutions | PBMinds</title>
        <meta name="description" content="PBMinds delivers end-to-end technology solutions: software development, cloud services, AI/ML implementation, DevOps automation, and digital transformation." />
        <link rel="canonical" href="https://pbmindstech.com/what-we-do" />
      </Helmet>
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "What We Do", url: "/what-we-do" }
      ]} />
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
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (contactRef.current) {
        contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Contact Us - Get in Touch with PBMinds</title>
        <meta name="description" content="Contact PBMinds for custom software development, cloud solutions, and technology consulting. Reach us at contact@pbmindstech.com or call us today." />
        <link rel="canonical" href="https://pbmindstech.com/contact" />
      </Helmet>
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Contact Us", url: "/contact" }
      ]} />
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
