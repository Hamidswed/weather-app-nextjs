import useWeather from "@/hooks/useWeather";
import { Icon } from "@iconify/react";

const SearchCity = ({ setCity, city }) => {
  const { fetchWeatherByCity, setError } = useWeather(city);
  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log("submitted");
    if (city !== "") {
      fetchWeatherByCity();
    } else setError("Please enter a city");
  };
  return (
    <div className="sm:max-w-sm mb-2">
      <form onSubmit={handleSubmit}>
        <div className="relative rounded-full overflow-hidden border border-secondary-300 focus:border-primary-400">
          <input
            type="text"
            name="city"
            value={city}
            placeholder="Enter city name"
            className="px-4 py-1 w-full"
            onChange={(e) => setCity(e.target.value)}
          />

          <button
            type="submit"
            className="absolute top-1 right-0 px-2 text-secondary-300"
          >
            <Icon icon="uil:search" width={20} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchCity;
