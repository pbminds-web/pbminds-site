import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight, ExternalLink } from "lucide-react";

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

const studies = [
  {
    id: 1,
    title: "Connected Vehicle Analytics Platform",
    summary: "Real-time vehicle telemetry and predictive maintenance system.",
    description: "Built an IoT-enabled platform that collects and analyzes real-time data from connected vehicles, enabling predictive maintenance and fleet optimization through advanced analytics and machine learning.",
    results: [
      "85% reduction in unexpected breakdowns",
      "40% improvement in fuel efficiency",
      "60% decrease in maintenance costs"
    ],
    tags: ["IoT", "Analytics", "ML"],
    image: "/images/case-studies/connected-vehicle-analytics.png",
    alt: "Connected vehicle analytics dashboard"
  },
  {
    id: 2,
    title: "AI-Powered Health Monitoring",
    summary: "Intelligent health monitoring system with predictive analytics.",
    description: "Developed an AI-driven health monitoring platform that continuously analyzes patient vitals and medical data to provide early warning alerts and personalized health recommendations.",
    results: [
      "92% accuracy in health risk prediction",
      "50% reduction in emergency incidents",
      "Enhanced patient engagement by 75%"
    ],
    tags: ["AI", "Healthcare", "Analytics"],
    image: "/images/case-studies/ai-health-monitoring.png",
    alt: "AI health monitoring dashboard"
  },
  {
    id: 3,
    title: "E-commerce Platform Migration",
    summary: "Scalable microservices architecture with improved performance.",
    description: "Migrated monolithic e-commerce platform to modern microservices architecture with enhanced scalability and performance.",
    results: [
      "300% improvement in page load times",
      "99.99% platform availability",
      "50% reduction in hosting costs"
    ],
    tags: ["Microservices", "AWS", "React"],
    image: "/images/case-studies/ecommerce-project.png",
    alt: "Modern e-commerce platform interface"
  },
  {
    id: 4,
    title: "Autonomous Fleet Management System",
    summary: "Intelligent fleet orchestration with real-time route optimization.",
    description: "Created a comprehensive autonomous fleet management solution that handles vehicle dispatching, route optimization, and real-time monitoring for self-driving vehicle operations.",
    results: [
      "45% improvement in delivery efficiency",
      "30% reduction in operational costs",
      "99.8% system reliability"
    ],
    tags: ["Autonomous", "Fleet", "Optimization"],
    image: "/images/case-studies/autonomous-fleet-management.png",
    alt: "Autonomous fleet management interface"
  }
];

export default function CaseStudies() {
  const [selectedStudy, setSelectedStudy] = useState(null);

  return (
    <section className="py-16 bg-slate-50/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-bl from-brand-50/20 to-accent-50/20 opacity-50" />
      <motion.div 
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div variants={cardVariants}>
          <h3 className="text-3xl font-bold text-slate-900">Case Studies</h3>
          <p className="mt-2 text-muted max-w-2xl">
            Explore how we've helped organizations transform their operations and achieve measurable results.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {studies.map((study, index) => (
            <motion.div
              key={study.id}
              variants={cardVariants}
              className="group relative"
            >
              <motion.div
                className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-brand-100 transition-all duration-300 relative overflow-hidden"
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                onClick={() => setSelectedStudy(study.id === selectedStudy ? null : study.id)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-50 to-accent-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  {/* Image Section */}
                  <div className="mb-4 rounded-xl overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.alt}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    {/* Fallback gradient */}
                    <div 
                      className="w-full h-48 bg-gradient-to-br from-brand-100 to-accent-100 flex items-center justify-center hidden"
                      style={{ display: 'none' }}
                    >
                      <span className="text-brand-600 font-medium">{study.title}</span>
                    </div>
                  </div>

                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-lg text-slate-900 group-hover:text-brand-700 transition-colors duration-300">
                        {study.title}
                      </h4>
                      <p className="mt-2 text-sm text-muted">
                        {study.summary}
                      </p>
                    </div>
                    <motion.div
                      animate={{ rotate: selectedStudy === study.id ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-brand-600" />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {selectedStudy === study.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4"
                      >
                        <p className="text-sm text-slate-600 mb-4">
                          {study.description}
                        </p>
                        
                        <div className="space-y-2">
                          {study.results.map((result, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-center gap-2"
                            >
                              <ArrowRight className="w-4 h-4 text-brand-600" />
                              <span className="text-sm text-slate-700">{result}</span>
                            </motion.div>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-2 mt-4">
                          {study.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 text-xs rounded-full bg-brand-50 text-brand-700"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <motion.a
                          href="#"
                          className="inline-flex items-center gap-2 mt-4 text-sm text-brand-600 hover:text-brand-700 transition-colors duration-300"
                          whileHover={{ x: 5 }}
                        >
                          Read full case study
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}