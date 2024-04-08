"use client";
import useGetCityData from "@/app/hooks/useGetCityData";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function City() {
  const { id: cityName } = useParams();
  const { city, loading } = useGetCityData();

  return (
    <div className="lg:mt-20 lg:mx-20 lg:p-12 bg-white mt-4 mx-4 p-8 mb-4 lg:mb-24 rounded">
      {city && !loading ? (
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
          </div>
        </div>
      ) : (
        <div>Loading city data...</div>
      )}
    </div>
  );
}
