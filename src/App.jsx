import React from "react";
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

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
			<Route path="/" element={<Home />} />
			<Route path="/services" element={<Services />} />
			<Route path="/features" element={<Features />} />
			<Route path="/case-studies" element={<CaseStudies />} />
			<Route path="/team" element={<Team />} />
			<Route path="/about" element={<About />} />
			<Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
