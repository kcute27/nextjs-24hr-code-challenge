import create, { GetState, SetState } from "zustand";
import { devtools } from 'zustand/middleware'

const createRootSlice = (set: SetState<any>, get: GetState<any>) => ({

});

const useStore = create(devtools(createRootSlice));

export default useStore;