import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Twitter, Github } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const socialLinks = [
  { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/company/pbminds" },
  { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com/pbminds" },
  { icon: <Github className="w-5 h-5" />, href: "https://github.com/pbminds" }
];

const quickLinks = [
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "Careers", href: "#careers" },
  { name: "Contact", href: "#contact" }
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/20 to-slate-900 opacity-50" />
      <motion.div 
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.div 
              className="text-2xl font-bold bg-gradient-to-r from-brand-400 to-accent-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              PBMINDS
            </motion.div>
            <p className="text-slate-400">
              Enterprise engineering & cloud platforms
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-brand-400 transition-colors duration-200"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-slate-400 hover:text-brand-400 transition-colors duration-200 block"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="space-y-3">
              <motion.li>
                <motion.a
                  href="mailto:contact@pbmindstech.com"
                  className="flex items-center gap-2 text-slate-400 hover:text-brand-400 transition-colors duration-200"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="w-4 h-4" />
                  <span>contact@pbmindstech.com</span>
                </motion.a>
              </motion.li>
              <motion.li>
                <motion.a
                  href="tel:+917619304857"
                  className="flex items-center gap-2 text-slate-400 hover:text-brand-400 transition-colors duration-200"
                  whileHover={{ x: 5 }}
                >
                  <Phone className="w-4 h-4" />
                  <span>+91 76193 04857</span>
                </motion.a>
              </motion.li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-slate-400">
              Subscribe to our newsletter for updates and insights.
            </p>
            <form className="flex gap-2">
              <motion.input
                type="email"
                placeholder="Your email"
                className="bg-slate-800 text-white rounded-lg px-4 py-2 flex-grow focus:ring-2 focus:ring-brand-400 focus:outline-none"
                whileFocus={{ scale: 1.02 }}
              />
              <motion.button
                type="submit"
                className="bg-brand-500 text-white px-4 py-2 rounded-lg hover:bg-brand-600 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div 
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-slate-800 text-slate-400 text-sm"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <div>© {new Date().getFullYear()} PBMINDS INDIA PRIVATE LIMITED. All rights reserved.</div>
              <div className="mt-1">CIN: U62020KA2021PTC155428</div>
            </div>
            <div className="flex gap-6">
              <motion.a 
                href="/privacy"
                className="hover:text-brand-400 transition-colors duration-200"
                whileHover={{ x: 2 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                href="/terms"
                className="hover:text-brand-400 transition-colors duration-200"
                whileHover={{ x: 2 }}
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}