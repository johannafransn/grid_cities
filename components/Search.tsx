"use client";
import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";

type SearchProps = {
  setSearchText: (txt: string) => void;
  searchText: string;
};
export const Search = (props: SearchProps) => {
  const { searchText, setSearchText } = props;
  const router = useRouter();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    const queryParams = {
      searchText: e.target.value,
    };
    //save the searchtext as URL so when clicking back btn search is saved and also URL can be shared
    router.push(`?${new URLSearchParams(queryParams).toString()}`);
  };

  return (
    <div className="relative flex flex-col space-y-4">
      <div className="min-w-0 flex-1">
        <label htmlFor="email" className="sr-only">
          Search
        </label>
        <input
          type="text"
          placeholder="Search by city or country..."
          value={searchText}
          onChange={(e) => handleSearch(e)}
          className="form-control block w-full rounded-sm bg-gray px-4 py-5 text-base text-black placeholder-gray-500 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default Search;
