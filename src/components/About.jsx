import React from "react";
export default function About() {
  return (
    <section id="about" className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="container mx-auto px-6 md:px-12 text-center md:text-left">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-brand-500 to-accent-500 bg-clip-text text-transparent mb-6">About Us</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto md:mx-0">
          At <span className="font-semibold bg-gradient-to-r from-brand-500 to-accent-500 bg-clip-text text-transparent">PBMINDS</span>, 
          we are passionate about crafting innovative software solutions 
          that empower businesses to grow, adapt, and succeed in the 
          digital age. 
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border border-gray-100">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-50 text-brand-500 mb-4 group-hover:scale-110 group-hover:bg-brand-100 transition-all duration-300">
              🚀
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To deliver high-quality, scalable, and secure software products 
              that solve real-world challenges for businesses across industries.
            </p>
          </div>

          <div className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border border-gray-100">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-50 text-brand-500 mb-4 group-hover:scale-110 group-hover:bg-brand-100 transition-all duration-300">
              🌍
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To be recognized globally as a trusted technology partner 
              driving innovation and business transformation.
            </p>
          </div>

          <div className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border border-gray-100">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-50 text-brand-500 mb-4 group-hover:scale-110 group-hover:bg-brand-100 transition-all duration-300">
              💡
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Our Values
            </h3>
            <p className="text-gray-600">
              Innovation, Integrity, and Excellence are at the heart of 
              everything we build, ensuring long-term value for our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
