import { Link } from 'react-router-dom'
import { MOVIES } from '../data/movies'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-yellow-50 overflow-hidden">
      <section className="relative h-80 md:h-[520px] w-full">
        <img src="https://picsum.photos/seed/omniplex-black-yellow/1600/900" alt="Omniplex cinema hall" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-3xl px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-300 drop-shadow-lg mb-2">Omniplex</h1>
            <p className="text-yellow-100 text-lg md:text-2xl mb-6">Premium cinema experiences with world-class sound, visuals, and service.</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link to="/now" className="px-6 py-3 bg-yellow-500 text-black rounded-xl font-semibold shadow hover:shadow-lg transition">Now Showing</Link>
              <Link to="/locations" className="px-6 py-3 bg-yellow-600 text-black rounded-xl font-semibold shadow hover:shadow-lg transition">Find a Cinema</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold text-yellow-300 mb-6">Now Showing at Omniplex</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOVIES.slice(0, 4).map((m) => (
            <div key={m.id} className="relative rounded-xl overflow-hidden bg-black border border-yellow-500 shadow-lg h-64">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${m.poster})` }} />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3 text-white">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{m.title}</span>
                  <span className="text-xs bg-yellow-500 text-black px-2 py-1 rounded">Now</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black/70 py-12 px-4">
        <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-black/60 border border-yellow-500 rounded-xl text-yellow-50">
            <h3 className="text-lg font-semibold mb-2">Immersive Audio</h3>
            <p>Dolby Atmos in all premium auditoriums for a truly enveloping experience.</p>
          </div>
          <div className="p-6 bg-black/60 border border-yellow-500 rounded-xl text-yellow-50">
            <h3 className="text-lg font-semibold mb-2">Ultra Comfort</h3>
            <p>Ergonomic seating with generous sightlines and legroom.</p>
          </div>
          <div className="p-6 bg-black/60 border border-yellow-500 rounded-xl text-yellow-50">
            <h3 className="text-lg font-semibold mb-2">Concessions</h3>
            <p>Gourmet options and premium beverage pairings.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

