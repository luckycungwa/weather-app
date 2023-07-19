import React from "react";

const Forecast = ({ country, temp, city, date, time }) => {
  return (
    <div className="forecast-card row">
      <div className="">
        <img className="forecast-img" src="./bg01.jpg" alt="background" />
      </div>

      <div class="forecast-info">
        <h1 className="temp-text">{temp}</h1>
        <p className="large left">{city}</p>
        <br />
        <br />
        <p className="medium left">{country}</p>
        <br />
        <br />
        <h3 className="small left">{date}</h3>
      </div>

      <div className="forecast-info right">
        <img className="forecast-icon" src="../cloudy.png" alt="status-icon" />
      </div>
    </div>
  );
};

export default Forecast;
