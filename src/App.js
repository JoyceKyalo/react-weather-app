import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h2>Weather App</h2>
          <Weather defaultCity="Nairobi"/>
        </header>
      </div>
      <small id="github-link">
        <a href="https://github.com/JoyceKyalo/react-weather-app" target="_blank" rel="noreferrer">
          Open-source code
        </a>{" "}
        by Joyce Kyalo
      </small>
    </div>
  );
}

export default App;
