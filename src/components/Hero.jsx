import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-company-theme bg-cover bg-center text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1 initial={{y:10,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.6}} className="text-4xl md:text-5xl font-extrabold leading-tight">
              Build digital products & platforms<br className="hidden sm:block"/> that scale with confidence
            </motion.h1>
            <p className="mt-6 text-lg text-muted max-w-xl">
              End-to-end engineering, cloud platforms, and enterprise integrations. We combine deep domain experience with modern engineering practices.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="/contact" className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-700 text-white px-5 py-3 rounded-2xl shadow">
                Start a project <ArrowRight className="w-4 h-4"/>
              </a>
              <a href="/services" className="inline-flex items-center gap-2 border border-white/20 px-5 py-3 rounded-2xl text-white/90">Our services</a>
            </div>
            <div className="mt-6 flex gap-3 text-xs">
              <span className="bg-white/10 px-3 py-1 rounded">ISO 9001</span>
              <span className="bg-white/10 px-3 py-1 rounded">40+ Projects</span>
              <span className="bg-white/10 px-3 py-1 rounded">2+ Countries</span>
            </div>
          </div>

          <div className="hidden md:block">
            {/* optional illustration in public/images/hero-illustration.png */}
            <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <img src="/images/hero-illustration.png" alt="illustration" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
