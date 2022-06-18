import { UserProfile } from "@auth0/nextjs-auth0"
import { StoreSlice } from "../store/types";
import { IComponentStore } from "./types";


const createComponentStore: StoreSlice<IComponentStore> = (set) => ({
    searchKey: "",
    setSearchKey: (key: string) => set(() => ({ searchKey: key })),
})



export default createComponentStore