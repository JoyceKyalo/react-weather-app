import React from "react";
import "./WeatherInfo.css";
import UserDate from "./UserDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="row">
        <div className="col city-side">
          <h1>{props.details.city}</h1>
         <UserDate date={props.details.date} />
        </div>
        <div className="col">
          <ul className="current-weather-details">
            <WeatherTemperature celsius={props.details.temperature} />
            <li>
              Description:
              <span id="weather-description" className="text-capitalize">
                {props.details.description}
              </span>
            </li>
            <li>
              <img src={props.details.icon} alt={props.details.description} className="WeatherInfo-icon"/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
