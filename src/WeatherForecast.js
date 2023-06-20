import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastData from "./WeatherForecastData";

export default function WeatherForecast(props) {
  let city = props.details.city;
  let [forecastData, setForecastData] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    console.log(response.data);
    setForecastData(response.data.daily[0]);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastData data={forecastData} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "0534b4bf77df82f13f307a8bcbtddo1d";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
