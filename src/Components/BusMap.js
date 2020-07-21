import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

import './Component.css';

mapboxgl.accessToken ='pk.eyJ1IjoiZGFuYXJhZGRhZCIsImEiOiJja2N0OWlvc28wZXQ4MnhwZDBlNGFrcGw2In0.SyNokr-l0zFcJRBdHqF-Yw';

const BusMap = () => {
  const mapContainerRef = useRef(null);
  
  var coordinates = document.getElementById('coordinates');
  // initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      // See style options here: https://docs.mapbox.com/api/maps/#styles
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [35.29, 32.211],
      zoom: 11,
    });
    
    var marker = new mapboxgl.Marker({
      draggable: true,color: '#19E3C7'
      })
      .setLngLat([35.29, 32.211])
      .addTo(map);
    
    var marker2 = new mapboxgl.Marker({
        draggable: true,color: '#C93785'
        })
        .setLngLat([35.23, 32.231])
        .addTo(map);

    var marker3 = new mapboxgl.Marker({
            draggable: true,color: '#54D20C'
            })
            .setLngLat([35.25, 32.231])
            .addTo(map);
    
    var marker4 = new mapboxgl.Marker({
                draggable: true,color: '#E3A929'
                })
                .setLngLat([35.243, 32.211])
                .addTo(map);
    
    
      function onDragEnd() {
      var lngLat = marker.getLngLat();
      var lngLat = marker2.getLngLat();
      var lngLat = marker3.getLngLat();
      var lngLat = marker4.getLngLat();
      }
       
      marker.on('dragend', onDragEnd);
      marker2.on('dragend', onDragEnd);
      marker3.on('dragend', onDragEnd);
      marker4.on('dragend', onDragEnd);
    // add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
    
    // clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <div className="map-container" ref={mapContainerRef} />;
};

export default BusMap;

