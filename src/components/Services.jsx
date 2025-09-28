import React from "react";
import { motion } from "framer-motion";
import { Code2, Cloud, Cpu, ShieldCheck } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const services = [
  { 
    id: 1, 
    icon: <Code2 className="w-6 h-6" />, 
    title: "Custom Software", 
    text: "Greenfield builds, enterprise systems, microservices.",
    image: "/images/services/web-development.jpg",
    alt: "Web development and custom software solutions"
  },
  { 
    id: 2, 
    icon: <Cloud className="w-6 h-6" />, 
    title: "Cloud & DevOps", 
    text: "K8s, CI/CD, IaC, observability and cost control.",
    image: "/images/services/cloud-solutions.jpg",
    alt: "Cloud infrastructure and DevOps solutions"
  },
  { 
    id: 3, 
    icon: <Cpu className="w-6 h-6" />, 
    title: "AI & Data", 
    text: "ML pipelines, RAG, and automation that augments teams.",
    image: "/images/services/ai-ml.jpg",
    alt: "AI and machine learning solutions"
  },
  { 
    id: 4, 
    icon: <ShieldCheck className="w-6 h-6" />, 
    title: "Security", 
    text: "Threat modeling, SAST/DAST and compliance.",
    image: "/images/services/security.jpg",
    alt: "Cybersecurity and compliance solutions"
  }
];

export default function Services() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50/30 to-accent-50/30 opacity-50" />
      <motion.div 
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h3 
          className="text-3xl font-bold text-slate-900"
          variants={cardVariants}
        >
          What we do
        </motion.h3>
        <motion.p 
          className="mt-2 text-muted max-w-2xl"
          variants={cardVariants}
        >
          End-to-end engineering and platform work across domains.
        </motion.p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-brand-200 relative"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback to gradient background if image doesn't exist
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                {/* Fallback gradient background */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-brand-100 to-accent-100 hidden"
                  style={{ display: 'none' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Content Section */}
              <div className="p-6 relative">
                <div className="flex items-center gap-3 mb-3">
                  <motion.div 
                    className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand-50 text-brand-700"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    {service.icon}
                  </motion.div>
                  <h4 className="font-semibold text-lg text-slate-900 group-hover:text-brand-700 transition-colors duration-300">
                    {service.title}
                  </h4>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  {service.text}
                </p>
                
                {/* Learn More Button */}
                <motion.button
                  className="mt-4 text-brand-600 hover:text-brand-700 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  Learn More →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}