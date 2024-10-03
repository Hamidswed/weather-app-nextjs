import { getWeatherData } from "@/services/weatherService";
import { Icon } from "@iconify/react";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

const SearchCity = ({ setCity }) => {
  const [inputCity, setInputCity] = useState("");
  // const { mutateAsync, isPending } = useMutation({
  //   mutationFn: getWeatherData,
  // });
  const handleSubmit = async (e) => {
    e.preventDefault();
    e.preventDefault();
    setCity(inputCity);
    // try {
    //   const data = await mutateAsync(city);
    //   console.log("data in search", data);
    //   setCity("");
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <div className="sm:max-w-sm mb-2">
      <form onSubmit={handleSubmit}>
        <div className="relative rounded-full overflow-hidden border border-secondary-300 focus:border-primary-400">
          <input
            type="text"
            name="city"
            defaultValue={inputCity}
            placeholder="Enter city name"
            className="px-4 py-1 w-full"
            onChange={(e) => setInputCity(e.target.value)}
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
