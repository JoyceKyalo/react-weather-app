import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastData from "./WeatherForecastData";

export default function WeatherForecast(props) {
  console.log(props);
  let city = props.city;
  let [forecastData, setForecastData] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    console.log(response.data);
    setForecastData(response.data.daily);
    setLoaded(true);
  }

useEffect(() =>{
  setLoaded(false);
}, [city]);

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecastData.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastData data={dailyForecast} />
                </div>
              );
            }
            return null;
          })}
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
