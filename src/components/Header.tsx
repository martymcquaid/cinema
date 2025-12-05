import React from 'react'
import { NavLink } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <header className="bg-black/90 backdrop-filter backdrop-blur-lg sticky top-0 z-50 border-b border-slate-800/70">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <NavLink to="/" className="flex items-center space-x-2">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="gold" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="Omniplex logo">
            <path d="M3 12h18" />
            <path d="M12 3v18" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          <span className="text-yellow-300 font-extrabold text-xl tracking-wide">Omniplex</span>
        </NavLink>
        <div className="hidden md:flex items-center space-x-6 text-sm text-slate-200">
          <NavLink to="/now" className={({isActive}) => "hover:text-yellow-300" + (isActive ? " text-yellow-300" : "")}>
            Now Showing
          </NavLink>
          <NavLink to="/coming-soon" className={({isActive}) => "hover:text-yellow-300" + (isActive ? " text-yellow-300" : "")}>
            Coming Soon
          </NavLink>
          <NavLink to="/locations" className={({isActive}) => "hover:text-yellow-300" + (isActive ? " text-yellow-300" : "")}>
            Locations
          </NavLink>
          <NavLink to="/loyalty" className={({isActive}) => "hover:text-yellow-300" + (isActive ? " text-yellow-300" : "")}>
            Loyalty
          </NavLink>
          <NavLink to="/gift-cards" className={({isActive}) => "hover:text-yellow-300" + (isActive ? " text-yellow-300" : "")}>
            Gift Cards
          </NavLink>
          <NavLink to="/events" className={({isActive}) => "hover:text-yellow-300" + (isActive ? " text-yellow-300" : "")}>
            Events
          </NavLink>
          <NavLink to="/private-hire" className={({isActive}) => "hover:text-yellow-300" + (isActive ? " text-yellow-300" : "")}>
            Private Hire
          </NavLink>
          <NavLink to="/blog" className={({isActive}) => "hover:text-yellow-300" + (isActive ? " text-yellow-300" : "")}>
            Blog
          </NavLink>
          <NavLink to="/careers" className={({isActive}) => "hover:text-yellow-300" + (isActive ? " text-yellow-300" : "")}>
            Careers
          </NavLink>
          <NavLink to="/faq" className={({isActive}) => "hover:text-yellow-300" + (isActive ? " text-yellow-300" : "")}>
            FAQ
          </NavLink>
          <NavLink to="/contact" className={({isActive}) => "hover:text-yellow-300" + (isActive ? " text-yellow-300" : "")}>
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Header
