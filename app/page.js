import {
  ArrowRight,
  ArrowDown,
  CheckCircle2,
  ShieldCheck,
  Zap,
} from "lucide-react";
import WhatsAppCTA from "./component/Whatsapp";

export default function Home() {
  return (
    <main className="bg-zinc-950 text-white selection:bg-blue-500/30">
      {/* HERO SECTION: Focused on "The Transformation" */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('/bg.webp')] bg-cover bg-center opacity-40 scale-105"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-zinc-950/60 to-zinc-950" />

        <div className="relative max-w-4xl text-center z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6 animate-fade-in">
            <Zap size={14} /> <span>Available for new projects in 2026</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
            Stop Losing Leads to a{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">
              Slow Website.
            </span>
          </h1>

          <p className="mt-8 text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            I build high-performance React & Next.js frontends that load in
            under 1s and turn casual visitors into paying customers.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-zinc-950 font-bold bg-blue-500 rounded-xl hover:bg-blue-400 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(59,130,246,0.4)]"
            >
              Get My Free Website Audit <ArrowRight size={18} />
            </a>
            <a
              href="https://cafe-template-three.vercel.app/"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold bg-zinc-900 border border-zinc-800 rounded-xl hover:bg-zinc-800 transition-all"
            >
              View Live Demo
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-zinc-500 text-sm">
            <div className="flex items-center gap-1">
              <CheckCircle2 size={16} className="text-green-500" /> SEO
              Optimized
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle2 size={16} className="text-green-500" /> Mobile First
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR: Replace with real logos if possible */}
      <div className="py-8 border-y border-zinc-900 bg-zinc-950/50 text-center">
        <p className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-4">
          Trusted by innovative brands
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          <a
            href="https://healthfirstmedicalsystems.vercel.app/"
            className="opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
          >
            <span className="font-bold text-xl hover:text-blue-700">
              Health First Medical System
            </span>
          </a>
        </div>
      </div>

      {/* SERVICES: Value-Proposition Driven */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">
              How I help you grow
            </h2>
            <p className="mt-4 text-zinc-400">
              Fixed-price solutions for high-growth businesses.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Conversion Landing Pages",
                desc: "Designed specifically to sell your product or capture lead info.",
                features: [
                  "A/B Test Ready",
                  "Copywriting Assistance",
                  "Lightning Fast",
                ],
              },
              {
                title: "The Performance Overhaul",
                desc: "Moving your slow WordPress/Wix site to Next.js for a 10x speed boost.",
                features: [
                  "Core Web Vitals Pass",
                  "Instant Image Loading",
                  "99+ Lighthouse Score",
                ],
              },
              {
                title: "Custom Web App Frontends",
                desc: "Complex dashboards and tools that feel as smooth as a desktop app.",
                features: [
                  "React/Next.js Best Practices",
                  "Scalable UI Kits",
                  "API Integration",
                ],
              },
            ].map((service, i) => (
              <div
                key={i}
                className="group p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-blue-500/50 transition-colors"
              >
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-zinc-400 mb-6">{service.desc}</p>
                <ul className="space-y-3">
                  {service.features.map((f, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2 text-sm text-zinc-300"
                    >
                      <ShieldCheck size={16} className="text-blue-500" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION: The "Final Push" */}
      <section id="contact" className="py-24 px-6 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Ready to increase your revenue?
          </h2>
          <p className="mt-6 text-xl text-blue-100">
            Claim your free audit and get a free video audit of your current
            website.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-xl hover:bg-zinc-100 transition-transform hover:-translate-y-1">
              Scroll Down <ArrowDown size={16} /> Claim My Free Audit
            </button>
            <WhatsAppCTA />
          </div>
          <p className="mt-6 text-sm text-blue-200">
            Only 2 spots remaining for February
          </p>
        </div>
      </section>
      <section
        id="contact"
        className="relative py-24 px-6 bg-zinc-950 border-t border-white/5 overflow-hidden"
      >
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-600/5 blur-[120px] pointer-events-none" />

        <div className="relative max-w-xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-blue-500 font-bold tracking-widest text-xs uppercase">
              Limited Availability
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">
              Claim Your Free{" "}
              <span className="text-blue-500">Website Audit</span>
            </h2>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              I will personally record a 5-minute video review of your site’s
              speed, design, and SEO —{" "}
              <span className="text-white font-medium">100% free.</span>
            </p>
          </div>

          <form
            className="space-y-4"
            action="https://formsubmit.co/shridharlondhe98@gmail.com"
            method="POST"
          >
            {/* Anti-Spam Honeypot */}
            <input type="text" name="_honey" style={{ display: "none" }} />

            {/* Disable Captcha for better UX (optional, remove if you get spam) */}
            <input type="hidden" name="_captcha" value="false" />

            {/* Success Redirect URL (replace with your domain) */}
            {/* <input type="hidden" name="_next" value="https://yourdomain.com" /> */}

            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-500 uppercase mb-1 ml-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-xl text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-500 uppercase mb-1 ml-1">
                  Work Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@company.com"
                  className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-xl text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-500 uppercase mb-1 ml-1">
                  Current Website URL
                </label>
                <input
                  type="url"
                  name="website"
                  required
                  placeholder="https://yourwebsite.com"
                  className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-xl text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-2 px-6 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-lg shadow-[0_10px_20px_rgba(59,130,246,0.3)] transition-all active:scale-[0.98]"
            >
              Send My Free Video Audit
            </button>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <svg
                  className="w-4 h-4 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Personalized Review
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <svg
                  className="w-4 h-4 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                24h Turnaround
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <svg
                  className="w-4 h-4 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Zero Pressure
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
