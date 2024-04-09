"use client";
import useGetCityData from "@/app/hooks/useGetCityData";
import { TTempUnit, celcius } from "@/app/types/types";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

export default function City() {
  const { city, loading, weather } = useGetCityData();
  const searchParams = useSearchParams();
  const router = useRouter();

  const tempUnit = searchParams.get("tempUnit") as TTempUnit | null;

  let temp;
  if (weather) {
    temp =
      tempUnit === celcius
        ? (weather.temp - 273.15).toFixed(2) // conversion from Kelvin to Celcius
        : (((weather.temp - 273.15) * 9) / 5 + 32).toFixed(2); // conversion from Kelvin to Fahrenheit
  }

  return (
    <div className="lg:mt-20 lg:mx-20 lg:p-12 bg-white mt-4 mx-4 p-8 mb-4 lg:mb-24 rounded">
      <div className="flex-1 sm:flex-auto w-full sm:w-auto">
        <button
          onClick={() => router.back()}
          className="mb-3 w-full sm:w-auto block  rounded-sm bg-activeButton py-3 px-4 font-medium text-white shadow hover:bg-activeButton disabled:cursor-not-allowed"
        >
          Go back
        </button>
      </div>
      {city && !loading && weather ? (
        <div className="flex flex-row">
          <Image
            className="img-responsive rounded-lg"
            width={200}
            height={200}
            src={city.image}
            alt="SDK Logo"
          />
          <div className="flex flex-col ml-3">
            <h2 className="font-normal text-3xl sm:text-4xl text-black">
              {city.name}
            </h2>
            <p>{city.description}</p>
            <p className="font-bold">
              {city.country}, {city.continent}
            </p>
            <p className="mt-3">
              {temp} {tempUnit} degrees, {weather.type.toLowerCase()}
            </p>
          </div>
        </div>
      ) : (
        <div>Loading city data...</div>
      )}
    </div>
  );
}
