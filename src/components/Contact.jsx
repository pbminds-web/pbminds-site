import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Send, MapPin, Phone, Mail, CheckCircle, XCircle } from "lucide-react";

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
      duration: 0.5
    }
  }
};

const formFieldVariants = {
  focus: { scale: 1.02, transition: { duration: 0.2 } }
};

export default function Contact() {
  const [formStatus, setFormStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Message Sent!", result.text);
          setFormStatus('success');
          e.target.reset();
        },
        (error) => {
          console.error("Failed...", error.text);
          setFormStatus('error');
        }
      )
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setFormStatus(null), 5000);
      });
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-slate-50 to-brand-50/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] pointer-events-none" />
      
      <motion.div 
        className="max-w-7xl mx-auto px-6 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-slate-900">Contact Us</h2>
          <p className="mt-2 text-muted max-w-2xl mx-auto">
            Get in touch with us. We'd love to hear from you and discuss how we can help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Side - Contact Form */}
          <motion.div 
            className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100"
            variants={itemVariants}
          >
            <form className="space-y-6" onSubmit={sendEmail}>
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Name
                </label>
                <motion.input
                  type="text"
                  name="user_name"
                  className="block w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-100 focus:border-brand-300 transition-all duration-200"
                  placeholder="Your Name"
                  required
                  whileFocus="focus"
                  variants={formFieldVariants}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Email
                </label>
                <motion.input
                  type="email"
                  name="user_email"
                  className="block w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-100 focus:border-brand-300 transition-all duration-200"
                  placeholder="Your Email"
                  required
                  whileFocus="focus"
                  variants={formFieldVariants}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Message
                </label>
                <motion.textarea
                  name="message"
                  rows="4"
                  className="block w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-100 focus:border-brand-300 transition-all duration-200"
                  placeholder="Your Message"
                  required
                  whileFocus="focus"
                  variants={formFieldVariants}
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-600 text-white py-3 px-6 rounded-xl hover:bg-brand-700 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                variants={itemVariants}
              >
                {isSubmitting ? (
                  <motion.div
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </motion.button>

              <AnimatePresence>
                {formStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`flex items-center gap-2 p-4 rounded-xl ${
                      formStatus === 'success' 
                        ? 'bg-green-50 text-green-700' 
                        : 'bg-red-50 text-red-700'
                    }`}
                  >
                    {formStatus === 'success' ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        <span>Message sent successfully!</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-5 h-5" />
                        <span>Failed to send message. Please try again.</span>
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          {/* Right Side - Map and Contact Info */}
          <motion.div variants={itemVariants}>
            <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100 mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <motion.a
                  href="https://www.google.com/maps?q=PBMINDS+INDIA+PRIVATE+LIMITED,1st+Floor,59,+Chowdeshwari+Arcade,+Metro+station,+Chord+Rd,+near+Rajajinagar,+West+of+Chord+Road+2nd+Stage,+2nd+Stage,+Basaveshwar+Nagar,+Bengaluru,+Karnataka+560086"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 text-slate-600 hover:text-brand-600 transition-colors duration-200"
                  whileHover={{ x: 5 }}
                >
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>1st Floor,59, Chowdeshwari Arcade, Metro station, Chord Rd, near Rajajinagar, West of Chord Road 2nd Stage, 2nd Stage, Basaveshwar Nagar, Bengaluru, Karnataka 560086</span>
                </motion.a>
                <motion.a
                  href="tel:+91 76193 04857"
                  className="flex items-center gap-4 text-slate-600 hover:text-brand-600 transition-colors duration-200"
                  whileHover={{ x: 5 }}
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>+91-7619304857</span>
                </motion.a>
                <motion.a
                  href="mailto:hr@pbmindstech.com"
                  className="flex items-center gap-4 text-slate-600 hover:text-brand-600 transition-colors duration-200"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span>hr@pbminds.com</span>
                </motion.a>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] relative">
              <iframe
                title="Company Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18114.0768506167!2d77.53955902704347!3d13.002727350862534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb9690c45b03649%3A0x2808768c8dd3de91!2sPBMINDS%20INDIA%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1758298648545!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}