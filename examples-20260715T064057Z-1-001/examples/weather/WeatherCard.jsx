import React, { useState, useEffect } from "react";
import "./WeatherCard.css";

const WeatherCard = () => {
  const [weather, setWeather] = useState({
    temperature: 28,
    condition: "Sunny",
    location: "Bangalore, India",
  });

  const weatherIcons = {
    Sunny: "☀️",
    Rainy: "🌧️",
    Cloudy: "☁️",
    Snowy: "❄️",
    Windy: "🌬️",
  };

  // Optional: Simulate fetching updated weather data
  useEffect(() => {
    const interval = setInterval(() => {
      const conditions = ["Sunny", "Rainy", "Cloudy", "Snowy", "Windy"];
      const randomCondition =
        conditions[Math.floor(Math.random() * conditions.length)];
      const randomTemperature = Math.floor(Math.random() * 15) + 15;

      setWeather({
        temperature: randomTemperature,
        condition: randomCondition,
        location: "Bangalore, India",
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="weather-card">
      <div className="weather-header slide-up">
        <h2>{weather.location}</h2>
      </div>
      <div className="weather-details slide-up">
        <div className="weather-icon">
          {weatherIcons[weather.condition] || "❓"}
        </div>
        <div className="weather-info">
          <h1>{weather.temperature}°C</h1>
          <h3>{weather.condition}</h3>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
