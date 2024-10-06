const WeatherData = ({ weatherData }) => {
  const iconUrl = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = new Date().toLocaleDateString("en-US", options);

  return (
    <div className="w-full flex flex-col md:max-w-lg lg:order-2 bg-secondary-0 bg-opacity-40 backdrop-blur-md gap-1 p-4 rounded-xl">
      <div>
        <span className="text-sm">{date}</span>
      </div>
      <div className="flex items-center justify-between gap-x-2">
        <div className="">
          <h2 className="font-bold text-xl">{weatherData?.name}</h2>
          <p>{weatherData?.weather[0].description}</p>
        </div>
        <p className="flex items-start text-amber-400">
          <span className="text-5xl">{Math.round(weatherData?.main.temp)}</span>
          <span>°C</span>
        </p>
        <div className="hidden min-[400px]:block ">
          <img src={iconUrl} alt={weatherData.weather[0].description} />
        </div>
      </div>
    </div>
  );
};

export default WeatherData;
