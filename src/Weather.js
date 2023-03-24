import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [weatherDetails, setWeatherDetails] = useState({});

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
    setLoaded(true);
    setWeatherDetails({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  let searchForm = (
    <div className="search-form">
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Enter a city" onChange={updateCity} />
        <button>Search</button>
      </form>
    </div>
  );

  if (loaded) {
    return (
      <div>
        <div>{searchForm}</div>
        <ul className="current-weather-details">
          <li>Temperature: {Math.round(weatherDetails.temperature)}°C</li>
          <li>
            Description:{" "}
            <span id="weather-description">{weatherDetails.description}</span>
          </li>
          <li>
            <img src={weatherDetails.icon} alt={weatherDetails.icon} />
          </li>
        </ul>
      </div>
    );
  } else {
    return <div>{searchForm}</div>;
  }
}
