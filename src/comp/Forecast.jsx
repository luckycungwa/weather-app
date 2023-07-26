import React from "react";
import { useState, useEffect } from "react";
// import SearchBtn from "./SearchBtn";
// IMPORT EXTERNAL API HANDLING SCRIPT
import WeatherData from "./WeatherData";
//IMPORT CARD FOR DISPLAYING DATA ATER SEPARATING SCRIPTS
import Card from "./Card.jsx"; //this is a false alarm because we renamed component from 'card.JSX'

const Forecast = () => {
  const [myCity, setMyCity] = useState("Tembisa"); // Default city name here
  const { weatherInfo, refetch, error, loading } = WeatherData(myCity);
  const [tempUnit, setTempUnit] = useState("celsius"); // Default temperature unit is Celsius

  if (loading) {
    return <div>Loading data from API...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Extract relevant data from weatherData
  // referencing external api handling script

  // initializing the neccesary data fromthe api
  const { main, sys, wind, clouds, dt } = weatherInfo || {};
  const temp = main?.temp; // Temperature in Kelvin
  const humidity = main?.humidity; // Humidity percentage
  const windSpeed = wind?.speed; // Wind speed in meters per second (m/s)
  const cloudiness = weatherInfo?.clouds?.all; // Cloudiness percentage
  const weatherDescription = weatherInfo?.weather[0]?.description; //extracting the description if available
  const cityName = weatherInfo?.name; // Extract name o fthe city
   // creating a url for icons
  //  const iconCode = weatherInfo.weather[0]?.icon;
  //  const iconUrl = iconCode ? 'https://openweathermap.org/img/wn/' + iconCode + '.png' : null;
  // const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

  const { country, sunrise, sunset } = sys || {};
  const date = new Date(dt * 1000).toDateString();
  const time = new Date(dt * 1000).toLocaleTimeString();

  // MAYBE MAKE A FUNCTION FOR DEAAFAULT LOCATION AS THE SEARCH RESULTS
  // FORMAT TIME TO 24H
  const formatTimeTo24Hour = (timestamp) => {
    const dateObject = new Date(timestamp * 1000);
    const hours = String(dateObject.getHours()).padStart(2, "0");
    const minutes = String(dateObject.getMinutes()).padStart(2, "0");

    return `${hours}:${minutes}`;
  };

  const sunriseTime = formatTimeTo24Hour(sunrise);
  const sunsetTime = formatTimeTo24Hour(sunset);

  // handle button click
  const handleSearch = (cityName) => {
    // Perform search only if the input is not empty
    if (myCity.trim() !== "") {
      refetch();
    }
  };

  // TEMRATURE CONVERSION STUFF
  //convert temperature from Celsius to Fahrenheit
  const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

  // from Fahrenheit to Celsius
  const fahrenheitToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;

  // Function to toggle between Celsius and Fahrenheit temperature units
// Function to handle the Celsius radio button click
const handleCelsiusClick = () => {
  setTempUnit("celsius");
};

// Function to handle the Fahrenheit radio button click
const handleFahrenheitClick = () => {
  setTempUnit("fahrenheit");
};

  return (
    <>
      <div className="radio-inputs">
      <label className="radio">
          <input
            type="radio"
            name="radio"
            checked={tempUnit === "celsius"}
            onChange={handleCelsiusClick}
          />
          <span className="name">Celcius (°C)</span>
        </label>
        <label className="radio">
          <input
            type="radio"
            name="radio"
            checked={tempUnit === "fahrenheit"}
            onChange={handleFahrenheitClick}
          />
          <span className="name">Fahrenheit (°F)</span>
        </label>
      </div>

      <div className="app-container glass">
        <div className="forecast-card row">
          <div className="">
            <img className="forecast-img" src="./bg01.jpg" alt="background" />

            {/* CARD | FEATURE SECTION */}
            <div className="feature-section  ">
              {/* use optional chaining for friendly access of my weather data */}
              <div className="row gap ">
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
                  subTitle={`${sunriseTime} | ${sunsetTime}`}
                />
              </div>
            </div>
            <div className="search-bar right forecast-info">
              <div className="row gap">
                <input
                  className="search-input"
                  placeholder="Find your city"
                  type="text"
                  name="search"
                  value={myCity}
                  onChange={(e) => setMyCity(e.target.value)}
                ></input>
                <button className="" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </div>
          {/* MAIN INFORMATION SECTION */}
          <div class="forecast-info ">
            <p className="medium">{weatherDescription}</p>
            {/* must convert figures into celcius/kelvin/ or farenheight */}
            <h1 className="temp-text row">
            
              {tempUnit === "celsius" ? `${celsiusToFahrenheit(temp)}°C` : `${fahrenheitToCelsius(temp)}°F`}
              {/* <i className="qi-high-temperature temprature-icon" /> */}
              <div>
                {/* Display the weather icon image */}
                
              </div>
            </h1>

            <div>
              <br />
              <p className="large">
                {`${cityName || "N/A"}, `}
                <span className="medium">{` ${country || "N/A"}`}</span>
              </p>

              <br />
              <br />
              <p className="small left">
                {date}, {time}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forecast;
