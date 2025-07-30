import { Link } from '@tanstack/react-router'
import { Menu, Plane, User } from 'lucide-react'

export default function Header() {
  return (
    <header 
      className="bg-gray-900 border-b border-gray-800 px-6 py-4"
      role="banner"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link 
            to="/" 
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            aria-label="SkySearch - Flight search homepage"
          >
            <div 
              className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center"
              aria-hidden="true"
            >
              <Plane className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-white">SkySearch</h1>
          </Link>
        </div>

        <nav 
          className="hidden md:flex items-center gap-8"
          role="navigation"
          aria-label="Main navigation"
        >
          <Link
            to="/"
            className="text-gray-300 hover:text-white transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-2 py-1"
            aria-current="page"
          >
            Search Flights
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
          aria-label="Open mobile menu"
          aria-expanded="false"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  )
}
