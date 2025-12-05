import { LOCATIONS } from '../data/locations'
import { useParams } from 'react-router-dom'

export default function LocationDetail() {
  const { id } = useParams<{ id: string }>()
  const loc = LOCATIONS.find((l) => l.id === id)
  if (!loc) {
    return <div className="p-6">Location not found.</div>
  }
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">{loc.name}</h2>
      <p className="text-slate-300">{loc.address}</p>
      <p className="text-slate-300">Screens: {loc.screens} • Formats: {loc.formats.join(', ')}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {loc.amenities.map((a, idx) => (
          <div key={idx} className="p-3 bg-slate-800 rounded-lg">{a}</div>
        ))}
      </div>
      <div className="p-3 bg-slate-900 rounded-lg">Phone: {loc.phone} • Email: {loc.email}</div>
    </section>
  )
}
