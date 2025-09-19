import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side - Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-200"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-200"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-200"
                  placeholder="Your Message"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side - Google Map */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Company Location"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18114.0768506167!2d77.53955902704347!3d13.002727350862534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb9690c45b03649%3A0x2808768c8dd3de91!2sPBMINDS%20INDIA%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1758298648545!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

