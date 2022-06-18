import React, { FC } from "react";
import { WeatherItem } from "./types";
import Image from "next/image";
import useUtils from "../../utils/useUtils";

interface WeatherItemProps {
  weatherItem: WeatherItem;
}
const WeatherItem: FC<WeatherItemProps> = ({ weatherItem }) => {
  const { convertCtoF } = useUtils();
  return (
    <div className="h-auto -z-1 w-[100%] overflow-x-hidden bg-gray-100 shadow rounded-[40px] p-4 flex flex-row my-1">
      <div className="flex flex-row place-items-center space-x-10">
        <Image
          src={`/static/images/${weatherItem.weather[0].main}.png`}
          width={70}
          height={70}
          objectFit="contain"
          layout="fixed"
          alt="logo"
          className="rounded-full shadow relative z-20"
        />
        <div className="text-gray-500 flex flex-col">
          <p>Date</p>
          <p className=" font-semibold"> {weatherItem.dt_txt.split(" ")[0]}</p>
        </div>
        <div className="text-gray-500">
          <p>Temp (F)</p>{" "}
          <p className=" font-semibold">
            {" "}
            {convertCtoF(weatherItem.main.temp).toPrecision(3)}
          </p>
        </div>
        <div className="text-gray-500 w-[120px] hidden lg:flex md:flex sm:flex flex-col">
          <p>Description</p>{" "}
          <p className=" font-semibold truncate">
            {" "}
            {weatherItem.weather[0].description}
          </p>
        </div>

        <div className="text-gray-500 hidden lg:flex md:flex sm:flex flex-col">
          <p>Main</p>{" "}
          <p className=" font-semibold"> {weatherItem.weather[0].main}</p>
        </div>

        <div className="text-gray-500 hidden lg:flex md:flex sm:flex flex-col">
          <p>Pressure</p>{" "}
          <p className=" font-semibold"> {weatherItem.main.pressure}</p>
        </div>

        <div className="text-gray-500 hidden lg:flex md:flex sm:flex flex-col">
          <p>Humidity</p>{" "}
          <p className=" font-semibold"> {weatherItem.main.humidity}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherItem;
