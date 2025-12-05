export default function Careers() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Careers</h2>
      <p className="text-slate-300">Join Cinema X and contribute to a premium cinema experience worldwide. We’re hiring across creative, technical, and hospitality roles.</p>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { title: 'Frontend Engineer', location: 'London' },
          { title: 'Customer Experience Specialist', location: 'New York' },
        ].map((r, idx) => (
          <div key={idx} className="p-4 bg-slate-900 rounded-xl">
            <strong>{r.title}</strong>
            <div className="text-sm text-slate-400">{r.location}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
