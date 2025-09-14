import React, { useMemo } from "react";
import { BrowserRouter, Routes, Route, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, Rocket, Code2, ShieldCheck, Phone, Mail, MapPin, ArrowRight, CheckCircle2, Globe2, Cpu, GitBranch, Cloud, Lock, MonitorSmartphone } from "lucide-react";

// Minimal UI primitives (no external UI lib)
const Button = ({ asChild, children, className = "", variant = "default", ...props }) => {
  const base =
    variant === "outline"
      ? "border bg-white hover:bg-slate-50"
      : "bg-black text-white hover:bg-black/90";
  const Comp = asChild ? "span" : "button";
  return (
    <Comp className={`inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm shadow-sm ${base} ${className}`} {...props}>
      {children}
    </Comp>
  );
};

const Card = ({ className = "", children }) => (
  <div className={`rounded-2xl border shadow-sm ${className}`}>{children}</div>
);
const CardHeader = ({ className = "", children }) => (
  <div className={`p-5 ${className}`}>{children}</div>
);
const CardTitle = ({ className = "", children }) => (
  <div className={`text-lg font-semibold ${className}`}>{children}</div>
);
const CardContent = ({ className = "", children }) => (
  <div className={`p-5 pt-0 ${className}`}>{children}</div>
);

const Input = (props) => (
  <input {...props} className={`w-full rounded-xl border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-300 ${props.className||""}`} />
);
const Textarea = (props) => (
  <textarea {...props} className={`w-full rounded-xl border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-300 ${props.className||""}`} />
);
const Badge = ({ children, className = "", variant = "secondary" }) => (
  <span className={`inline-flex items-center rounded-full border px-2 py-1 ${variant==="secondary"?"bg-slate-100 text-slate-800":"bg-black text-white"} ${className}`}>{children}</span>
);

/**
 * One-file, production-quality starter website for a software/services/consulting company.
 * Tech: React + Tailwind + framer-motion + react-router-dom
 *
 * How to use:
 * 1) Edit the `site` object below with your company details.
 * 2) Preview locally with `npm run dev`.
 * 3) Deploy to Vercel/Netlify when ready.
 */

const site = {
  companyName: "PBMINDS INDIA PRIVATE LIMITED",
  shortName: "PBMINDS",
  tagline: "Software • Services • Consulting",
  description:
    "Bengaluru-based software engineering partner delivering custom development, cloud-native platforms, and consulting across telecom, retail, fuel-tech, fintech, and industrial IoT.",
  email: "hr@pbmindstech.com",
  phone: "+91 76193 04857",
  addressLines: [
    "1st Floor, 59, Chowdeshwari Arcade",
    "West of Chord Road, 2nd Stage, Basaveshwara Nagar",
    "Bengaluru Urban, Karnataka 560086, India",
  ],
  social: {
    website: "https://pbmindstech.com",
    linkedin: "https://www.linkedin.com/company/pbminds/",
    github: "https://github.com/",
  },
  primaryCTA: {
    label: "Talk to an engineer",
    href: "/contact",
  },
  services: [
    {
      icon: <Code2 className="h-5 w-5" />, 
      title: "Custom Software & APIs",
      blurb:
        "Greenfield builds, legacy modernization, and high-performance backend APIs in C++/Python/Node with robust test automation.",
      bullets: ["C++11/14/17/20", "REST/GraphQL", "Microservices"],
    },
    {
      icon: <Cloud className="h-5 w-5" />, 
      title: "Cloud & DevOps",
      blurb:
        "Kubernetes, CI/CD, observability, and secure infrastructure on AWS/Azure/GCP for velocity with governance.",
      bullets: ["Docker/K8s", "GitHub Actions/Jenkins", "IaC & FinOps"],
    },
    {
      icon: <Cpu className="h-5 w-5" />, 
      title: "AI/Automation",
      blurb:
        "Copilots, RAG, and workflow automation that reduce toil and augment teams with measurable ROI.",
      bullets: ["LLM apps", "Data pipelines", "MLOps"],
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />, 
      title: "Security & Compliance",
      blurb:
        "Threat modeling, SAST/DAST, and audits aligned to enterprise controls and compliance needs.",
      bullets: ["OWASP", "Zero Trust", "CICD gates"],
    },
  ],
  industries: [
    { name: "Fuel-Tech / Retail Forecourt", note: "POS, device integrations, forecourt controllers" },
    { name: "Telecom & Contact Center", note: "UCCE/SIP, real-time systems" },
    { name: "Fintech & Payments", note: "PCI-aware services, wallets" },
    { name: "Industrial & IoT", note: "SCADA, DNP3, IEC 61850, OPC UA" },
  ],
  highlights: [
    "9+ years avg. senior engineer experience",
    "Design-first approach with measurable KPIs",
    "Transparent pricing & flexible engagement",
  ],
  caseStudies: [
    {
      title: "Forecourt POS Modernization",
      summary:
        "Reduced transaction latency by 38% and improved device uptime with resilient adapters and offline-first sync.",
    },
    {
      title: "Outbound Dialer Optimization",
      summary:
        "20% higher connect rate via SIP flow redesign and real-time analytics for agent assist.",
    },
  ],
};

