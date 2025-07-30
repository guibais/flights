import { Link } from '@tanstack/react-router'
import { Menu, Plane, User } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-gray-900 border-b border-gray-800 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Plane className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">SkySearch</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-gray-300 hover:text-white transition-colors font-medium"
          >
            Flights
          </Link>
        </nav>
      </div>
    </header>
  )
}
