// store/useStore.ts
"use client";

import { create } from "zustand";

interface StoreState {
  isClicked: boolean;
  toggleIsClicked: (value: boolean) => void;
}

export const useStore = create<StoreState>((set) => ({
  isClicked: false,
  toggleIsClicked: (value) => set({ isClicked: value }),
}));
