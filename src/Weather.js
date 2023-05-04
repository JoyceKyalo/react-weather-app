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
    let apiKey = "0534b4bf77df82f13f307a8bcbtddo1d";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setWeatherDetails({
      ready: true,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
      date: new Date(response.data.time * 1000),
      city: response.data.city,
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
    let apiKey = "0534b4bf77df82f13f307a8bcbtddo1d";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return <div>Loading...</div>;
  }
}
