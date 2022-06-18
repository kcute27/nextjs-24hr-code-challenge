import React from "react";
import { SearchIcon } from "@heroicons/react/outline";

export const SearchBox = () => {
  return (
    <div className="h-[auto] text-center place-items-center place-content-center bg-white shadow flex-col flex w-[100%] lg:w-[60%] md:w-[60%] sm:w-[60%] rounded-tl-lg p-5 justify-center">
      <p className="text-[30px] text-dark font-bold">Weather Forecast</p>
      <div className="mt-5 flex w-[100%] flex-row place-content-center place-items-center">
        <SearchIcon className="relative z-10 h-[30px] text-gray-600 -mr-10" />
        <input
          className="py-[10px] w-[90%] px-[50px] rounded-full text-lg bg-gray-200 focus:bg-gray-100 focus:opacity-75 hover:bg-gray-300 transition-all ease-in-out duration-300"
          placeholder="Search weather by city..."
        />
      </div>

      <button className="mt-5 p-3 bg-success shadow rounded-lg hover:opacity-80 transition-all ease-in-out duration-300 font-semibold text-white">
        Display Weather
      </button>
    </div>
  );
};
