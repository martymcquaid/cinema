import React from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <header className="bg-black/70 backdrop-filter backdrop-blur-lg sticky top-0 z-50 border-b border-slate-800/70">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center Space-x-2">
          <span className="text-blue-400 font-bold text-xl tracking-wide">Cinema X</span>
        </Link>
        <div className="hidden md:flex space-x-6 text-sm text-slate-200">
          <Link to="/now" className="hover:text-blue-300">Now Showing</Link>
          <Link to="/coming-soon" className="hover:text-blue-300">Coming Soon</Link>
          <Link to="/locations" className="hover:text-blue-300">Locations</Link>
          <Link to="/loyalty" className="hover:text-blue-300">Loyalty</Link>
          <Link to="/gift-cards" className="hover:text-blue-300">Gift Cards</Link>
          <Link to="/events" className="hover:text-blue-300">Events</Link>
          <Link to="/contact" className="hover:text-blue-300">Contact</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
