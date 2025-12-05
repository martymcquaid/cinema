import React from 'react'
import { Link } from 'react-router-dom'
import { MOVIES } from '../data/movies'

type Props = {
  movie?: typeof MOVIES[number]
}

const FilmCard: React.FC<Props> = ({ movie }) => {
  const m = movie ?? MOVIES[0]
  return (
    <div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg">
      <div className="h-48 bg-cover" style={{ backgroundImage: `url(${m.poster})` }} />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{m.title}</h3>
        <p className="text-sm text-slate-400">{m.synopsis}</p>
        <Link to={`/movie/${m.id}`} className="inline-block mt-2 px-4 py-2 bg-blue-600 rounded">Details</Link>
      </div>
    </div>
  )
}

export default FilmCard
