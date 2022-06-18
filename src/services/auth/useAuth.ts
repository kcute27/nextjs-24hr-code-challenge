import { useUser } from "@auth0/nextjs-auth0";
import { useEffect } from "react";
import useStore from "../../store/useStore";
import { IAuthStore } from "./types";

const useAuth = () => {
    const { user, error, isLoading } = useUser();
    const { setCurrentUser, setIsAuthenticated, isAuthenticated } = useStore(
        (state: IAuthStore) => state
    )
    useEffect(() => {
        if (user) {
            setCurrentUser(user);
            setIsAuthenticated(true);
        }
        else {
            setCurrentUser({});
            setIsAuthenticated(false);
        }
    }, [user]);

    return { error, isLoading, user, isAuthenticated }
};

export default useAuth;
