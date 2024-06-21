import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WeatherApp from './WeatherApp';
import Navbarz from './Navbarz';
import HomeDashboard from './HomeDashboard';
import MapComponent from './MapComponent';
import LocationDisplay from './LocationDisplay';
import ChatComponent from './ChatComponent';
import Weather from './Weather';
import Contact from './contact';
import Help from './Help';

const App = () => {
  const [location, setLocation] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbarz />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Help />} />
        <Route path="/home" element={<HomeDashboard setLocation={setLocation} />} />
        <Route path="/home/weatherapp" element={<WeatherApp />} /> 
        <Route path="/home/mapcomponent" element={<MapComponent latitude={location?.latitude} longitude={location?.longitude} />} /> 
        <Route path="/home/locationdisplay" element={<LocationDisplay setLocation={setLocation} />} />
        <Route path="/home/chatcomponent" element={<ChatComponent />} /> 
        <Route path="/home/weather" element={<Weather />} />  
      </Routes>
    </Router>
  );
};

export default App;
