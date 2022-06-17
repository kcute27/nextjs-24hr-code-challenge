import React from "react";
import Brand from "./Brand";

const NavbarContainer = () => {
  return (
    <div className="w-[100%] p-2 h-[auto] bg-slate-200 shadow fixed">
      <Brand
        name="Weather Forecast"
        logoPath="/static/images/weather-app.png"
      />
    </div>
  );
};

export default NavbarContainer;
