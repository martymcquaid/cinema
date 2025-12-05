import React from 'react'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/90 border-t border-slate-800/70 mt-8">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div className="text-sm text-slate-300">© {new Date().getFullYear()} Omniplex. All rights reserved.</div>
        <nav className="flex gap-4 text-sm text-slate-400">
          <Link to="/privacy" className="hover:text-white">Privacy</Link>
          <Link to="/terms" className="hover:text-white">Terms</Link>
          <Link to="/contact" className="hover:text-white">Contact</Link>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
