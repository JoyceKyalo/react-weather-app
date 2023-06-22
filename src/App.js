import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h2>Weather App</h2>
          <Weather defaultCity="Nairobi" />
        </header>
      </div>
      <small id="github-link">
        This project was coded by Joyce Kyalo and is{" "}
        <a
          href="https://github.com/JoyceKyalo/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://effulgent-salmiakki-94337f.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
      </small>
    </div>
  );
}

export default App;
