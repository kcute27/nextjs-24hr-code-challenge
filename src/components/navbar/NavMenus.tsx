import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { INavigationPaths } from "../types";
import useAuth from "../../services/auth/useAuth";
interface NavMenusProps {
  menus: Array<INavigationPaths>;
}

const NavMenus: FC<NavMenusProps> = ({ menus }) => {
  const router = useRouter();
  const [pathName, setPathName] = useState("");
  const { isAuthenticated } = useAuth();
  useEffect(() => {
    setPathName("/" + router.pathname.split("/")[1]);
  }, [router.pathname]);

  return (
    <div className="flex flex-row w-[600px] place-content-center">
      {menus.map((nav, index) => (
        <Link scroll={false} href={nav.path} key={index}>
          <div
            className={`${
              !isAuthenticated && index != 0 && "pointer-events-none opacity-50"
            } duration-400 -mt-3 pt-3 -mb-2 hidden cursor-pointer flex-col place-items-center px-2 font-sans text-dark transition-all ease-linear  sm:flex sm:px-4 md:flex md:px-5 lg:flex lg:px-12 hover:bg-gray-200
              ${
                pathName === nav.path &&
                "rounded-none border-b-[3px] hover:border-info border-info text-info hover:bg-transparent"
              }`}
          >
            {pathName === nav.path ? nav.icon : nav.icon}
            {nav.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NavMenus;
