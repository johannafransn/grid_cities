"use client";
import useGetCityData from "@/app/hooks/useGetCityData";
import cities from "@/config/cities";
import { useMemo, useState } from "react";

type SearchProps = {
  setSearchText: (txt: string) => void;
  searchText: string;
};
export const Search = (props: SearchProps) => {
  const { searchText, setSearchText } = props;
  const { setCity } = useGetCityData();
  const [mail, setMail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <div className="relative flex flex-col space-y-4">
      <div className="min-w-0 flex-1">
        <label htmlFor="email" className="sr-only">
          Search
        </label>
        <input
          type="text"
          placeholder="Search by city or country"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="form-control block w-full rounded-sm bg-gray px-4 py-5 text-base text-black placeholder-gray-500 focus:outline-none"
        />
      </div>
      <div className="mt-1 ml-2 sm:mt-3 sm:ml-3 flex-1 sm:flex-auto w-full sm:w-auto">
        <button
          type="submit"
          className="relative sm:absolute right-2 sm:top-2 w-full sm:w-auto block  rounded-sm bg-activeButton py-3 px-4 font-medium text-white shadow hover:bg-activeButton disabled:cursor-not-allowed"
          disabled={mail === "" || loading}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
