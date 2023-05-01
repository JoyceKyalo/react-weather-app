import React, { useState } from "react";
import UserDate from "./UserDate";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weatherDetails, setWeatherDetails] = useState({ ready: false});

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
      city: response.data.name
    });
  }
  let searchForm = (
    <div className="search-form">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city"
          autoFocus
          onChange={updateCity}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );

  if (weatherDetails.ready) {
    return (
      <div>
        <div className="row">
          <div className="col-6">
            <div className="row common-cities">
              <div class="col-4">
                <a href="/">New York</a>
              </div>
              <div class="col-3 paris-city">
                <a href="/">Paris</a>
              </div>
              <div class="col-5">
                <a href="/">Shanghai</a>
              </div>
            </div>
            <UserDate date={weatherDetails.date} />
            
          </div>
          <div className="col-6">
            <div>{searchForm}</div>
            <ul className="current-weather-details">
              <li>Temperature: {Math.round(weatherDetails.temperature)}°C</li>
              <li>
                Description:{" "}
                <span id="weather-description">
                  {weatherDetails.description}
                </span>
              </li>
              <li>
                <img src={weatherDetails.icon} alt={weatherDetails.icon} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "2d5c28f46f35496c26b3294dfcae8329";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return <div>Loading</div>;
  }
}
