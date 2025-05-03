import React from 'react';

function WeatherCard({ city, temperature, description, icon }) {
  return (
    <div style={{ textAlign: 'center', padding: '20px', border: '1px solid #ddd', borderRadius: '10px', width: '250px', margin: '20px auto' }}>
      <h2>{city}</h2>
      <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt={description} />
      <p>{temperature}°C</p>
      <p>{description}</p>
    </div>
  );
}

function App() {
  const city = "London";
  const temperature = 18;
  const description = "Clear Sky";
  const icon = "01d"; // Clear sky icon from OpenWeatherMap

  return (
    <div style={{ padding: '50px' }}>
      <h1>Weather App</h1>
      <WeatherCard
        city={city}
        temperature={temperature}
        description={description}
        icon={icon}
      />
    </div>
  );
}

export default App;
