import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/case-studies", label: "Case Studies" },
    { to: "/about", label: "About" },
    { to: "/careers", label: "Careers" },
    { to: "/contact", label: "Contact" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/60 backdrop-blur border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="text-xl font-bold text-brand-700">
            PBMINDS<span className="text-accent-400">.</span>
          </NavLink>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive ? "font-semibold text-brand-600" : "text-muted hover:text-brand-600 transition-colors"
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          
          {/* Desktop CTA Button */}
          <div className="hidden md:flex">
            <NavLink
              to="/contact"
              className="inline-block bg-brand-500 hover:bg-brand-700 text-white px-4 py-2 rounded-2xl text-sm transition-colors"
            >
              Talk to Sales
            </NavLink>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-brand-600 hover:text-brand-700 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <nav className="py-4 space-y-2 bg-white/90 backdrop-blur rounded-lg mt-2 border border-gray-100">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <NavLink
                      to={item.to}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        `block px-4 py-3 text-base transition-colors ${
                          isActive
                            ? "font-semibold text-brand-600 bg-brand-50"
                            : "text-gray-700 hover:text-brand-600 hover:bg-gray-50"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="px-4 pt-2"
                >
                  <NavLink
                    to="/contact"
                    onClick={closeMenu}
                    className="block w-full text-center bg-brand-500 hover:bg-brand-700 text-white px-4 py-3 rounded-2xl text-sm transition-colors"
                  >
                    Talk to Sales
                  </NavLink>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
