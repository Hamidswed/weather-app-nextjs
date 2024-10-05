import { useMutation } from "@tanstack/react-query";
import { getWeatherData } from "@/services/weatherService";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import WeatherData from "./WeatherData";
import Loading from "../Loading";
import WeatherDetail from "./WeatherDetail";
import WeatherSun from "./WeatherSun";

const Weather = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const { mutateAsync, isPending, error } = useMutation({
    mutationFn: getWeatherData,
    onError: (error) => {
      console.error("Error fetching weather data:", error.message);
      toast.error("Failed to fetch weather data. Please try again.");
    },
  });

  useEffect(() => {
    try {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;

            const data = await mutateAsync({
              city,
              lat: latitude,
              lon: longitude,
            });
            setWeatherData(data);
          },
          () => {
            toast.error("Unable to retrieve your location.");
          }
        );
      } else {
        toast.error("Geolocation is not supported by this browser.");
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      toast.error("An unexpected error occurred. Please try again.");
    }
  }, [city, mutateAsync]);

  if (isPending) return <Loading color="rgb(var(--color-secondary-0))" />;
  if (!weatherData) return null;

  return (
    <div className="mt-4 w-full grid grid-cols-1 gap-4 justify-items-center lg:grid-cols-3">
      <WeatherData weatherData={weatherData} />
      <WeatherDetail weatherData={weatherData} />
      <WeatherSun weatherData={weatherData} />
    </div>
  );
};

export default Weather;
