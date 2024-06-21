import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const HomeDashboard = ({ setLocation }) => {
  const navigate = useNavigate();


  return (
    <div style={{ textAlign: 'center', position: 'relative' }}>
      <h1>WELCOME</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '50px', marginBottom: '50px' }}>
        <img
          src="https://img.freepik.com/premium-vector/weather-cloud-sun-rain-lightning-logo-design-symbol-icon-template_23729-1786.jpg"
          alt="Weather"
          onClick={() => navigate("/home/weatherapp")}
          style={{ width: '100px', height: '100px', cursor: 'pointer' }}
        />
        <img
          src="https://png.pngtree.com/png-clipart/20230328/ourmid/pngtree-location-icon-png-image_6672610.png"
          alt="Location"
          onClick={() => navigate("/home/locationdisplay")}
          style={{ width: '200px', height: '100px', cursor: 'pointer' }}
        />
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', marginBottom: '50px' }}>
        <img
          src="https://icons.iconarchive.com/icons/double-j-design/iphone4-mini/256/weather-icon.png"
          alt="History"
          onClick={() => navigate("/home/weather")}
          style={{ width: '300px', height: '100px', cursor: 'pointer' }}
        />
       
          <img
           src="https://icon2.cleanpng.com/20240216/isy/transparent-google-maps-logo-large-detailed-map-with-red-pin-1710875330618.webp"
           alt="Map"
           onClick={() => navigate("/home/mapcomponent")}
            style={{ width: '100px', height: '100px', cursor: 'pointer' }}
          />

      </div>
      
    
        <img
        src="https://t3.ftcdn.net/jpg/03/26/78/92/360_F_326789207_j2xiy5Ih9k6k0wtzZWs1n5dWpnlu7kEh.jpg"
        alt="Chat"
        onClick={() => navigate("/home/chatcomponent")}
  
          style={{ width: '100px', height: '100px', cursor: 'pointer',position: 'absolute', top: '5px', right: '5px' }}
        />
     
    </div>
  );
};

export default HomeDashboard;
