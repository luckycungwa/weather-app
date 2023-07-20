import logo from "./logo.svg";
import "./App.css";
import Card from "./comp/Card.jsx";
import Forecast from "./comp/Forecast";
import WeatherData from "./comp/WeatherData";

//

function App() {
  return (
    <div className="background">
      <div className="app-container glass">
      {/* replace strings with props that carry data from api */}

      {/* MAIN WEATHER INFORMATION FROM THE API */}
      {/* <Forecast temp="25 &deg;C" city="Johannesburg," date="Thursday, August 2023" country="South Africa"/> */}
      <Forecast/>

      {/* CARD SECTION FOR WEATHER WIDGET */}
        <div className="feature-section row bottom">
       
          {/* <Card heading="Wind Status" title="7.2" subTitle="Km/h" />
          <br/>
          <br/>
          <Card heading="Humidity" title="16" subTitle="%" />
           <br/>
          <br/>
          <Card heading="Cloudiness" title="12" subTitle="%" />
           <br/>
          <br/>
          <Card heading="Sunset/Sunrise" title="18:12" subTitle="05:54" /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
