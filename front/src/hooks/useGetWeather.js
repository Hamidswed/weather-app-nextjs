"use client";

import { getWeatherData } from "@/services/weatherService";
import { useQuery } from "@tanstack/react-query";

const useGetWeather = ({city,lan,lon}) => {
  return useQuery({
    queryKey: ["get-weather"],
    queryFn: () => getWeatherData({city,lan,lon}),
  });
};

export default useGetWeather;
