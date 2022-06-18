import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { INavigationPaths } from "../../constants/types";

interface NavMenusProps {
  menus: Array<INavigationPaths>;
}

const NavMenus: FC<NavMenusProps> = ({ menus }) => {
  const router = useRouter();
  return (
    <div className="flex flex-row w-[600px] place-content-center">
      {menus.map((nav, index) => (
        <Link scroll={false} href={nav.path} key={index}>
          <div
            className={`duration-400 -mt-3 pt-3 -mb-2 hidden cursor-pointer flex-col place-items-center px-2 font-sans text-dark transition-all ease-linear  sm:flex sm:px-4 md:flex md:px-5 lg:flex lg:px-12 hover:bg-gray-200
              ${
                router.pathname === nav.path &&
                "rounded-none border-b-[3px] hover:border-info border-info text-info hover:bg-transparent"
              }`}
          >
            {router.pathname === nav.path ? nav.icon : nav.icon}
            {nav.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NavMenus;
