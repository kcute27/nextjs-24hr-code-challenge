import useAuth from "../../services/auth/useAuth";
import useStore from "../../store/useStore";
import Menus from "../Menus";
import { IComponentStore } from "../types";
import LogoutButton from "./LogoutButton";
import MenusButton from "./MenusButton";
import { NAVIGATION_PATHS } from "./NavPaths";

const RightContainer = () => {
  const { isAuthenticated } = useAuth();
  return (
    <div className="flex w-[300px] max-w-[300px] place-content-end place-items-center">
      {isAuthenticated && <LogoutButton />}
      <MenusButton />
      <Menus navs={NAVIGATION_PATHS} />
    </div>
  );
};

export default RightContainer;
