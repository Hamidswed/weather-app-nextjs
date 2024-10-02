// src/app/home/page.js
"use client";

import SearchCity from "@/components/SearchCity";
import WeatherPage from "@/components/WeatherPage";
import useWeather from "@/hooks/useWeather";
import { useState } from "react";

const HomePage = () => {
  const [city, setCity] = useState("");
  const { weather, loading, error } = useWeather(city);

  console.log("Weather in HomePage", weather);
  console.log("City in HomePage", city);

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="mb-4">Welcome to the Home Page</h1>
      <SearchCity setCity={setCity} city={city} />
      {loading && <p>Loading...</p>}
      {error && <p className="text-error">{error}</p>}
      {weather && <WeatherPage weather={weather} />}
    </div>
  );
};

export default HomePage;
