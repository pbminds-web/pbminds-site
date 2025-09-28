import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

export default function About() {
  return (
    <section id="about" className="bg-gradient-to-br from-white to-brand-50/30 py-20">
      <motion.div 
        className="container mx-auto px-6 md:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About PBMINDS</h2>
            <p className="text-lg text-gray-600 mb-6">
              At <span className="font-semibold text-brand-600">PBMINDS</span>, 
              we are passionate about crafting innovative software solutions 
              that empower businesses to grow, adapt, and succeed in the 
              digital age.
            </p>
            <p className="text-gray-600">
              With a team of experienced developers, designers, and strategists, 
              we transform complex business challenges into elegant, scalable solutions 
              that drive real results.
            </p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/images/about/company-office.jpg" 
                alt="PBMINDS office and team"
                className="w-full h-80 object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              {/* Fallback gradient */}
              <div 
                className="w-full h-80 bg-gradient-to-br from-brand-100 to-accent-100 flex items-center justify-center hidden"
                style={{ display: 'none' }}
              >
                <span className="text-brand-600 font-semibold">PBMINDS Office</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              🚀 Our Mission
            </h3>
            <p className="text-gray-600">
              To deliver high-quality, scalable, and secure software products 
              that solve real-world challenges for businesses across industries.
            </p>
          </div>

          <div className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              🌍 Our Vision
            </h3>
            <p className="text-gray-600">
              To be recognized globally as a trusted technology partner 
              driving innovation and business transformation.
            </p>
          </div>

          <div className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              💡 Our Values
            </h3>
            <p className="text-gray-600">
              Innovation, Integrity, and Excellence are at the heart of 
              everything we build, ensuring long-term value for our clients.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
