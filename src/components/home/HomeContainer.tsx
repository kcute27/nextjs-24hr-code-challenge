import { IAuthStore } from "../../services/auth/types";
import useAuth from "../../services/auth/useAuth";
import useStore from "../../store/useStore";
import { SearchBox } from "./SearchBox";
import UserProfile from "./UserProfile";

const HomeContainer = () => {
  const { currentUser } = useStore((state: IAuthStore) => state);
  return (
    <div className="px-2 h-screen mt-[80px] lg:mt-0 md:mt-0 sm:mt-0 lg:place-items-center md:place-items-center sm:place-items-center flex">
      <div className="w-[100%] lg:w-[60%] md:w-[70%] sm:w-[80%] mx-auto flex h-[500px] flex-col-reverse lg:flex-row md:flex-row sm:flex-row">
        <SearchBox />
        <UserProfile user={currentUser} />
      </div>
    </div>
  );
};

export default HomeContainer;
