import { StoreSlice } from "../store/types";
import { IComponentStore } from "./types";


const createComponentStore: StoreSlice<IComponentStore> = (set) => ({
    searchKey: "Philippines",
    setSearchKey: (key: string) => set(() => ({ searchKey: key })),
    menuOpen: false,
    toggleMenu: () => set((state) => ({ menuOpen: !state.menuOpen })),
})



export default createComponentStore