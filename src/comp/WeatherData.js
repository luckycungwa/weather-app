// SCRIPT FOR FETCHING WEATHER DATA || hook script
import React, { useState, useEffect } from "react";

// NEW SEPARATE SCRIPT FOR DATA MANAGEMENT FROM API
const WeatherData = (myCity) => {
  // { country, temp, city, date, time }  //props
  const [weatherInfo, setWeatherInfo] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState(null);


  // USING FETCH APPROACH
  const fetchData = async () => {
    //ensure a valid value i put initialy
    const apiKey = "1c828853e0fda83738437c444e7ad7c2";
    // const myCity = "Tembisa"; // Name of the city the user must fetch data from
    const apiUrl =
      `https://api.openweathermap.org/data/2.5/weather?q=` +
      myCity +
      `&appid=` +
      apiKey;

    try {
      // fetch weather icons with corresponding weather details
      const { weather } = data;
      
    if (weather && weather.length > 0) {
      setWeatherIcon(weather[0].icon); // Set the weather icon code
    }
      // 
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if (data.cod !== 200) {
        throw new Error(data.message || "Unknown error occurred");
      }
      setWeatherInfo(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    // FETCHING DATA AND HANDLING ERRORS
    fetchData();
  }, []);

  const refetch = () => {
    fetchData();
  };

  if (!weatherInfo) {
    // display loading screen or something while fetching data
    return <div>Please wait, Loading...</div>;
  }
  // DISPLAY FETCHED DATA FROM THE API
  return { weatherInfo, refetch, loading, error };
};

export default WeatherData;
