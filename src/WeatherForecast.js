import React from "react";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let city = props.details.city;
  let apiKey = "0534b4bf77df82f13f307a8bcbtddo1d";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);

  function handleResponse(response){
    console.log(response.data);
  }

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
