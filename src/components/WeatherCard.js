import React, { useContext } from 'react';
import WeatherContext from '../context/WeatherContext';
import { WiDaySunny, WiRain, WiSnow, WiCloudy, WiThunderstorm, WiFog } from 'react-icons/wi';

const WeatherCard = () => {
  const { weatherData, loading, error } = useContext(WeatherContext);

  const getWeatherIcon = (condition) => {
    switch (condition) {
      case 'Clear':
        return <WiDaySunny size={60} />;
      case 'Rain':
        return <WiRain size={60} />;
      case 'Snow':
        return <WiSnow size={60} />;
      case 'Clouds':
        return <WiCloudy size={60} />;
      case 'Thunderstorm':
        return <WiThunderstorm size={60} />;
      case 'Mist':
      case 'Fog':
      case 'Haze':
        return <WiFog size={60} />;
      default:
        return <WiDaySunny size={60} />;
    }
  };

  if (loading) return null;
  if (error) return <div className="error-message">{error}</div>;
  if (!weatherData) return null;

  return (
    <div className="weather-card">
      <h2>{weatherData.name}, {weatherData.sys.country}</h2>
      <div className="weather-main">
        <div className="weather-icon">
          {getWeatherIcon(weatherData.weather[0].main)}
        </div>
        <div className="weather-temp">{Math.round(weatherData.main.temp)}°C</div>
      </div>
      <div className="weather-details">
        <p>Condition: {weatherData.weather[0].main}</p>
        <p>Humidity: {weatherData.main.humidity}%</p>
        <p>Wind Speed: {weatherData.wind.speed} km/h</p>
      </div>
    </div>
  );
};

export default WeatherCard;