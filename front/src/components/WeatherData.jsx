import Loading from "./Loading";
import fahrenheitToCentigrade from "@/utils/fahrenToCenti";
import { useMutation } from "@tanstack/react-query";
import { getWeatherData } from "@/services/weatherService";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";

const WeatherData = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const { mutateAsync, isPending } = useMutation({
    mutationFn: getWeatherData,
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
    } catch (error) {
      toast.error(error);
    }
  }, [city, mutateAsync]);

  if (isPending) return <Loading />;
  if (!weatherData) return null;

  const iconUrl = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;

  return (
    <div className="mt-4 flex items-center justify-between">
      <div>
        <h2>{weatherData?.name}</h2>
        <p>Temperature: {fahrenheitToCentigrade(weatherData?.main.temp)} °C</p>
        <p>Weather: {weatherData?.weather[0].description}</p>
      </div>
      <div>
        <img src={iconUrl} alt={weatherData.weather[0].description} />
      </div>
    </div>
  );
};

export default WeatherData;
