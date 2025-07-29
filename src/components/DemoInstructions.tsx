import { Info, Search, MapPin, Calendar, Users } from 'lucide-react'

export function DemoInstructions() {
  return (
    <div className="bg-gray-800 rounded-lg p-6 mb-6">
      <div className="flex items-center gap-2 mb-4">
        <Info className="w-5 h-5 text-blue-400" />
        <h3 className="text-lg font-semibold text-white">How to Use SkySearch</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <MapPin className="w-4 h-4 text-white" />
          </div>
          <div>
            <h4 className="font-medium text-white mb-1">1. Choose Airports</h4>
            <p className="text-sm text-gray-400">
              Type "São Paulo", "Los Angeles", or "New York" to see airport suggestions
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <Calendar className="w-4 h-4 text-white" />
          </div>
          <div>
            <h4 className="font-medium text-white mb-1">2. Select Dates</h4>
            <p className="text-sm text-gray-400">
              Pick your departure date and return date for round trips
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <Users className="w-4 h-4 text-white" />
          </div>
          <div>
            <h4 className="font-medium text-white mb-1">3. Set Passengers</h4>
            <p className="text-sm text-gray-400">
              Choose number of adults, children, and cabin class
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <Search className="w-4 h-4 text-white" />
          </div>
          <div>
            <h4 className="font-medium text-white mb-1">4. Search Flights</h4>
            <p className="text-sm text-gray-400">
              Click search to see available flights with pricing and details
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-blue-900/30 rounded-lg border border-blue-700/50">
        <p className="text-blue-200 text-sm">
          <strong>Demo Mode:</strong> Currently showing sample flight data. Add your RapidAPI key to search real flights.
        </p>
      </div>
    </div>
  )
}
