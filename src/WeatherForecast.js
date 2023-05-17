import React from "react";

export default function WeatherForecast(props) {
  return (
    <div>
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <div>
            <img src={props.details.icon} alt={props.details.description} />
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
