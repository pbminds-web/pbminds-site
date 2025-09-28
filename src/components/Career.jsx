import React from 'react';
import { motion } from 'framer-motion';

const jobOpenings = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    type: "Full-time",
    location: "Hybrid",
    experience: "3-5 years",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    description: "Join us in creating beautiful, responsive web applications using modern technologies."
  },
  {
    id: 2,
    title: "Backend Developer",
    type: "Full-time",
    location: "Remote",
    experience: "2-4 years",
    skills: ["Node.js", "Express", "MongoDB", "AWS"],
    description: "Build scalable backend services and APIs that power our applications."
  },
  {
    id: 3,
    title: "DevOps Engineer",
    type: "Full-time",
    location: "Hybrid",
    experience: "3+ years",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    description: "Manage our cloud infrastructure and implement modern DevOps practices."
  },
  {
    id: 4,
    title: "UI/UX Designer",
    type: "Full-time",
    location: "Remote",
    experience: "2+ years",
    skills: ["Figma", "User Research", "Design Systems", "Prototyping"],
    description: "Create intuitive and engaging user experiences for our products."
  }
];

export default function Career() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-brand-600 to-accent-500 text-white py-20">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,currentColor_10px,currentColor_11px)] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Join Our Team
          </motion.h1>
          <motion.p 
            className="text-xl text-white/90 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Help us build the future of software development with cutting-edge technology and innovative solutions.
          </motion.p>
        </div>
      </div>

      {/* Job Listings Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Current Openings
          </motion.h2>
          <div className="grid gap-6 md:grid-cols-2">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-brand-200 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-sm">
                    {job.type}
                  </span>
                  <span className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm">
                    {job.location}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {job.experience}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <motion.button 
                  className="w-full py-2 px-4 bg-brand-600 hover:bg-brand-700 text-white rounded-lg transition-colors duration-300"
                  onClick={() => window.location.href = "mailto:careers@pbmindstech.com"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Apply Now
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Why Join PBMINDS?
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                title: "Innovation First",
                description: "Work with cutting-edge technologies and shape the future of software development."
              },
              {
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Work-Life Balance",
                description: "Flexible schedules and remote options to help you maintain a healthy work-life balance."
              },
              {
                icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
                title: "Growth & Learning",
                description: "Continuous learning opportunities and career development support."
              }
            ].map((item, index) => (
              <motion.div 
                key={item.title}
                className="text-center p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-brand-100 text-brand-600 rounded-full"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}