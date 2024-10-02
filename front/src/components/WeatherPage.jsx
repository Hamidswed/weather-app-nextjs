"use client";

import useWeather from "@/hooks/useWeather";

const WeatherPage = ({ weather }) => {
  console.log("weather in WeatherPage", weather);

  if (!weather) {
    return <div>No weather data available.</div>;
  }

  return (
    <div className="mt-4">
      <h2>{weather.name}</h2>
      <p>Temperature: {weather.main.temp} °C</p>
      <p>Weather: {weather.weather[0].description}</p>
    </div>
  );
};

export default WeatherPage;
