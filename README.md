# 🌤️ Weather App

A responsive weather application built with React that lets you search any city and get real-time weather data.

**[Live Demo →](https://weather-app-react-ten-dusky.vercel.app/)**

---

## Features

- Search weather by city name
- Displays temperature, humidity, wind speed, and weather condition
- Clean, responsive UI that works on mobile and desktop
- Built with React Router for smooth navigation
- Date and time formatting with Day.js

## Tech Stack

| | |
|---|---|
| Framework | React 19 |
| Build Tool | Vite |
| Routing | React Router DOM v7 |
| Date handling | Day.js |
| Deployment | Vercel |

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- A free API key from [OpenWeatherMap](https://openweathermap.org/api)

### Installation

```bash
# Clone the repo
git clone https://github.com/piyushNegiDev/Weather-App-React.git
cd Weather-App-React

# Install dependencies
npm install
```

### Set up environment variables

Create a `.env` file in the root of the project:

```env
VITE_WEATHER_API_KEY=your_api_key_here
```

> ⚠️ Never commit your `.env` file. It's already listed in `.gitignore`.

### Run locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
├── components/       # Reusable UI components
├── pages/            # Route-level page components
├── App.jsx           # Root component with routing
└── main.jsx          # Entry point
```

## What I Learned

- Fetching data from a REST API using `useEffect` and `useState`
- React Router DOM for client-side routing
- Managing loading and error states in React
- Deploying a Vite app to Vercel
- Using environment variables to keep API keys secure

## License

MIT