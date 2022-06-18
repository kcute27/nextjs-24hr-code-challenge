import React from "react";
import { LogoutIcon } from "@heroicons/react/outline";
import { Tooltip } from "flowbite-react";

const LogoutButton = () => {
  return (
    <Tooltip arrow={false} content="Logout" trigger="hover">
      <div className="ml-1 mr-1 -mt-1 -mb-1 cursor-pointer flex-row place-items-center rounded-full bg-white px-2 py-2 font-sans shadow text-slate-600 hover:bg-gray-100 transition-all ease-in-out duration-150 hidden lg:flex md:flex sm:flex">
        <LogoutIcon className="h-6" />
        <p className="hidden lg:flex md:flex sm:flex">Logout</p>
      </div>
    </Tooltip>
  );
};

export default LogoutButton;
