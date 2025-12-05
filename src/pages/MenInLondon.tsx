import { LOCATIONS } from '../data/locations'
import { Link } from 'react-router-dom'

export default function MenInLondon() {
  const london = LOCATIONS.find((l) => l.id === 'london-covent-garden')
  return (
    <section className="space-y-6">
      <div className="w-full">
        <img
          src="https://picsum.photos/seed/london-cinema/1600/600"
          alt="Omniplex Covent Garden exterior"
          className="w-full h-64 md:h-96 object-cover"
        />
      </div>
      <div className="px-4">
        <h2 className="text-2xl font-semibold mb-2">{london?.name ?? 'Omniplex London'}</h2>
        {london ? (
          <div className="space-y-2 text-slate-300">
            <div>{london.address}</div>
            <div>Screens: {london.screens} • Formats: {london.formats.join(', ')}</div>
            <div>Parking: {london.parking}</div>
            <div>Accessibility: {london.accessibility}</div>
            <Link to={`/locations/${london.id}`} className="inline-block mt-2 px-4 py-2 bg-blue-600 rounded">View Location Details</Link>
          </div>
        ) : (
          <p className="text-slate-300">Details coming soon.</p>
        )}
      </div>
    </section>
  )
}
