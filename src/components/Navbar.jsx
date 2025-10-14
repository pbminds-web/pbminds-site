import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Code, Cloud, Shield, Brain, Cog, Users, Briefcase, Award, FileText, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const handleMouseEnter = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  // Mega menu data structure
  const megaMenus = {
    services: {
      title: "Services",
      columns: [
        {
          title: "Development Services",
          items: [
            { icon: Code, label: "Custom Software Development", description: "Tailored solutions for your business", to: "/services#custom-software" },
            { icon: Cloud, label: "Web Application Development", description: "Modern, scalable web apps", to: "/services#web-apps" },
            { icon: Code, label: "Mobile App Development", description: "iOS and Android applications", to: "/services#mobile-apps" },
            { icon: Cog, label: "Microservices Architecture", description: "Scalable distributed systems", to: "/services#microservices" }
          ]
        },
        {
          title: "Cloud & Infrastructure",
          items: [
            { icon: Cloud, label: "Cloud Infrastructure", description: "AWS, Azure, GCP solutions", to: "/services#cloud" },
            { icon: Cog, label: "DevOps Solutions", description: "CI/CD and automation", to: "/services#devops" },
            { icon: Shield, label: "Kubernetes & Docker", description: "Container orchestration", to: "/services#kubernetes" },
            { icon: Cloud, label: "Cloud Migration", description: "Seamless cloud transitions", to: "/services#migration" }
          ]
        },
        {
          title: "AI & Security",
          items: [
            { icon: Brain, label: "AI & Machine Learning", description: "Intelligent automation", to: "/services#ai-ml" },
            { icon: Shield, label: "Cybersecurity", description: "Protect your business", to: "/services#security" },
            { icon: Brain, label: "Data Analytics", description: "Insights from your data", to: "/services#analytics" },
            { icon: Shield, label: "Security Audits", description: "Comprehensive assessments", to: "/services#audits" }
          ]
        }
      ]
    },
    company: {
      title: "Company",
      columns: [
        {
          title: "About Us",
          items: [
            { icon: Users, label: "About PBMinds", description: "Our story and mission", to: "/about" },
            { icon: Award, label: "Our Team", description: "Meet the experts", to: "/about#team" },
            { icon: Briefcase, label: "Careers", description: "Join our team", to: "/careers" },
            { icon: Award, label: "Case Studies", description: "Success stories", to: "/case-studies" }
          ]
        },
        {
          title: "Resources",
          items: [
            { icon: FileText, label: "Blog", description: "Tech insights and updates", to: "/blog" },
            { icon: FileText, label: "Documentation", description: "Technical resources", to: "/docs" },
            { icon: Phone, label: "Support", description: "Get help when you need it", to: "/support" },
            { icon: Phone, label: "Contact Us", description: "Let's talk", to: "/contact" }
          ]
        }
      ]
    }
  };

  const navItems = [
    { to: "/", label: "Home", hasDropdown: false },
    { to: "/services", label: "Services", hasDropdown: true, dropdown: "services" },
    { to: "/case-studies", label: "Case Studies", hasDropdown: false },
    { to: "/about", label: "Company", hasDropdown: true, dropdown: "company" },
    { to: "/contact", label: "Contact", hasDropdown: false }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="text-xl font-bold text-brand-700" onClick={closeMenu}>
            PBMINDS<span className="text-accent-400">.</span>
          </NavLink>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-1">
            {navItems.map((item) => (
              <div
                key={item.to}
                className="relative"
                onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.dropdown)}
                onMouseLeave={handleMouseLeave}
              >
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
                      isActive 
                        ? "font-semibold text-brand-600 bg-brand-50" 
                        : "text-gray-700 hover:text-brand-600 hover:bg-gray-50"
                    }`
                  }
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown size={16} />}
                </NavLink>

                {/* Mega Menu Dropdown */}
                {item.hasDropdown && activeDropdown === item.dropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-full mt-2 w-screen max-w-4xl -ml-32 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden"
                  >
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-brand-700 mb-4">
                        {megaMenus[item.dropdown].title}
                      </h3>
                      <div className="grid grid-cols-3 gap-6">
                        {megaMenus[item.dropdown].columns.map((column, idx) => (
                          <div key={idx}>
                            <h4 className="text-sm font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-200">
                              {column.title}
                            </h4>
                            <ul className="space-y-2">
                              {column.items.map((menuItem, itemIdx) => {
                                const Icon = menuItem.icon;
                                return (
                                  <li key={itemIdx}>
                                    <NavLink
                                      to={menuItem.to}
                                      onClick={closeMenu}
                                      className="group flex items-start gap-3 p-2 rounded-lg hover:bg-brand-50 transition-colors"
                                    >
                                      <Icon className="w-5 h-5 text-brand-500 mt-0.5 flex-shrink-0" />
                                      <div>
                                        <div className="text-sm font-medium text-gray-900 group-hover:text-brand-600">
                                          {menuItem.label}
                                        </div>
                                        <div className="text-xs text-gray-500 mt-0.5">
                                          {menuItem.description}
                                        </div>
                                      </div>
                                    </NavLink>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </nav>
          
          {/* Desktop CTA Button */}
          <div className="hidden md:flex">
            <NavLink
              to="/contact"
              className="inline-block bg-brand-500 hover:bg-brand-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all hover:shadow-lg"
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