function SEO() {
  const { pathname } = useLocation();
  const title = useMemo(() => {
    const base = `${site.companyName} — ${site.tagline}`;
    if (pathname === "/") return base;
    const key = pathname.replace("/", "").split("/")[0];
    return `${key.charAt(0).toUpperCase() + key.slice(1)} | ${base}`;
  }, [pathname]);

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={site.description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={site.description} />
      <meta property="og:type" content="website" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: site.companyName,
        url: site.social.website,
        contactPoint: [{
          "@type": "ContactPoint",
          telephone: site.phone,
          contactType: "customer service",
          email: site.email,
          areaServed: "IN",
          availableLanguage: ["en"],
        }],
        address: {
          "@type": "PostalAddress",
          streetAddress: site.addressLines[0],
          addressLocality: "Bengaluru",
          addressRegion: "Karnataka",
          postalCode: "560086",
          addressCountry: "IN",
        },
      }) }} />
    </>
  );
}

const Container = ({ children }) => (
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
);

function Navbar() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/industries", label: "Industries" },
    { to: "/case-studies", label: "Case Studies" },
    { to: "/about", label: "About" },
    { to: "/careers", label: "Careers" },
    { to: "/contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <Container>
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center gap-2 font-semibold text-xl">
            <Sparkles className="h-6 w-6" /> {site.shortName}
          </NavLink>
          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `text-sm ${isActive ? "font-semibold" : "text-muted-foreground hover:text-foreground"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild>
              <NavLink to={site.primaryCTA.href}>{site.primaryCTA.label}</NavLink>
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t mt-16">
      <Container>
        <div className="grid gap-8 py-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 text-lg font-semibold mb-3">
              <Rocket className="h-5 w-5" /> {site.companyName}
            </div>
            <p className="text-sm text-muted-foreground max-w-prose">{site.description}</p>
          </div>
          <div>
            <div className="text-sm font-semibold mb-2">Contact</div>
            <ul className="space-y-1 text-sm">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> {site.phone}</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> {site.email}</li>
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5" />
                <span>
                  {site.addressLines.map((l, i) => (
                    <span key={i} className="block">{l}</span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold mb-2">Quick Links</div>
            <ul className="space-y-1 text-sm">
              <li><a className="hover:underline" href="/privacy">Privacy Policy</a></li>
              <li><a className="hover:underline" href="/terms">Terms of Service</a></li>
              <li><a className="hover:underline" href={site.social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="py-6 text-xs text-muted-foreground border-t">© {new Date().getFullYear()} {site.companyName}. All rights reserved.</div>
      </Container>
    </footer>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Container>
        <div className="grid md:grid-cols-2 gap-10 items-center py-16">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold leading-tight"
            >
              Build reliable software, ship faster, <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">scale with confidence</span>.
            </motion.h1>
            <p className="mt-4 text-muted-foreground max-w-prose">
              We partner with product and platform teams to deliver resilient systems, delightful UX, and measurable business outcomes.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <NavLink to="/contact" className="flex items-center gap-2">Start a project <ArrowRight className="h-4 w-4" /></NavLink>
              </Button>
              <Button variant="outline" asChild>
                <NavLink to="/services">Explore services</NavLink>
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {site.highlights.map((h) => (
                <Badge key={h} variant="secondary" className="text-xs py-1 px-2">{h}</Badge>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-2xl border shadow-sm grid place-items-center">
              <div className="text-center p-6">
                <MonitorSmartphone className="h-10 w-10 mx-auto" />
                <div className="mt-3 font-semibold">Enterprise-grade engineering</div>
                <p className="text-sm text-muted-foreground">C++, Python, SIP/UCCE, forecourt POS, and cloud-native platforms.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Services() {
  return (
    <section className="py-12">
      <Container>
        <div className="mb-8">
          <h2 className="text-3xl font-bold">Services</h2>
          <p className="text-muted-foreground">Full-stack software engineering with security and reliability baked in.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {site.services.map((s) => (
            <Card key={s.title} className="h-full">
              <CardHeader className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-medium">{s.icon} {s.title}</div>
                <CardTitle className="sr-only">{s.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">{s.blurb}</p>
                <ul className="text-xs space-y-1">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> {b}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Industries() {
  return (
    <section className="py-12">
      <Container>
        <h2 className="text-3xl font-bold mb-2">Industries</h2>
        <p className="text-muted-foreground mb-6">Domain depth + engineering excellence.</p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {site.industries.map((i) => (
            <Card key={i.name}>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2"><Globe2 className="h-4 w-4" /> {i.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{i.note}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

function CaseStudies() {
  return (
    <section className="py-12">
      <Container>
        <h2 className="text-3xl font-bold mb-2">Case Studies</h2>
        <p className="text-muted-foreground mb-6">Selected outcomes delivered by our teams.</p>
        <div className="grid gap-6 md:grid-cols-2">
          {site.caseStudies.map((c) => (
            <Card key={c.title}>
              <CardHeader>
                <CardTitle className="text-lg">{c.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{c.summary}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

function About() {
  return (
    <section className="py-12">
      <Container>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">About {site.shortName}</h2>
            <p className="text-muted-foreground mt-3">
              {site.companyName} is a Bengaluru-based software company focused on modern C++ systems, real-time communications, and cloud platforms. We combine strong engineering fundamentals with pragmatic delivery.
            </p>
            <ul className="mt-4 text-sm space-y-2">
              <li className="flex items-center gap-2"><GitBranch className="h-4 w-4" /> SDLC excellence: design reviews, code quality, CI/CD</li>
              <li className="flex items-center gap-2"><Lock className="h-4 w-4" /> Security by design: threat modeling, SAST/DAST, least privilege</li>
              <li className="flex items-center gap-2"><Cpu className="h-4 w-4" /> Performance: profiling, async/concurrency, memory safety</li>
            </ul>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Values</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li>• Ownership over output and outcomes</li>
                  <li>• Clear communication and honest estimates</li>
                  <li>• Continuous learning and mentorship</li>
                  <li>• Security, privacy, and accessibility for all users</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Careers() {
  return (
    <section className="py-12">
      <Container>
        <h2 className="text-3xl font-bold">Careers</h2>
        <p className="text-muted-foreground mt-2">We hire engineers who care about fundamentals, readability, and users.</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {["Senior C++ Engineer (Telecom)", "Full-stack Engineer (Node/React)", "QA Automation (GTest/PyTest)"].map((role) => (
            <Card key={role}>
              <CardHeader>
                <CardTitle className="text-base">{role}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">Bengaluru • Hybrid • Competitive compensation</p>
                <Button variant="outline" asChild>
                  <a href="mailto:hr@pbmindstech.com?subject=Application">Apply via Email</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Contact() {
  function submit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log("Contact form submitted", data);
    alert("Thanks! We'll get back to you within 1 business day.");
  }
  return (
    <section className="py-12">
      <Container>
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="text-muted-foreground mt-2">Tell us about your project and goals.</p>
        <div className="grid gap-8 md:grid-cols-2 mt-6">
          <form onSubmit={submit} className="space-y-4">
            <Input name="name" placeholder="Your name" required />
            <Input name="email" type="email" placeholder="Email" required />
            <Input name="company" placeholder="Company (optional)" />
            <Textarea name="message" placeholder="How can we help?" rows={6} required />
            <Button type="submit" className="w-full">Send</Button>
          </form>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Reach us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> {site.phone}</div>
              <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> {site.email}</div>
              <div className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5" />
                <span>
                  {site.addressLines.map((l, i) => (
                    <span key={i} className="block">{l}</span>
                  ))}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Industries />
      <CaseStudies />
      <CtaBand />
    </>
  );
}

function CtaBand() {
  return (
    <section className="py-12">
      <Container>
        <div className="rounded-2xl border p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-2xl font-bold">Have a roadmap? We can accelerate it.</div>
            <p className="text-muted-foreground">Bring us in for an audit, a sprint, or an end-to-end build.</p>
          </div>
          <Button asChild>
            <NavLink to="/contact">Book a free consult</NavLink>
          </Button>
        </div>
      </Container>
    </section>
  );
}

function PageHeader({ title, subtitle }) {
  return (
    <div className="border-b bg-gradient-to-r from-white via-white to-slate-50">
      <Container>
        <div className="py-10">
          <h1 className="text-3xl font-bold">{title}</h1>
          {subtitle && <p className="text-muted-foreground mt-1">{subtitle}</p>}
        </div>
      </Container>
    </div>
  );
}

function ServicesPage() {
  return (
    <>
      <PageHeader title="Services" subtitle="What we do and how we deliver" />
      <Services />
      <CtaBand />
    </>
  );
}

function IndustriesPage() {
  return (
    <>
      <PageHeader title="Industries" subtitle="Where we have deep context" />
      <Industries />
      <CtaBand />
    </>
  );
}

function CaseStudiesPage() {
  return (
    <>
      <PageHeader title="Case Studies" subtitle="Results that matter" />
      <CaseStudies />
      <CtaBand />
    </>
  );
}

function AboutPage() {
  return (
    <>
      <PageHeader title={`About ${site.shortName}`} subtitle="Our principles and ways of working" />
      <About />
      <CtaBand />
    </>
  );
}

function CareersPage() {
  return (
    <>
      <PageHeader title="Careers" subtitle="Join a team that sweats the details" />
      <Careers />
      <CtaBand />
    </>
  );
}

function ContactPage() {
  return (
    <>
      <PageHeader title="Contact" subtitle="Tell us what you're building" />
      <Contact />
    </>
  );
}

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <SEO />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <section className="py-20">
      <Container>
        <div className="max-w-lg mx-auto text-center">
          <div className="text-6xl font-bold">404</div>
          <p className="text-muted-foreground mt-2">Page not found.</p>
          <Button asChild className="mt-6">
            <NavLink to="/">Go home</NavLink>
          </Button>
        </div>
      </Container>
    </section>
  );
}
