import React from "react";

export default function WeatherTemperature(props) {
  return <li>Temperature: {Math.round(props.celsius)} °C</li>;
}
