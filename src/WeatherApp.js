import React, { useState, useEffect } from 'react';
import './WeatherApp.css'; // Import your CSS file

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedCity, setSelectedCity] = useState("London"); // Default city

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=c308c4c61caa4d5a87d162030242006&q=${selectedCity}`);
        const data = await response.json();
        setWeatherData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [selectedCity]);

  const handleCityClick = (city) => {
    setSelectedCity(city);
  };

  const dayOfTheWeek = (day, month, year) => {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return weekday[new Date(`${month}/${day}/${year}`).getDay()];
  };

  return (
    <div className="weather-app">
      <div className="container">
        <h3 className="brand">NatCalPrep</h3>
        {loading ? (
          <p>Loading...</p>
        ) : (
          weatherData && (
            <div>
              <h1 className="temp">{weatherData.current.temp_c}&#176;</h1>
              <div className="city-time">
                <h1 className="name">{weatherData.location.name}</h1>
                <small>
                  <span className="time">{weatherData.location.localtime.substr(11)}</span>
                  <span className="date">{dayOfTheWeek(
                    parseInt(weatherData.location.localtime.substr(8, 2)),
                    parseInt(weatherData.location.localtime.substr(5, 2)),
                    parseInt(weatherData.location.localtime.substr(0, 4))
                  )} {weatherData.location.localtime.substr(8, 2)}, {weatherData.location.localtime.substr(5, 2)}, {weatherData.location.localtime.substr(0, 4)}</span>
                </small>
              </div>
              <div className="weather">
                <img src={weatherData.current.condition.icon.replace('64x64', '50x50')} className="icon" alt="icon" width="50" height="50" />
                <span className="condition">{weatherData.current.condition.text}</span>
              </div>
            </div>
          )
        )}
      </div>
      <div className="panel">
        <form id="locationInput">
          <input type="text" className="search" placeholder="Search Location..." />
          <button type="submit" className="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>

        <ul className="cities">
          <li className="city" onClick={() => handleCityClick("New York")}>New York</li>
          <li className="city" onClick={() => handleCityClick("California")}>California</li>
          <li className="city" onClick={() => handleCityClick("Paris")}>Paris</li>
          <li className="city" onClick={() => handleCityClick("Tokyo")}>Tokyo</li>
        </ul>

        <div className="details">
          <h4>Weather Details</h4>
          <ul>
            <li>
              <span>Cloudy</span>
              <span className="cloud">{weatherData && weatherData.current.cloud}%</span>
            </li>
            <li>
              <span>Humidity</span>
              <span className="humidity">{weatherData && weatherData.current.humidity}%</span>
            </li>
            <li>
              <span>Wind</span>
              <span className="wind">{weatherData && weatherData.current.wind_kph}km/h</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
