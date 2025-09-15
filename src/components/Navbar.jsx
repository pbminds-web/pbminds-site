import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/60 backdrop-blur border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="text-xl font-bold text-brand-700">PBMINDS<span className="text-accent-400">.</span></NavLink>
          <nav className="hidden md:flex gap-6">
            <NavLink to="/" className={({isActive})=> isActive ? "font-semibold" : "text-muted"}>Home</NavLink>
            <NavLink to="/services" className={({isActive})=> isActive ? "font-semibold" : "text-muted"}>Services</NavLink>
            <NavLink to="/case-studies" className={({isActive})=> isActive ? "font-semibold" : "text-muted"}>Case Studies</NavLink>
            <NavLink to="/about" className={({isActive})=> isActive ? "font-semibold" : "text-muted"}>About</NavLink>
            <NavLink to="/contact" className={({isActive})=> isActive ? "font-semibold" : "text-muted"}>Contact</NavLink>
          </nav>
          <div className="hidden md:flex">
            <NavLink to="/contact" className="inline-block bg-brand-500 hover:bg-brand-700 text-white px-4 py-2 rounded-2xl text-sm">Talk to Sales</NavLink>
          </div>
          <div className="md:hidden">
            {/* simple mobile fallback: link to contact */}
            <NavLink to="/contact" className="text-brand-500">Contact</NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}
