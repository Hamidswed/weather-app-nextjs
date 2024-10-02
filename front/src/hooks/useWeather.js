// src/hooks/useWeather.js
import { useState, useEffect } from "react";

const useWeather = (city) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWeatherByLocation = async (latitude, longitude) => {
      try {
        console.log("Fetching weather by location:", latitude, longitude);
        const response = await fetch(
          `/api/weather?lat=${latitude}&lon=${longitude}`
        );
        if (!response.ok) {
          throw new Error("Unable to fetch weather data.");
        }
        const data = await response.json();
        console.log("Weather data by location:", data);
        setWeather(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherByLocation(latitude, longitude);
        },
        () => {
          setError("Unable to retrieve your location.");
          setLoading(false);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
      setLoading(false);
    }
  }, []);

  // useEffect(() => {
  //   if (city) {
  //     fetchWeatherByCity(city);
  //   }else{

  //   }
  // }, [city]);

  const fetchWeatherByCity = async () => {
    console.log("inside bycity");
    setError("");
    // setWeather(null);
    setLoading(true);

    try {
      console.log("Fetching weather by city:", city);
      const response = await fetch(`/api/weather?city=${city}`);
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      const data = await response.json();
      console.log("Weather data by city:", data);
      setWeather(data);
    } catch (error) {
      console.error("Error fetching weather by city:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  console.log("after setWeather by click", weather);

  return { weather, loading, error, setError, fetchWeatherByCity };
};

export default useWeather;
