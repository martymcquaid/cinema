import React from 'react'
import { useParams } from 'react-router-dom'
import { MOVIES } from '../data/movies'

export default function MovieDetail() {
  const { id } = useParams<{ id: string }>()
  const movie = MOVIES.find((m) => m.id === id)

  if (!movie) {
    return (
      <div className="p-6 text-center text-slate-300">
        <h2 className="text-2xl mb-2">Movie not found</h2>
        <p>Sorry, this film is not in our catalog.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Hero */}
      <section className="h-96 bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl overflow-hidden shadow-xl">
        <div className="h-full w-full" style={{ backgroundImage: `url(${movie.poster})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/80 to-transparent w-full h-full"></div>
      </section>
      {/* Synopses */}
      <div className="md:flex md:gap-6">
        <div className="md:w-2/3 space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold">{movie.title}</h1>
          <p className="text-slate-300">{movie.synopsis}</p>
          <p className="text-slate-200">{movie.description}</p>
          <div className="flex flex-wrap gap-2">
            {movie.formats.map((f) => (
              <span key={f} className="px-3 py-1 bg-slate-800 rounded-full text-sm">{f}</span>
            ))}
          </div>
        </div>
        <div className="md:w-1/3 bg-slate-900/60 rounded-xl p-4">
          <h3 className="text-xl font-semibold mb-2">Cast</h3>
          <ul className="space-y-2 text-sm">
            {movie.cast.map((c, idx) => (
              <li key={idx}>
                <strong>{c.name}</strong> — {c.role}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Showtimes */}
      <section>
        <h3 className="text-2xl font-semibold mb-3">Showtimes</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {movie.showtimes.map((t) => (
            <div key={t} className="p-3 bg-slate-800 rounded-xl text-center">{t}</div>
          ))}
        </div>
        <div className="mt-4">
          <button className="px-6 py-3 bg-blue-600 rounded-xl hover:shadow-xl">Book Tickets</button>
        </div>
      </section>
    </div>
  )
}
