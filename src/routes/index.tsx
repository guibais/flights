import { createFileRoute } from '@tanstack/react-router'
import { FlightSearch } from '../components/FlightSearch.tsx'

export const Route = createFileRoute('/')({
  component: FlightsApp,
})

function FlightsApp() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main className="container mx-auto px-4 py-8">
        <FlightSearch />
      </main>
    </div>
  )
}
