// src/app/home/page.js
"use client";

import SearchCity from "@/components/SearchCity";
import WeatherData from "@/components/WeatherData";
import { useState } from "react";

const HomePage = () => {
  const [city, setCity] = useState("");

  return (
    <div className="w-full mx-auto">
      <header className="relative py-10 bg-background-pattern bg-cover bg-center max-h-64 w-full overflow-hidden">
        <div className="container relative z-10">
          <SearchCity setCity={setCity} />
          <WeatherData city={city} />
        </div>
      </header>
    </div>
  );
};

export default HomePage;
