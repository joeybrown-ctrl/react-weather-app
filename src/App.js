import './App.css';
//importing necessary hooks from react
import React, { useEffect, useState } from 'react';

function App() {

  //then I set two states: one for lat and one for long
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

  //then I create the useEffect function
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    //lat and long are gotten using navigator.geolocation.
    //setLat and setLong are used to set the states for latitude and longitude.

    console.log("Latitude is:", lat);
    console.log("Longitude is:", long);
  }, [lat, long]);

  return (
    <div className="App">
    </div>
  );
}

export default App;
