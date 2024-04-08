"use client";

// config
// components
import { Search } from "./index";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import cities from "@/config/cities";

const Grid = () => {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");

  const handleNavigateCity = (cityName: string) => {
    router.push(`city/${cityName}`);
  };

  const filteredCities = useMemo(() => {
    if (!searchText) {
      return cities.cities;
    }
    const lowercaseSearchTerm = searchText.toLowerCase();
    return cities.cities.filter((city) => {
      return (
        city.name.toLowerCase().includes(lowercaseSearchTerm) ||
        city.country.toLowerCase().includes(lowercaseSearchTerm)
      );
    });
  }, [searchText]);

  return (
    <section className="xl:flex-row flex-col flex justify-center">
      <div className="xl:w-8/12 w-11/12 xl:my-40 mt-10 md:mt-40 flex flex-col gap-6">
        <Search setSearchText={setSearchText} searchText={searchText} />

        <div className="flex flex-col space-y-4 p-2">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {filteredCities.map((city, index) => (
              <div
                onClick={() => handleNavigateCity(city.name)}
                key={index}
                className="h-auto max-w-full rounded-lg text-grey p-3 bg-zinc-300"
              >
                <img
                  className="h-auto max-w-full rounded-lg mb-2"
                  src={city.image}
                  alt={city.name}
                />{" "}
                <div className="flex flex-row ">
                  <h4 className="text-l font-semibold">{city.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

//            <span className="bg-primary whitespace-nowrap inline-block ml-1 absolute px-2 w-[fit-content]  leading-[8px] text-black rounded h-2 sm:h-3">

export default Grid;
