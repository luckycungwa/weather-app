
import "./App.css";
import Card from "./comp/Card.jsx"; //this is a false alarm because we renamed component from 'card.JSX'
import Forecast from "./comp/Forecast";

//
function App() {
  return (
    <div className="background">
      <div className="">
        {/* MAIN WEATHER INFORMATION FROM THE API */}
        {/* <Forecast temp="25 &deg;C" city="Johannesburg," date="Thursday, August 2023" country="South Africa"/> */}
        <Forecast />
      </div>
    </div>
  );
}

export default App;
