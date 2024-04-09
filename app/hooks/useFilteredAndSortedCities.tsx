import { useMemo } from "react";
import cities from "@/config/cities";
import { calculateDistance } from "@/helpers";

const useFilteredAndSortedCities = (
  searchText: string,
  sortBy: string,
  selectedCity: string
) => {
  //get whole city object from city name
  const selectedCityMatch = useMemo(() => {
    return cities.cities.find((city) => city.name === selectedCity);
  }, [selectedCity]);

  //filter cities by search for country or city name
  const filteredAndSortedCities = useMemo(() => {
    let sortedList = [...cities.cities];
    if (searchText) {
      const lowercaseSearchTerm = searchText.toLowerCase();
      sortedList = sortedList.filter((city) => {
        return (
          city.name.toLowerCase().includes(lowercaseSearchTerm) ||
          city.country.toLowerCase().includes(lowercaseSearchTerm)
        );
      });
    }
    //sort by name alphabetically or sort by distance from selected city
    if (sortBy === "name") {
      sortedList.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "distance" && selectedCityMatch) {
      sortedList.sort((a, b) => {
        const distanceToA = calculateDistance(
          a.coords,
          selectedCityMatch.coords
        );
        const distanceToB = calculateDistance(
          b.coords,
          selectedCityMatch.coords
        );
        return distanceToA - distanceToB;
      });
    }
    return sortedList;
  }, [searchText, sortBy, selectedCity]);

  return { filteredAndSortedCities };
};

export default useFilteredAndSortedCities;
