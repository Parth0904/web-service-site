// components/Hero.tsx

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg.webp')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative max-w-3xl text-center z-10">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Fast, Modern Websites That Help Businesses Get More Leads
        </h1>

        <p className="mt-6 text-lg text-gray-400">
          I design and build high-performance frontends using React & Next.js —
          focused on speed, mobile experience, and conversions.
        </p>

        <div className="mt-8">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold bg-linear-to-r from-yellow-400 to-blue-600 rounded-full hover: translate-y-1 group"
          >
            Get a Free Website Audit
            <svg
              xmlns="www.w3.org"
              className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
