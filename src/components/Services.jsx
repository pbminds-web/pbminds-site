import React from "react";
import { Code2, Cloud, Cpu, ShieldCheck } from "lucide-react";

const services = [
  { icon: <Code2/>, title: "Custom Software", text: "Greenfield builds, enterprise systems, microservices." },
  { icon: <Cloud/>, title: "Cloud & DevOps", text: "K8s, CI/CD, IaC, observability and cost control." },
  { icon: <Cpu/>, title: "AI & Data", text: "ML pipelines, RAG, and automation that augments teams." },
  { icon: <ShieldCheck/>, title: "Security", text: "Threat modeling, SAST/DAST and compliance." }
];

export default function Services() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-slate-900">What we do</h3>
        <p className="mt-2 text-muted max-w-2xl">End-to-end engineering and platform work across domains.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map(s => (
            <div key={s.title} className="p-6 border rounded-2xl shadow-sm">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-brand-50 text-brand-700 mb-4">{s.icon}</div>
              <h4 className="font-semibold">{s.title}</h4>
              <p className="mt-2 text-sm text-muted">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
