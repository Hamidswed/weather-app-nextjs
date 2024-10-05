// src/app/home/page.js
"use client";

import SearchCity from "@/components/SearchCity";
import Weather from "@/components/weather/Weather";
import { useState } from "react";

const HomePage = () => {
  const [city, setCity] = useState("");

  return (
    <div className="w-full mx-auto h-full">
      <header className="py-10 bg-background-pattern bg-cover bg-center w-full overflow-hidden">
        <div className="container flex flex-col items-center justify-center w-full">
          <SearchCity setCity={setCity} />
          <Weather city={city} />
        </div>
      </header>
    </div>
  );
};

export default HomePage;
