import React, { useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [date, setDate] = useState('');
  const [error, setError] = useState(null);

  const fetchWeatherData = async () => {
    const apiKey = '45b9949cc8msha94b9045eb1f2d8p1e7133jsnce6ad0ec65ee'; // Replace with your RapidAPI key
    const station = '03772'; // Weather station ID for Washington, DC (or any desired location)

    const options = {
      method: 'GET',
      url: 'https://meteostat.p.rapidapi.com/stations/daily',
      headers: {
        'x-rapidapi-host': 'meteostat.p.rapidapi.com',
        'x-rapidapi-key': apiKey,
      },
      params: {
        station: station,
        start: date,
        end: date,
        units: 'imperial',
      }
    };

    try {
      const response = await axios.request(options);
      console.log('Fetched data:', response.data); // Log fetched data
      setWeatherData(response.data.data[0]);
      setError(null); // Clear previous errors
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError("Error fetching weather data. Please try again.");
    }
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const formatWeatherData = (data) => {
    if (!data) {
      return <p>No weather data available for the selected date.</p>;
    }

    return (
      <div style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
        <h3>{new Date(data.date).toDateString()}</h3>
        <p>Temperature: {data.tmax}°F / {data.tmin}°F</p>
        <p>Precipitation: {data.prcp} inches</p>
      </div>
    );
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Weather Data</h1>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <input
          type="date"
          placeholder="Enter date"
          value={date}
          onChange={handleDateChange}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <button onClick={fetchWeatherData} style={{ padding: '5px 10px' }}>Fetch Weather</button>
      </div>
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      {weatherData && (
        <div>
          <h2 style={{ textAlign: 'center' }}>Weather Data for {date}</h2>
          <div>{formatWeatherData(weatherData)}</div>
        </div>
      )}
    </div>
  );
};

export default Weather;
