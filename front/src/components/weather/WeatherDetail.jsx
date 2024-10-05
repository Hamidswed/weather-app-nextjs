const WeatherDetail = ({ weatherData }) => {
  return (
    <div className="w-full flex items-center justify-between md:max-w-lg md:order-2 bg-secondary-0 bg-opacity-40 backdrop-blur-md p-4 rounded-xl">
      <div className="flex items-center justify-between text-sm min-[350px]:text-base gap-x-1">
        <ul className="space-y-1">
          <li>min temp</li>
          <li>max temp</li>
          <li>pressure</li>
          <li>humidity</li>
        </ul>
        <ul className="space-y-1 font-medium">
          <li>:&nbsp;{weatherData.main.temp_min}</li>
          <li>:&nbsp;{weatherData.main.temp_max}</li>
          <li>:&nbsp;{weatherData.main.pressure}</li>
          <li>:&nbsp;{weatherData.main.humidity}</li>
        </ul>
      </div>

      <div className="flex items-center justify-between text-sm min-[350px]:text-base gap-x-1">
        <ul className="space-y-1">
          <li>wind speed</li>
          <li>wind degree</li>
          <li>sea level</li>
          <li>ground level</li>
        </ul>
        <ul className="space-y-1 font-medium">
          <li>:&nbsp;{weatherData.wind.speed}</li>
          <li>:&nbsp;{weatherData.wind.deg}</li>
          <li>:&nbsp;{weatherData.main.sea_level}</li>
          <li>:&nbsp;{weatherData.main.grnd_level}</li>
        </ul>
      </div>
    </div>
  );
};

export default WeatherDetail;
