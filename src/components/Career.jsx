import React from "react";

export default function Career() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Careers at PBMINDS</h2>
        <p className="mb-8 text-muted">We're always looking for talented people to join our team. Check out our open positions or send us your resume!</p>
        <div className="bg-gray-100 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold mb-2">Open Positions</h3>
          <ul className="list-disc pl-6">
            <li>Frontend Developer (React, Tailwind CSS)</li>
            <li>Backend Developer (Node.js, Express, MongoDB)</li>
            <li>DevOps Engineer (AWS, Docker, CI/CD)</li>
            <li>UI/UX Designer</li>
          </ul>
        </div>
        <div className="bg-gray-100 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">How to Apply</h3>
          <p>Email your resume and portfolio to <a href="mailto:careers@pbmindstech.com" className="text-blue-600 underline">careers@pbmindstech.com</a>.<br/>We look forward to hearing from you!</p>
        </div>
      </div>
    </section>
  );
}
