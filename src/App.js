import './App.css';
//importing necessary hooks from react
import React, { useEffect, useState } from 'react';
import WeatherCard from './components/Weather';

function App() {

  //then I set three states: one for lat, one for long, and one to set the state for data.
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

    //lat and long are gotten using navigator.geolocation.
    //setLat and setLong are used to set the states for latitude and longitude.

  //then I create the useEffect function
  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    }

  fetchData();

  }, [lat, long]);


//if data is undefined, it shows up as an empty div. Since fetchData() is an async function, the conditonal check (ternary) within the
//return statement is requried, as it loads the function after all other functions are done executing.

  return (
    <div className="App">
      {(typeof data.main != 'undefined') ? (
        <WeatherCard weatherdata={data} />
      ) : (
        <div></div>
      )}

    </div>
  );
}

export default App;
