import { Icon } from "@iconify/react";
import { useState } from "react";

const SearchCity = ({ setCity }) => {
  const [inputCity, setInputCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(inputCity);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setInputCity("");
  };

  return (
    <div className="sm:max-w-sm mb-2">
      <form onSubmit={handleSubmit}>
        <div className="relative flex items-center justify-between shadow-md rounded-full overflow-hidden">
          <input
            type="text"
            name="city"
            value={inputCity}
            placeholder="Enter city name"
            className="px-4 py-1 w-full"
            onChange={(e) => setInputCity(e.target.value)}
          />

          {inputCity ? (
            <button
              type="button"
              onClick={handleClick}
              className="absolute right-0 px-2 text-secondary-300"
            >
              <Icon icon="ic:round-close" width={20} />
            </button>
          ) : (
            <button
              type="submit"
              className="absolute right-0 px-2 text-secondary-300"
            >
              <Icon icon="uil:search" width={20} />
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default SearchCity;
