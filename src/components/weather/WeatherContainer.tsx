import React, { FC } from "react";
import { IWeather } from "./types";
import WeatherItem from "./WeatherItem";

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
  return (
    <div className="px-2 h-auto lg:mt-0 md:mt-0 sm:mt-0 flex">
      <div className="w-[100%] mt-[70px] lg:w-[60%] md:w-[70%] sm:w-[80%] mx-auto flex flex-col shadow p-3">
        {!error && weatherData && (
          <p className="text-[30px] p-5 rounded-lg text-center text-white bg-success">
            {weatherData.city.name}, {weatherData.city.country}
          </p>
        )}
        <div className="flex flex-col mt-5">
          {!error &&
            weatherData &&
            weatherData.list.map((data, index) => (
              <WeatherItem key={index} weatherItem={data} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherContainer;
