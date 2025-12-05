export default function Contact() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <p className="text-slate-300">Have a question or want to book a private screening? Reach out and a Cinema X specialist will respond within 24 hours.</p>
      <form className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <input className="bg-slate-900 border border-slate-700 rounded p-2" placeholder="Name" />
        <input className="bg-slate-900 border border-slate-700 rounded p-2" placeholder="Email" />
        <textarea className="bg-slate-900 border border-slate-700 rounded p-2 md:col-span-2" placeholder="Your message" rows={4} />
        <button className="px-6 py-2 bg-blue-600 rounded">Send</button>
      </form>
    </section>
  )
}
