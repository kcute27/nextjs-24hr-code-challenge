import React from "react";

const LeftPanel = () => {
  return (
    <div className="h-[auto] text-center place-items-center place-content-center bg-white shadow flex-col flex w-[100%] lg:w-[60%] md:w-[60%] sm:w-[60%] rounded-tl-lg p-5 justify-center">
      <p className="text-[30px] text-success font-bold">Weather Forecast</p>
      <p className="p-5 flex place-content-center place-items-center lg:text-[20px] text-dark ">
        Welcome to the weather forecast web application. Please Login with your
        GitHub user to use the application and view the weather in your city.
      </p>
    </div>
  );
};

export default LeftPanel;
