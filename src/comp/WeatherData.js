// SCRIPT FOR FETCHING WEATHER DATA || hook script
import React, { useState, useEffect } from "react";

// NEW SEPARATE SCRIPT FOR DATA MANAGEMENT FROM API

const WeatherData = (myCity) => {
  // { country, temp, city, date, time }  //props
  const [weatherInfo, setWeatherInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // USING FETCH APPROACH

         //ensure a valid value i put initialy

  
  useEffect(() => {
    const apiKey = "1c828853e0fda83738437c444e7ad7c2";
    // const myCity = "Tembisa"; // Name of the city the user must fetch data from
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=` + myCity + `&appid=` + apiKey ;

    // FETCHING DATA AND HANDLING ERRORS
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setWeatherInfo(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [myCity]);

  if (!weatherInfo) {
    return <div>Loading...</div>;
  }
  // DISPLAY FETCHED DATA FROM THE API
    return {weatherInfo, loading, error};
};

export default WeatherData;
