import React, { useState } from 'react';

const LocationDisplay = ({ setLocation }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [locationData, setLocationData] = useState({});

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          if (latitude && longitude) {
            const locationData = { latitude, longitude };
            setLocation(locationData);
            setLocationData(locationData);
            setLoading(false);
          } else {
            setError('Latitude and longitude not available.');
            setLoading(false);
          }
        },
        error => {
          console.error('Error fetching browser geolocation:', error);
          setError('Error fetching location data.');
          setLoading(false);
        }
      );
    } else {
      console.log('Browser geolocation is not available.');
      setError('Browser geolocation is not available.');
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          <h2>Your Current Location:</h2>
          <p>Latitude: {locationData.latitude}</p>
          <p>Longitude: {locationData.longitude}</p>
        </div>
      )}
      <button onClick={handleGetLocation}>Get My Location</button>
    </div>
  );
};

export default LocationDisplay;
