import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

import './Component.css';

mapboxgl.accessToken ='pk.eyJ1IjoiZGFuYXJhZGRhZCIsImEiOiJja2N0OWlvc28wZXQ4MnhwZDBlNGFrcGw2In0.SyNokr-l0zFcJRBdHqF-Yw';
mapboxgl.setRTLTextPlugin(
  'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js',
  null,
  true // Lazy load the plugin
  );
const SMap = () => {
  const mapContainerRef = useRef(null);
  
  var coordinates = document.getElementById('coordinates');
  // initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      // See style options here: https://docs.mapbox.com/api/maps/#styles
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [35.29, 32.211],
      zoom: 12,
    });
    var marker = new mapboxgl.Marker({
      draggable: true
      })
      .setLngLat([35.29, 32.211])
      .addTo(map);
       
      function onDragEnd() {
      var lngLat = marker.getLngLat();
      
      }
       
      marker.on('dragend', onDragEnd);
    // add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
    
    // clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <div className="map-container" ref={mapContainerRef} />;
};

export default SMap;