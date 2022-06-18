import create, { GetState, SetState } from "zustand";
import { devtools } from 'zustand/middleware'
import createComponentStore from "../components/componentStore";
import createAuthStore from "../services/auth/authStore";

const createRootSlice = (set: SetState<any>, get: GetState<any>) => ({
    ...createAuthStore(set, get),
    ...createComponentStore(set, get),
});

const useStore = create(devtools(createRootSlice));

export default useStore;