import { useUser } from "@auth0/nextjs-auth0";
import React, { useEffect, useState } from "react";

const useAuth = () => {
    const { user, error, isLoading } = useUser();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        setIsAuthenticated(user ? true : false);
    }, [user]);

    return { isAuthenticated, user, error, isLoading }
};

export default useAuth;
