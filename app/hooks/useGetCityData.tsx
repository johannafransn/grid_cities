import cities from "@/config/cities";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import ApiService from "../ApiService";
import { TCity } from "../types/types";

export function useGetCityData() {
  const [city, setCity] = useState<TCity | null>(null);
  const [weather, setWeather] = useState<any | null>(null);

  const [loading, setLoading] = useState<boolean>(false);
  let { id: cityName } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (cityName && !city && process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY) {
          const decodedCityName = decodeURIComponent(cityName.toString());
          const foundCity = cities.cities.find(
            (city) => city.name === decodedCityName
          );
          if (foundCity) {
            const { lng, lat } = foundCity.coords;
            const weather = await ApiService.getWeatherData(foundCity.name);
            setWeather(weather);
            setCity(foundCity);
          } else {
            //TODO handle error here
            console.log("Error could not find city in array");
          }
        }
      } catch (error) {
        //TODO handle error
        console.log(error, "Error fetching the city with id:" + cityName);
      }
      setLoading(false);
    };
    fetchData();
  }, [city, cityName]);

  return { city, loading, setCity, weather };
}

export default useGetCityData;
