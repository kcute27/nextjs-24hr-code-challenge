import { MenuIcon } from "@heroicons/react/outline";
import { Tooltip } from "flowbite-react";
import React from "react";

const MenusButton = () => {
  return (
    <div>
      <Tooltip
        className="lg:hidden xl:hidden md:hidden flex"
        arrow={false}
        content="Menus"
        trigger="hover"
      >
        <div className="ml-1 mr-1 -mt-1 -mb-1 cursor-pointer flex-row place-items-center rounded-full bg-white px-2 py-2 font-sans shadow text-slate-600 hover:bg-gray-100 transition-all ease-in-out duration-150 lg:hidden md:hidden sm:hidden flex">
          <MenuIcon className="h-6" />
        </div>
      </Tooltip>
    </div>
  );
};

export default MenusButton;
