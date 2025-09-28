import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.98]);

  return (
    <motion.section
      style={{ opacity, scale }}
      className="relative bg-gradient-to-b from-gray-900 to-brand-900 bg-cover bg-center text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-shine bg-[length:200%_100%] animate-shine opacity-5"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.04, 0.62, 0.23, 0.98]
              }}
              className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-white via-white/90 to-brand-200 bg-clip-text text-transparent"
            >
              Build digital products & platforms<br className="hidden sm:block" /> that scale with confidence
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg text-white/80 max-w-xl"
            >
              End-to-end engineering, cloud platforms, and enterprise integrations. 
              We combine deep domain experience with modern engineering practices.
            </motion.p>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 flex gap-3"
            >
              <motion.a
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-500 to-accent-500 hover:from-brand-600 hover:to-accent-600 text-white px-5 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Start a project <ArrowRight className="w-4 h-4 animate-bounce-subtle" />
              </motion.a>
              <motion.a
                href="/services"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 px-5 py-3 rounded-2xl text-white/90 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Our services
              </motion.a>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-6 flex gap-3 text-xs"
            >
              <motion.span
                whileHover={{ scale: 1.1 }}
                className="bg-white/10 hover:bg-white/20 px-3 py-1 rounded transition-colors duration-300"
              >
                ISO 9001
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.1 }}
                className="bg-white/10 hover:bg-white/20 px-3 py-1 rounded transition-colors duration-300"
              >
                40+ Projects
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.1 }}
                className="bg-white/10 hover:bg-white/20 px-3 py-1 rounded transition-colors duration-300"
              >
                2+ Countries
              </motion.span>
            </motion.div>
          </div>

          <motion.div
            className="hidden md:block"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.div
              className="rounded-xl overflow-hidden shadow-2xl border border-white/10"
              whileHover={{ scale: 1.02, rotateZ: 1 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/images/hero-illustration-new.svg"
                alt="illustration"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}