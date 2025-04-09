import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const WeatherContext = createContext();

const API_KEY = '2a89494dc6a28eda670d37c714f495cd';

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recentSearches, setRecentSearches] = useState([]);

  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
      updateRecentSearches(city);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch weather data');
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  const updateRecentSearches = (city) => {
    setRecentSearches(prev => {
      const newSearches = [city, ...prev.filter(item => item !== city)];
      return newSearches.slice(0, 5);
    });
  };

  return (
    <WeatherContext.Provider value={{
      weatherData,
      loading,
      error,
      recentSearches,
      fetchWeather
    }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;