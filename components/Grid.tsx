"use client";

import { Search } from "./index";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import cities from "@/config/cities";
import {
  TCity,
  TSortBy,
  TTempUnit,
  celcius,
  fahrenheit,
  sortOptions,
} from "@/app/types/types";
import RadioButton from "./RadioButton";
import Sort from "./Sort";
import useFilteredAndSortedCities from "@/app/hooks/useFilteredAndSortedCities";

const Grid = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchText, setSearchText] = useState("");
  const [tempUnit, setTempUnit] = useState<TTempUnit>("celcius");
  const [sortBy, setSortBy] = useState<TSortBy>("name");
  const [selectedCity, setSelectedCity] = useState<string>("");

  const _searchText = searchParams.get("searchText");
  const _tempUnit = searchParams.get("tempUnit") as TTempUnit | null;
  const _sortBy = searchParams.get("sortBy") as TSortBy | null;
  const _measureFrom = searchParams.get("measureFrom") as TSortBy | null;

  const { filteredAndSortedCities } = useFilteredAndSortedCities(
    searchText,
    sortBy,
    selectedCity
  );

  // set to default values if not present in url on mount
  useEffect(() => {
    if (_searchText) {
      setSearchText(_searchText);
    }
    if (_sortBy) {
      setSortBy(_sortBy);
    } else {
      setSortBy("name");
    }
    if (_measureFrom) {
      setSelectedCity(_measureFrom);
    }
    if (_tempUnit) {
      setTempUnit(_tempUnit);
    } else {
      setTempUnit("celcius");
    }
  }, []);

  const handleSortChange = (value: TSortBy) => {
    setSortBy(value);
    router.push(
      `?searchText=${searchText}&tempUnit=${tempUnit}&sortBy=${value}&measureFrom=${selectedCity}`
    );
  };

  const handleCityChange = (cityName: string) => {
    setSelectedCity(cityName);
    router.push(
      `?searchText=${searchText}&tempUnit=${tempUnit}&sortBy=${sortBy}&measureFrom=${cityName}`
    );
  };

  const handleNavigateCity = (cityName: string) => {
    router.push(
      `city/${cityName}?tempUnit=${tempUnit}&sortBy=${sortBy}&measureFrom=${selectedCity}`
    );
  };

  const handleTempUnitChange = (unit: TTempUnit) => {
    setTempUnit(unit);
    router.push(
      `?searchText=${searchText}&tempUnit=${unit}&sortBy=${sortBy}&measureFrom=${selectedCity}`
    );
  };

  return (
    <section className="xl:flex-row flex-col flex justify-center">
      <div className="xl:w-8/12 w-11/12 xl:my-40 mt-10 md:mt-40 flex flex-col gap-6">
        <Search setSearchText={setSearchText} searchText={searchText} />
        <Sort
          sortBy={sortBy}
          sortOptions={sortOptions}
          handleSortChange={handleSortChange}
          cities={cities.cities}
          handleCityChange={handleCityChange}
          selectedCity={selectedCity}
        />

        <div className="flex flex-row space-x-4">
          <RadioButton
            id={celcius}
            value={celcius}
            checked={tempUnit === celcius}
            onChange={handleTempUnitChange}
          />
          <RadioButton
            id={fahrenheit}
            value={fahrenheit}
            checked={tempUnit === fahrenheit}
            onChange={handleTempUnitChange}
          />
        </div>

        <div className="flex flex-col space-y-4 p-2">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {filteredAndSortedCities.length ? (
              filteredAndSortedCities.map((city: TCity, index: number) => (
                <div
                  onClick={() => handleNavigateCity(city.name)}
                  key={index}
                  className="h-auto max-w-full rounded-lg text-grey p-3 bg-zinc-300"
                >
                  <img
                    className="h-auto max-w-full rounded-lg mb-2"
                    src={city.image}
                    alt={city.name}
                  />
                  <h4 className="text-l font-semibold">{city.name}</h4>
                  <p className="text-xs font-bold">{city.country}</p>
                  <p className="text-xs">{city.description}</p>
                </div>
              ))
            ) : (
              <p>No results found...</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Grid;
