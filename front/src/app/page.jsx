// src/app/home/page.js
"use client";

import SearchCity from "@/components/SearchCity";
import WeatherData from "@/components/WeatherData";
import { useState } from "react";

const HomePage = () => {
  const [city, setCity] = useState("");

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="mb-4">Welcome to the Home Page</h1>
      <SearchCity setCity={setCity}/>
      <WeatherData city={city}/>
    </div>
  );
};

export default HomePage;
