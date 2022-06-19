import React, { FC } from "react";
import { IWeather } from "./types";
import WeatherItem from "./WeatherItem";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";

interface WeatherContainerProps {
  weatherData: IWeather | null;
  isLoading: boolean;
  error: any;
}

const WeatherContainer: FC<WeatherContainerProps> = ({
  weatherData,
  error,
  isLoading,
}) => {
  const router = useRouter();
  return (
    <div className="px-2 h-auto lg:mt-0 md:mt-0 sm:mt-0 flex">
      <div className="w-[100%] mt-[70px] lg:w-[60%] md:w-[70%] sm:w-[80%] mx-auto flex flex-col shadow p-3">
        {!error && weatherData && (
          <p className="text-[20px] z-40 opacity-90 lg:w-[58%] md:w-[66%] sm:w-[75%] w-[89%] fixed p-3 rounded-full text-center text-white shadow bg-success">
            {weatherData.city.name}, {weatherData.city.country}
          </p>
        )}
        <div className="flex flex-col mt-[60px]">
          {!error &&
            weatherData &&
            weatherData.list.map((data, index) => (
              <WeatherItem key={index} weatherItem={data} />
            ))}
        </div>
        <button
          onClick={() => router.replace("/home")}
          className="bg-dark p-5 rounded-full text-white scale-100 sm:scale-0 opacity-90 transition-all ease-in-out duration-200 bottom-10 fixed z-50 right-10"
        >
          <ArrowLeftIcon className="h-4" />
        </button>
      </div>
    </div>
  );
};

export default WeatherContainer;
