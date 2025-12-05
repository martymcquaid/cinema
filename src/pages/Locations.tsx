import { LOCATIONS } from '../data/locations'
import { Link } from 'react-router-dom'

export default function Locations() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Our Cinemas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {LOCATIONS.map((l) => (
          <div key={l.id} className="p-4 bg-slate-900 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-1">{l.name}</h3>
            <p className="text-sm text-slate-400">{l.address}</p>
            <p className="text-sm text-slate-300">Screens: {l.screens} • Formats: {l.formats.join(', ')}</p>
            <Link to={`/locations/${l.id}`} className="mt-2 inline-block px-4 py-2 bg-blue-600 rounded">View Details</Link>
          </div>
        ))}
      </div>
    </section>
  )
}
