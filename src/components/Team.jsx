import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const memberVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5
    }
  }
};

const socialVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3
    }
  }
};

const people = [
  { 
    id: 1,
    name: "Mangala",
    title: "CEO & Founder",
    image: "/images/team/ceo-placeholder.jpg",
    bio: "Visionary entrepreneur with 15+ years of experience driving innovation in software development, cloud architecture, and digital transformation. Leading PBMinds with a passion for excellence and client success.",
    social: {
      linkedin: "https://linkedin.com/in/mangala",
      twitter: "https://twitter.com/mangala",
      github: "https://github.com/mangala"
    }
  },
  { 
    id: 2,
    name: "John",
    title: "HR Head",
    image: "/images/team/hr-placeholder.jpg",
    bio: "Strategic HR professional dedicated to building world-class teams, fostering inclusive culture, and developing talent. Expertise in recruitment, employee engagement, and organizational development.",
    social: {
      linkedin: "https://linkedin.com/in/mangala-hr",
      twitter: "https://twitter.com/mangala_hr"
    }
  },
  { 
    id: 3,
    name: "Prashanth",
    title: "Technical Lead",
    image: "/images/team/lead-dev-placeholder.jpg",
    bio: "Full-stack architect with deep expertise in microservices, cloud infrastructure, and DevOps. Leading technical excellence through innovative solutions, mentoring developers, and ensuring scalable system design.",
    social: {
      linkedin: "https://linkedin.com/in/tech-lead",
      github: "https://github.com/tech-lead"
    }
  },
  { 
    id: 4,
    name: "Amaresh",
    title: "Adviser",
    image: "/images/team/designer-placeholder.jpg",
    bio: "Seasoned technology advisor with extensive industry experience. Provides strategic guidance on business growth, technology trends, and market expansion. Instrumental in shaping PBMinds' vision and direction.",
    social: {
      linkedin: "https://linkedin.com/in/design-lead",
      twitter: "https://twitter.com/design_lead"
    }
  }
];

export default function Team() {
  return (
    <section className="py-16 bg-slate-50/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-50/20 to-accent-50/20 opacity-50" />
      <motion.div 
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h3 
          className="text-3xl font-bold text-slate-900 text-center"
          variants={memberVariants}
        >
          Leadership
        </motion.h3>
        <motion.p
          className="mt-2 text-muted text-center max-w-2xl mx-auto"
          variants={memberVariants}
        >
          Meet the team behind PB Minds' innovation and success.
        </motion.p>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {people.map((person, index) => (
            <motion.div 
              key={person.id}
              variants={memberVariants}
              whileHover={{ y: -5 }}
              className="text-center group max-w-sm"
            >
              <div className="relative">
                <div className="h-48 w-48 bg-gradient-to-br from-brand-100 to-accent-100 rounded-2xl mx-auto mb-6 overflow-hidden">
                  {person.image && (
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <motion.div
                variants={socialVariants}
                className="mb-4"
              >
                <h4 className="text-xl font-semibold text-slate-900 group-hover:text-brand-700 transition-colors duration-300">
                  {person.name}
                </h4>
                <p className="text-sm text-muted mt-1">
                  {person.title}
                </p>
              </motion.div>
              {person.social && (
                <motion.div 
                  className="flex items-center justify-center gap-4 mt-4"
                  variants={socialVariants}
                >
                  {person.social.linkedin && (
                    <a
                      href={person.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-brand-600 transition-colors duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {person.social.twitter && (
                    <a
                      href={person.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-brand-600 transition-colors duration-300"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                  {person.social.github && (
                    <a
                      href={person.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-brand-600 transition-colors duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}