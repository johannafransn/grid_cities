import cities from "@/config/cities";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import ApiService from "../ApiService";

export function useGetCityData() {
  const [city, setCity] = useState<TCity | null>(null);
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
            const weather = await ApiService.getWeatherData(lng, lat);
            //https://api.openweathermap.org/data/2.5/onecall?lon=[lon]&lat=[lat]&units=metric&appid=[ api-key]`
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

  return { city, loading, setCity };
}

export default useGetCityData;
