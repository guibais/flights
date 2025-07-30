# SkySearch - Google Flights Clone

A modern flight search application built with React, TypeScript, and the Sky Scrapper API. Features a dark theme interface similar to Google Flights with real-time flight search capabilities.

<img width="437" height="381" alt="image" src="https://github.com/user-attachments/assets/0e71ac08-a75c-4989-95c1-986c615833ae" />
<img width="437" height="384" alt="image" src="https://github.com/user-attachments/assets/d9207249-c533-48b4-baa4-ccb89709ae08" />




## ✈️ Features

- **Modern Dark UI**: Google Flights-inspired interface with dark theme
- **Real-time Search**: Live airport search with autocomplete
- **Multiple Trip Types**: Round-trip, one-way, and multi-city options
- **Smart Filtering**: Sort by best value, cheapest price, or fastest duration
- **Detailed Results**: Expandable flight cards with complete itinerary information
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Type Safety**: Full TypeScript implementation with comprehensive type definitions

## 🚀 Tech Stack

- **Frontend**: React 19 + TypeScript
- **Routing**: TanStack Router
- **State Management**: TanStack Query
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **API**: Sky Scrapper (RapidAPI)
- **Build Tool**: Vite

## 📋 Prerequisites

- Node.js 18+
- npm or yarn
- RapidAPI account for Sky Scrapper API access

## 🛠️ Setup Instructions

### 1. Clone and Install

```bash
git clone <repository-url>
cd flights
npm install
```

### 2. API Configuration

1. Sign up for [RapidAPI](https://rapidapi.com/)
2. Subscribe to [Sky Scrapper API](https://rapidapi.com/apiheya/api/sky-scrapper)
3. Copy your API key

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### API Setup

1. **Get RapidAPI Key**:
   - Visit [RapidAPI Sky Scrapper](https://rapidapi.com/apiheya/api/sky-scrapper)
   - Subscribe to the API
   - Copy your API key

2. **Environment Variables**:
   ```env
   VITE_RAPIDAPI_KEY=your_rapidapi_key_here
   ```

## 🎯 Usage Guide

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🌐 API Integration

The app integrates with Sky Scrapper API endpoints:

- **Airport Search**: `/searchAirport` - Find airports by query
- **Nearby Airports**: `/getNearByAirports` - Get airports by location
- **Flight Search**: `/searchFlights` - Search for flights with parameters

## 🎨 UI Components

### FlightSearch

Main search interface with:

- Trip type selection (round-trip, one-way, multi-city)
- Origin/destination airport selectors with swap functionality
- Date pickers for departure and return
- Passenger count and cabin class selection
- Search button with loading states

### AirportSelector

Intelligent airport search with:

- Real-time API search (minimum 2 characters)
- Dropdown with airport details
- Visual indicators for airports vs cities
- Keyboard navigation support

### FlightResults

Comprehensive results display:

- Sorting options (best, cheapest, fastest)
- Flight cards with airline logos
- Expandable details with full itinerary
- Loading states and error handling

## 🔒 Environment Variables

| Variable            | Description                        | Required |
| ------------------- | ---------------------------------- | -------- |
| `VITE_RAPIDAPI_KEY` | Your RapidAPI key for Sky Scrapper | Yes      |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Sky Scrapper API](https://rapidapi.com/apiheya/api/sky-scrapper) for flight data
- [Google Flights](https://flights.google.com) for UI inspiration
- [TanStack](https://tanstack.com/) for excellent React libraries
- [Tailwind CSS](https://tailwindcss.com/) for styling system
