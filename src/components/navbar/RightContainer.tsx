import useAuth from "../../services/auth/useAuth";
import LogoutButton from "./LogoutButton";
import MenusButton from "./MenusButton";

const RightContainer = () => {
  const { isAuthenticated } = useAuth();
  return (
    <div className="flex w-[300px] max-w-[300px] place-content-end place-items-center">
      {isAuthenticated && <LogoutButton />}
      <MenusButton />
    </div>
  );
};

export default RightContainer;
