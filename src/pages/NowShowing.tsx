import { Link } from 'react-router-dom'
import { MOVIES } from '../data/movies'

export default function NowShowing() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Now Showing</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOVIES.map((m) => (
          <div key={m.id} className="bg-slate-900/60 rounded-xl overflow-hidden shadow-lg">
            <div className="h-48 bg-cover" style={{ backgroundImage: `url(${m.poster})`, backgroundPosition: 'center' }} />
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-semibold">{m.title}</h3>
              <p className="text-sm text-slate-400">{m.synopsis}</p>
              <Link to={`/movie/${m.id}`} className="inline-block mt-2 px-4 py-2 bg-blue-600 rounded">Details</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
