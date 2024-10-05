import { Icon } from "@iconify/react";

const WeatherSun = ({ weatherData }) => {
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };
  const sunriseDate = new Date(weatherData.sys.sunrise * 1000);
  const sunrise = sunriseDate.toLocaleString([], options);
  const sunsetDate = new Date(weatherData.sys.sunset * 1000);
  const sunset = sunsetDate.toLocaleString([], options);
  return (
    <div className="w-full flex items-center justify-between md:max-w-lg bg-secondary-0 bg-opacity-40 backdrop-blur-md p-4 rounded-xl">
      <div className="flex flex-col items-center justify-center">
        <span className="font-medium">{sunrise}</span>
        <span>sunrise</span>
      </div>
      <span>
        <Icon icon="meteocons:sunrise" width={100} />
      </span>
      <div className="flex flex-col items-center justify-center">
        <span className="font-medium">{sunset}</span>
        <span>sunset</span>
      </div>
    </div>
  );
};

export default WeatherSun;
