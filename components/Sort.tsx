import { TSortBy } from "@/app/types/types";
import React from "react";

type SortProps = {
  sortOptions: string[];
  sortBy: TSortBy;
  handleSortChange: (value: TSortBy) => void;
  cities: { name: string }[];
  handleCityChange: (cityName: string) => void;
  selectedCity: string;
};

const Sort: React.FC<SortProps> = ({
  sortOptions,
  handleSortChange,
  cities,
  sortBy,
  handleCityChange,
  selectedCity,
}) => {
  const handleSortByChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleSortChange(e.target.value as TSortBy);
  };

  const handleCitySelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleCityChange(e.target.value);
  };
  return (
    <div className="flex flex-row space-x-4">
      <select
        value={sortBy}
        defaultValue={sortBy}
        onChange={handleSortByChange}
      >
        {sortOptions.map((option, index) => (
          <option key={index} value={option}>
            Sort by {option}
          </option>
        ))}
      </select>
      {sortBy === "distance" ? (
        <select onChange={handleCitySelectChange} defaultValue={selectedCity}>
          <option value="" disabled>
            Select a city
          </option>
          {cities.map((city, index) => (
            <option key={index} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      ) : null}
    </div>
  );
};

export default Sort;
