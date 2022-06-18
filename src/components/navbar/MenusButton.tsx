import { MenuIcon } from "@heroicons/react/outline";

const MenusButton = () => {
  return (
    <div>
      <div className="ml-1 mr-1 -mt-1 -mb-1 cursor-pointer flex-row place-items-center rounded-full bg-white px-2 py-2 font-sans shadow text-slate-600 hover:bg-gray-100 transition-all ease-in-out duration-150 lg:hidden md:hidden sm:hidden flex">
        <MenuIcon className="h-6" />
      </div>
    </div>
  );
};

export default MenusButton;
