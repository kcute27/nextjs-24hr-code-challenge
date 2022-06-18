import { UserProfile } from "@auth0/nextjs-auth0"
import { StoreSlice } from "../../store/types"
import { IAuthStore } from "./types"


const createAuthStore: StoreSlice<IAuthStore> = (set) => ({
    currentUser: null,
    setCurrentUser: (currentUser: UserProfile) => set(() => ({ currentUser: currentUser })),
    isAuthenticated: false,
    setIsAuthenticated: (isAuth: boolean) => set(() => ({ isAuthenticated: isAuth })),
})

export default createAuthStore