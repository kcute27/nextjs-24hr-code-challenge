import Brand from "./Brand";
import NavMenus from "./NavMenus";
import RightContainer from "./RightContainer";
import { HomeIcon, CloudIcon, SunIcon } from "@heroicons/react/outline";
import { INavigationPaths } from "../types";

export const NAVIGATION_PATHS: Array<INavigationPaths> = [
  {
    name: "Welcome",
    path: "/",
    icon: <CloudIcon className="h-6" />,
  },
  {
    name: "Home",
    path: "/home",
    icon: <HomeIcon className="h-6" />,
  },
  {
    name: "Weather",
    path: "/weather",
    icon: <SunIcon className="h-6" />,
  },
];

const NavbarContainer = () => {
  return (
    <div className="w-[100%] bg-white z-50 p-2 h-[auto] justify-between flex flex-row shadow fixed">
      <Brand
        name="Weather Forecast"
        logoPath="/static/images/weather-app.png"
      />
      <NavMenus menus={NAVIGATION_PATHS} />
      <RightContainer />
    </div>
  );
};

export default NavbarContainer;
