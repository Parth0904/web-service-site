// components/Process.tsx

export default function Process() {
  return (
    <section className="py-24 px-6 bg-zinc-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          How It Works
        </h2>

        <p className="mt-4 text-center text-gray-400 max-w-2xl mx-auto">
          A simple, transparent process from first contact to launch.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-4">
          <div className="border border-white/10 rounded-xl p-6">
            <span className="text-blue-500 font-semibold">01</span>
            <h3 className="mt-4 text-lg font-semibold">
              Get in Touch
            </h3>
            <p className="mt-2 text-gray-400">
              You contact me with your website or requirement.
            </p>
          </div>

          <div className="border border-white/10 rounded-xl p-6">
            <span className="text-blue-500 font-semibold">02</span>
            <h3 className="mt-4 text-lg font-semibold">
              Review & Plan
            </h3>
            <p className="mt-2 text-gray-400">
              I review your site or idea and suggest the best approach.
            </p>
          </div>

          <div className="border border-white/10 rounded-xl p-6">
            <span className="text-blue-500 font-semibold">03</span>
            <h3 className="mt-4 text-lg font-semibold">
              Build & Improve
            </h3>
            <p className="mt-2 text-gray-400">
              I design or rebuild the frontend with focus on speed and usability.
            </p>
          </div>

          <div className="border border-white/10 rounded-xl p-6">
            <span className="text-blue-500 font-semibold">04</span>
            <h3 className="mt-4 text-lg font-semibold">
              Review & Launch
            </h3>
            <p className="mt-2 text-gray-400">
              You review the work, and we launch once everything looks good.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
