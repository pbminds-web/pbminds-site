// src/components/Features.jsx
import React from "react";
import { motion } from "framer-motion";
import { Cpu, Cloud, ShieldCheck, GitBranch, MonitorSmartphone, Globe2 } from "lucide-react";

const features = [
  {
    icon: <Cpu className="h-6 w-6" />,
    title: "High Performance",
    text: "Low-latency systems, profiling-driven optimization and memory-safe implementations.",
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    title: "Cloud Native",
    text: "Kubernetes, resilient microservices, multi-cloud deployments and infra as code.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Security First",
    text: "Threat modeling, SAST/DAST pipelines and secure-by-default development practices.",
  },
  {
    icon: <GitBranch className="h-6 w-6" />,
    title: "Developer Velocity",
    text: "CI/CD, trunk-based workflows and automated testing to ship safely and fast.",
  },
  {
    icon: <MonitorSmartphone className="h-6 w-6" />,
    title: "Observability",
    text: "Distributed tracing, metrics and logs to keep systems observable and debuggable.",
  },
  {
    icon: <Globe2 className="h-6 w-6" />,
    title: "Enterprise Integrations",
    text: "SIP/UCCE, POS, payment gateways and legacy system adapters with robust contracts.",
  },
];

export default function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h3 className="text-3xl font-bold text-slate-900">Platform features</h3>
          <p className="mt-2 text-muted">Capabilities we deliver across projects and platforms.</p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="p-6 border rounded-2xl bg-white shadow-sm hover:shadow-md"
            >
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-brand-50 text-brand-700 mb-4">
                {f.icon}
              </div>
              <h4 className="font-semibold">{f.title}</h4>
              <p className="mt-2 text-sm text-muted">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
