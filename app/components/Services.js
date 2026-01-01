export default function Services() {
  return (
    <section className="py-24 px-6 bg-zinc-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Services
        </h2>

        <p className="mt-4 text-center text-gray-400 max-w-2xl mx-auto">
          Focused frontend services designed to improve design, speed, and usability.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {/* Service 1 */}
          <div className="border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold">
              Landing Pages
            </h3>
            <p className="mt-4 text-gray-400">
              High-converting, mobile-first landing pages for businesses, startups,
              and personal brands.
            </p>
            <ul className="mt-4 text-gray-400 list-disc list-inside space-y-1">
              <li>Modern UI</li>
              <li>Fast loading</li>
              <li>SEO-ready</li>
              <li>Fully deployed</li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold">
              Website Redesign & Speed Fixes
            </h3>
            <p className="mt-4 text-gray-400">
              Improve slow, outdated, or poorly designed websites to deliver
              a better user experience.
            </p>
            <ul className="mt-4 text-gray-400 list-disc list-inside space-y-1">
              <li>UI redesign</li>
              <li>Performance improvements</li>
              <li>Mobile responsiveness</li>
              <li>UX cleanup</li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold">
              Frontend for Web Apps & Dashboards
            </h3>
            <p className="mt-4 text-gray-400">
              Frontend development for web applications, dashboards,
              and admin panels using React and Next.js.
            </p>
            <ul className="mt-4 text-gray-400 list-disc list-inside space-y-1">
              <li>API-connected UI</li>
              <li>Clean component structure</li>
              <li>Responsive layouts</li>
              <li>Scalable frontend</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
