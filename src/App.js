import React from 'react';
import { WeatherProvider } from './context/WeatherContext';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import RecentSearches from './components/RecentSearches';
import LoadingSpinner from './components/LoadingSpinner';
import './App.css';

function App() {
  return (
    <WeatherProvider>
      <div className="app-container">
        <h1>Weather Dashboard</h1>
        <SearchBar />
        <RecentSearches />
        <WeatherCard />
        <LoadingSpinner />
      </div>
    </WeatherProvider>
  );
}

export default App;