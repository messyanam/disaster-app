import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine';
import axios from 'axios';

const MapComponent = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      return;
    }

    // Initialize the map
    const map = L.map('map').setView([40.7127281, -74.0060152], 13);
    mapRef.current = map; // Store the map instance in the ref

    // Add tile layer to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
      errorTileUrl: 'https://via.placeholder.com/256' // Use a placeholder image for missing tiles
    }).addTo(map);

    const fetchRoute = async () => {
      try {
        const response = await axios.get('https://fast-routing.p.rapidapi.com/route/v1/driving/-74.0060152,40.7127281;-74.01,40.71', {
          params: {
            steps: 'true',
            overview: 'false',
            exclude: 'ferry'
          },
          headers: {
            'X-RapidAPI-Host': 'fast-routing.p.rapidapi.com',
            'X-RapidAPI-Key': '361ab8e565msh784eb50a3a4a562p10b4d7jsn54f745b0a87b'
          }
        });

        const routeCoordinates = response.data.routes[0].geometry.coordinates.map(coord => [coord[1], coord[0]]);

        L.Routing.control({
          waypoints: routeCoordinates.map(coords => L.latLng(coords)),
          createMarker: () => null,
          lineOptions: {
            styles: [{ color: 'blue', opacity: 0.6, weight: 4 }]
          }
        }).addTo(map);
      } catch (error) {
        console.error('Error fetching route:', error);
      }
    };

    fetchRoute();

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return <div id="map" style={{ height: '500px', width: '100%' }} />;
};

export default MapComponent;
