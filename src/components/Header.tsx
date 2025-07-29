import { Link } from '@tanstack/react-router'
import { Menu, Plane, User } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-gray-900 border-b border-gray-800 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Plane className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">SkySearch</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-gray-300 hover:text-white transition-colors font-medium"
          >
            Flights
          </Link>
          <Link
            to="/hotels"
            className="text-gray-300 hover:text-white transition-colors font-medium"
          >
            Hotels
          </Link>
          <Link
            to="/cars"
            className="text-gray-300 hover:text-white transition-colors font-medium"
          >
            Car rental
          </Link>
          <Link
            to="/packages"
            className="text-gray-300 hover:text-white transition-colors font-medium"
          >
            Packages
          </Link>
        </nav>

        {/* User Actions */}
        <div className="flex items-center gap-4">
          <button className="text-gray-300 hover:text-white transition-colors">
            <User className="w-5 h-5" />
          </button>
          <button className="md:hidden text-gray-300 hover:text-white transition-colors">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
