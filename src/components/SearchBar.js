import React, { useState, useContext } from 'react';
import WeatherContext from '../context/WeatherContext';
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
  const [city, setCity] = useState('');
  const { fetchWeather } = useContext(WeatherContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      fetchWeather(city);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className="search-input"
      />
      <button type="submit" className="search-button">
        <FiSearch />
      </button>
    </form>
  );
};

export default SearchBar;