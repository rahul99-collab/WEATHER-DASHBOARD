import React, { useContext } from 'react';
import WeatherContext from '../context/WeatherContext';

const RecentSearches = () => {
  const { recentSearches, fetchWeather } = useContext(WeatherContext);

  if (recentSearches.length === 0) return null;

  return (
    <div className="recent-searches">
      <h3>Recent Searches:</h3>
      <ul>
        {recentSearches.map((city, index) => (
          <li key={index} onClick={() => fetchWeather(city)}>
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentSearches;