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
