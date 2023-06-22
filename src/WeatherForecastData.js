import React from "react";
import "./WeatherForecastData.css";

export default function WeatherForecastData(props) {
    function day(){
        let date = new Date(props.data.time * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return days[day];
    }
  function maxTemperature() {
    let temp = Math.round(props.data.temperature.maximum);
    return `${temp}°`;
  }

  function minTemperature() {
    let temp = Math.round(props.data.temperature.minimum);
    return `${temp}°`;
  }
  return (
    <div>
      <div className="WeatherForecast-day">
        {day()}
        <div>
          <img
            src={props.data.condition.icon_url}
            alt={props.data.condition.description}
            className="WeatherForecast-icon"
          />
        </div>
        <div>
          <span id="max-temperature">{maxTemperature()}</span>
          <span id="min-temperature">{minTemperature()}</span>
        </div>
      </div>
    </div>
  );
}
