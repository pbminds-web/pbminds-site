import React from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();
	
	console.log("SERVICE:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
    console.log("TEMPLATE:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
    console.log("KEY:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
	
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
          alert("✅ Your message has been sent successfully!");
        },
        (error) => {
          console.error("Failed...", error.text);
          alert("❌ There was an error. Please try again later.");
        }
      );

    e.target.reset(); // clear the form after submit
  };

  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side - Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <form className="space-y-4" onSubmit={sendEmail}>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
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
                  name="user_email"
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
                  name="message"
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
                Send mail
              </button>
            </form>
          </div>

          {/* Right Side - Google Map */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18114.0768506167!2d77.53955902704347!3d13.002727350862534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb9690c45b03649%3A0x2808768c8dd3de91!2sPBMINDS%20INDIA%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1758298648545!5m2!1sen!2sin"
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
