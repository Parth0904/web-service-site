
export default function Proof() {
  return (
    <section className="py-24 px-6 bg-zinc-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Example Work
        </h2>

        <p className="mt-4 text-center text-gray-400 max-w-2xl mx-auto">
          A sample project showing how I approach frontend design, performance,
          and usability.
        </p>

        <div className="mt-16 border border-white/10 rounded-xl p-8">
          <h3 className="text-2xl font-semibold">
            Website Redesign & Performance Improvement
          </h3>

          <div className="mt-6 space-y-6 text-gray-400">
            <div>
              <h4 className="font-medium text-white">Problem</h4>
              <p className="mt-2">
                The website had an outdated design, slow loading times,
                and poor mobile responsiveness, leading to a weak user experience.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-white">What I Did</h4>
              <p className="mt-2">
                Rebuilt the frontend using Next.js, improved layout and spacing,
                optimized assets, and ensured the site worked smoothly across
                all devices.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-white">Result</h4>
              <p className="mt-2">
                The site became faster, cleaner, and easier to use, with
                significantly improved mobile experience and overall usability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
