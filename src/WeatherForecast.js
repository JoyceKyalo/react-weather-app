import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <div>
            <img src={props.details.icon} alt={props.details.description} className="WeatherForecast-icon"/>
          </div>
          <div>
            <span>21°C</span>
            <span>19°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
