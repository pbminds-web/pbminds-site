import React from "react";

const studies = [
  { title: "Forecourt POS Modernization", summary: "Improved device uptime and reduced latency." },
  { title: "Outbound Dialer Optimization", summary: "Improved connect rate and analytics-driven routing." }
];

export default function CaseStudies(){
  return (
    <section className="py-16 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold">Case Studies</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {studies.map(s => (
            <div key={s.title} className="p-6 bg-white rounded-2xl border">
              <h4 className="font-semibold">{s.title}</h4>
              <p className="mt-2 text-sm text-muted">{s.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
