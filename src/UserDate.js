import React from "react";

export default function UserDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
 let currentTime = props.date.toLocaleTimeString('en-US');
  let day = days[props.date.getDay()];
 

  return (
    <div>
      {day}{" "}
      {currentTime}
    </div>
  );
}
