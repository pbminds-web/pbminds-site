import React from "react";
export default function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto px-6 md:px-12 text-center md:text-left">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">About Us</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto md:mx-0">
          At <span className="font-semibold text-blue-600">PBMINDS </span>, 
          we are passionate about crafting innovative software solutions 
          that empower businesses to grow, adapt, and succeed in the 
          digital age. 
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              🚀 Our Mission
            </h3>
            <p className="text-gray-600">
              To deliver high-quality, scalable, and secure software products 
              that solve real-world challenges for businesses across industries.
            </p>
          </div>

          <div className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              🌍 Our Vision
            </h3>
            <p className="text-gray-600">
              To be recognized globally as a trusted technology partner 
              driving innovation and business transformation.
            </p>
          </div>

          <div className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              💡 Our Values
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
