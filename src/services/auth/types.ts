import { UserProfile } from "@auth0/nextjs-auth0";

export interface IAuthStore {
    currentUser: UserProfile | null,
    setCurrentUser: (currentUser: UserProfile) => void,
    isAuthenticated: boolean,
    setIsAuthenticated: (isAuth: boolean) => void,
} 