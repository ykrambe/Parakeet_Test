import {create} from 'zustand';

export const useStore = create((set) => ({
  userData: [],
  setUserData: (data) => set({ userData: data }),
}));

