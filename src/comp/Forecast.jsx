import React from "react";
import { useState } from "react";
import SearchBtn from "./SearchBtn";
// IMPORT EXTERNAL API HANDLING SCRIPT
import WeatherData from "./WeatherData";
//IMPORT CARD FOR DISPLAYING DATA ATER SEPARATING SCRIPTS
import Card from "./Card.jsx";

const Forecast = () => {
  // SEARCH BUTTON STUFF

  // Extract relevant data from weatherData
  // referencing external api handling script

  const [myCity, setMyCity] = useState("Johannesburg"); // Default city name here
  const { weatherInfo, error, loading } = WeatherData(myCity);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // PREVENT NULL WEATHERINFO - Before destructuring
  const { main, sys, wind, clouds, dt } = weatherInfo || {};
  const temp = main?.temp; // Temperature in Kelvin
  const humidity = main?.humidity; // Humidity percentage
  const windSpeed = wind?.speed; // Wind speed in meters per second (m/s)
  const cloudiness = clouds?.all; // Cloudiness percentage
  const { country, sunrise, sunset } = sys || {};
  const date = new Date(dt * 1000).toDateString();
  const time = new Date(dt * 1000).toLocaleTimeString();

  // MAYBE MAKE A FUNCTION FOR DEAAFAULT LOCATION AS THE SEARCH RESULTS

  // // { country, temp, city, date, time }  //props

  return (
    <div className="">
      <div className="">
        <img className="forecast-img" src="./bg01.jpg" alt="background" />
        <div className="search-bar">
          <SearchBtn
            placeholder="Enter City Name"
            value={myCity}
            onChange={(e) => setMyCity(e.target.value)}
          />
        </div>
      </div>
      {/* MAIN INFORMATION SECTION */}

      <div class="forecast-info ">
        {/* must convert figures into celcius/kelvin/ or farenheight */}
        <h1 className="temp-text row">
          <span className=""> {`${temp}°C`}</span>
          <i className="qi-high-temperature temprature-icon" />
        </h1>
        <div>
          <p className="large left">{`${myCity || "N/A"},`}</p>
          <br />
          <br />
          <p className="medium left">{`${country || "N/A"}`}</p>
          <br />
          <br />
          <br />
          <br />
          <p className="small left">{date}</p>
        </div>
      </div>

      {/* CARD | FEATURE SECTION */}
      <div className="absolute feature-section row bottom">
          {/* use optional chaining for friendly access of my weather data */}
          <Card
            iconClass="qi-dust-raising-winds icon"
            heading="Wind Status"
            title={`${windSpeed || "N/A"}`}
            subTitle="m/s"
          />
          <Card
            iconClass="qi-rain icon"
            heading="Humidity"
            title={`${humidity || "N/A"}%`}
          />
          <Card
            iconClass="qi-unknown icon"
            heading="Cloudiness"
            title={`${cloudiness || "N/A"}%`}
          />
          <Card
            iconClass="qi-cloudy icon"
            heading="Sunrise | Sunset"
            subTitle={`${new Date(
              sunrise * 1000
            ).toLocaleTimeString()}, ${new Date(
              sunset * 1000
            ).toLocaleTimeString()}`}
          />
        </div>
    </div>
  );
};

export default Forecast;
