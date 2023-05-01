import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weatherDetails, setWeatherDetails] = useState({ ready: false });

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "2d5c28f46f35496c26b3294dfcae8329";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setWeatherDetails({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
    });
  }

  if (weatherDetails.ready) {
    return (
      <div>
        <div>
          <div className="search-form">
            <form onSubmit={handleSubmit} >
              <input
                type="search"
                placeholder="Enter a city"
                autoFocus
                onChange={updateCity}
                className="search-space"
              />
              <input type="submit" value="Search" className="search-button"/>
            </form>
          </div>
        </div>
        <WeatherInfo details={weatherDetails} />
      </div>
    );
  } else {
    let apiKey = "2d5c28f46f35496c26b3294dfcae8329";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return <div>Loading...</div>;
  }
}
