import Brand from "./Brand";
import NavMenus from "./NavMenus";
import RightContainer from "./RightContainer";
import { NAVIGATION_PATHS } from "./NavPaths";

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
