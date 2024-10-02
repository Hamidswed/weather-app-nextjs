// src/app/api/weather/route.js

import axios from "axios";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get("city");
  const latitude = searchParams.get("lat");
  const longitude = searchParams.get("lon");
  const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

  let url = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric`;

  if (city) {
    url += `&q=${city}`;
  } else if (latitude && longitude) {
    url += `&lat=${latitude}&lon=${longitude}`;
  } else {
    return new Response(JSON.stringify({ error: "No location specified" }), {
      status: 400,
    });
  }

  try {
    const response = await axios.get(url);
    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
