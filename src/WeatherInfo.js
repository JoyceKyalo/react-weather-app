import React from "react";
import "./WeatherInfo.css";
import UserDate from "./UserDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="row">
        <div className="col-6">
          <div className="row common-cities">
            <div className="col-4">
              <a href="/">New York</a>
            </div>
            <div className="col-3 paris-city">
              <a href="/">Paris</a>
            </div>
            <div className="col-5">
              <a href="/">Shanghai</a>
            </div>
          </div>
          <h1>{props.details.city}</h1>
          <UserDate date={props.details.date} />
        </div>
        <div className="col-6">
          <ul className="current-weather-details">
            <WeatherTemperature celsius={props.details.temperature} />
            <li>
              Description:{" "}
              <span id="weather-description" className="text-capitalize">
                {props.details.description}
              </span>
            </li>
            <li>
              <img src={props.details.icon} alt={props.details.description} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
