
export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-zinc-900 border-t border-white/10"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Want to Improve Your Website?
        </h2>

        <p className="mt-4 text-gray-400">
          Get a free website audit and see how your design, speed, and usability
          can be improved.
        </p>

        <form
          className="mt-10 space-y-4"
          action="https://formsubmit.co/shridharlondhe98@gmail.com"
          method="POST"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="w-full px-4 py-3 bg-white border border-white/20 rounded-lg text-black focus:outline-none focus:border-blue-500"
          />

          <input 
            type="email"
            name="email"
            required
            placeholder="Your email"
            className="w-full px-4 py-3 bg-white border border-white/20 rounded-lg text-black focus:outline-none focus:border-blue-500"
          />

          <input
            type="text"
            name="website"
            placeholder="Your website (optional)"
            className="w-full px-4 py-3 bg-white border border-white/20 rounded-lg text-black focus:outline-none focus:border-blue-500"
          />

          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Get Free Audit
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-400">
          No spam. I’ll personally review your site.
        </p>
      </div>
    </section>
  );
}
