import { SearchIcon } from "@heroicons/react/outline";
import Link from "next/link";
import useStore from "../../store/useStore";
import { IComponentStore } from "../types";

export const SearchBox = () => {
  const { setSearchKey, searchKey } = useStore(
    (state: IComponentStore) => state
  );

  return (
    <div className="h-[auto] text-center place-items-center place-content-center bg-white shadow flex-col flex w-[100%] lg:w-[60%] md:w-[60%] sm:w-[60%] rounded-tl-lg p-5 justify-center">
      <p className="text-[30px] text-dark font-bold">Weather Forecast</p>
      <div className="mt-5 flex w-[100%] flex-row place-content-center place-items-center">
        <SearchIcon className="relative z-10 h-[30px] text-gray-600 -mr-10" />
        <input
          defaultValue={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
          className="py-[10px] w-[90%] px-[50px] rounded-full text-lg bg-gray-200 focus:bg-gray-100 focus:opacity-75 hover:bg-gray-300 transition-all ease-in-out duration-300"
          placeholder="Search weather by city..."
        />
      </div>
      <Link href={`/weather/${searchKey}`}>
        <button className="mt-5 p-3 bg-success shadow rounded-lg hover:opacity-80 transition-all ease-in-out duration-300 font-semibold text-white">
          Display Weather
        </button>
      </Link>
    </div>
  );
};
