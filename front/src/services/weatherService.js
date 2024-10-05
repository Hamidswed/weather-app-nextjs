import http from "./httpService";

const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

export async function getWeatherData({ city, lat, lon }) {
  const query = city ? `q=${city}` : `lat=${lat}&lon=${lon}`;
  const response = await http.get(`?${query}&appid=${apiKey}&units=metric`);
  if (response.status !== 200) {
    // Throw an error with a user-friendly message instead of logging the URL
    throw new Error(`Error fetching weather data: ${response.statusText}`);
  }
  return response.data;
}
