import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Stock image banner */}
      <div className="w-full">
        <img
          src="https://picsum.photos/seed/cinema/1600/600"
          alt="Cinematic theater audience"
          className="w-full h-64 md:h-96 object-cover"
        />
      </div>
      {/* Cinematic hero */}
      <section className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
        <div className="text-center max-w-3xl px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-6">Omniplex</h1>
          <p className="text-slate-300 text-lg md:text-xl mb-8">Premium cinema experiences with IMAX, 4DX, and Dolby Atmos in every city.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/now" className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-transform">
              Now Showing
            </Link>
            <Link to="/locations" className="px-6 py-3 bg-slate-200 text-slate-900 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-transform">
              Find a Cinema
            </Link>
          </div>
        </div>
      </section>
      {/* Subtle lower content note */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-200 text-xs">© Omniplex Preview Edition</div>
    </div>
  )
}
