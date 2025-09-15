import React from "react";

export default function Contact(){
  function handleSubmit(e){
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    // For now just log. Replace with API call / serverless function later
    console.log("lead:", data);
    alert("Thanks — we received your message");
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold">Get in touch</h3>
        <p className="text-muted mt-2">Tell us about your project and we'll reply within 1 business day.</p>
        <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
          <input name="name" required placeholder="Your name" className="w-full p-3 border rounded" />
          <input name="email" type="email" required placeholder="Email" className="w-full p-3 border rounded" />
          <textarea name="message" rows="6" placeholder="Describe your project" className="w-full p-3 border rounded" />
          <button type="submit" className="self-start bg-brand-500 hover:bg-brand-700 text-white px-5 py-3 rounded-2xl">Send message</button>
        </form>
      </div>
    </section>
  );
}
