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
  { id: 1, icon: <Code2 className="w-6 h-6" />, title: "Custom Software", text: "Greenfield builds, enterprise systems, microservices." },
  { id: 2, icon: <Cloud className="w-6 h-6" />, title: "Cloud & DevOps", text: "K8s, CI/CD, IaC, observability and cost control." },
  { id: 3, icon: <Cpu className="w-6 h-6" />, title: "AI & Data", text: "ML pipelines, RAG, and automation that augments teams." },
  { id: 4, icon: <ShieldCheck className="w-6 h-6" />, title: "Security", text: "Threat modeling, SAST/DAST and compliance." }
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
                y: -5, 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brand-100 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-50 to-accent-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              <div className="relative z-10">
                <motion.div 
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-50 text-brand-700 mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  {service.icon}
                </motion.div>
                <h4 className="font-semibold text-lg text-slate-900 group-hover:text-brand-700 transition-colors duration-300">
                  {service.title}
                </h4>
                <p className="mt-2 text-sm text-muted">
                  {service.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}