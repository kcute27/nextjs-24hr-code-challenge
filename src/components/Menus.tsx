import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import useAuth from "../services/auth/useAuth";
import useStore from "../store/useStore";
import useUtils from "../utils/useUtils";
import { IComponentStore, INavigationPaths } from "./types";

interface MenusProps {
  navs: Array<INavigationPaths>;
}

const LogoutPath = {
  name: "Logout",
  path: "/api/auth/logout",
  icon: <></>,
};

const Menus: FC<MenusProps> = ({ navs }) => {
  const router = useRouter();
  const { menuOpen, toggleMenu } = useStore((state: IComponentStore) => state);
  const { isAuthenticated } = useAuth();
  const { getPageTitle } = useUtils();
  const [navPaths, setNavPaths] = useState<Array<INavigationPaths>>([]);
  const [pathName, setPathName] = useState("");

  useEffect(() => {
    isAuthenticated ? setNavPaths([...navs, LogoutPath]) : setNavPaths(navs);
  }, [navs, isAuthenticated]);

  useEffect(() => {
    setPathName("/" + getPageTitle(router.pathname));
  }, [router, getPageTitle]);

  return (
    <div
      onMouseLeave={toggleMenu}
      className={`w-[150px] ${
        menuOpen ? "flex" : "hidden"
      } h-auto float-right fixed bg-white rounded-lg shadow flex flex-col top-[70px]`}
    >
      {navPaths.map((nav, index) => (
        <Link key={index} href={nav.path}>
          <div
            onClick={toggleMenu}
            className={`
            ${
              !isAuthenticated && index != 0 && "pointer-events-none opacity-50"
            }
            ${
              pathName === nav.path &&
              "pointer-events-none bg-gray-50 font-semibold"
            }
            p-2 text-success text-base last:border-b-0 border-b-[1px]`}
          >
            {nav.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Menus;
