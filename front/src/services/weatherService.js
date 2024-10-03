import http from "./httpService";

const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

export async function getWeatherData({ city, lat, lon }) {
  const query = city ? `q=${city}` : `lat=${lat}&lon=${lon}`;
  const { data } = await http.get(`?${query}&appid=${apiKey}`);
  return data;
}
